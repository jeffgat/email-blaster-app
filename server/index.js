const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

// require('/routes/authRoutes')(app); // because authRoutes returns a function that takes in 'app', we don't need to assign it to a variable and can pass it in like this.
authRoutes(app); // though i prefer this tbh
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Express wil serve up production assets
  // like main.js file, or main.css file
  app.use(express.static('client/build'));

  // express will serve up the index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  }) 
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

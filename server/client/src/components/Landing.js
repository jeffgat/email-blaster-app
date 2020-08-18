import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  color: #333;
  margin-bottom: 0;
`

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title>Node Email Blaster</Title>
      <p>Collect feedback from you users</p>
    </div>
  );
};

export default Landing;

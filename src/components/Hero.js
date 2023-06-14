// Hero.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

// import {  } from "profileimage";

const Hero = () => {
  return (
    <Container fluid>
      <img src="../assets/www.jpg" alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
      <h1>Mahmoud Hassan</h1>
      <p>
      I'd like to join as a (full stack web developer) that provide me with an opportunity to establish a recognizable career on both the personal and professional levels in addition to be an active participant in the ITI success, where my interpersonal skills can be enhanced and fully utilized.
      </p>
      <p>
        <Button variant="primary">mahmoud hassan</Button>
      </p>
    </Container>
  );
};

export default Hero;
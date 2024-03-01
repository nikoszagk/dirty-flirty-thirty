import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  text-align: center;
`;

const Title = styled.h1`
  color: #333; /* Example color */
`;

const HeroSection = () => {
    return (
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>Dirty Flirty Thirty!</Title>
      </Container>
    );
  };

export default HeroSection;

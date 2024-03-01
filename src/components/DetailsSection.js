import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatingFrame = styled(motion.div)`
  padding: 20px;
  margin: 0rem auto 5rem; // Reduced top margin to move the frame up
  max-width: 600px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 20px;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Text = styled.p`
  color: #666;
`;

const DetailsSection = () => {
  return (
    <Container>
      <FloatingFrame
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
      >
        <Heading>When & Where</Heading>
        <Text>Date: March 10th, 2024</Text>
        <Text>Location: 123 Party Lane, Celebration City</Text>
        <Text>Time: 7:00 PM onwards</Text>
      </FloatingFrame>
    </Container>
  );
};

export default DetailsSection;

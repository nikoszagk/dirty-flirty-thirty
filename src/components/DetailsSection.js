import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io'; // Example using react-icons

const ScrollIndicator = styled(motion.div)`
  position: fixed; // Or 'absolute' if inside a relative container
  bottom: 20px;
  transform: translateX(-50%);
  color: #333; // Or any color that stands out against your background
  font-size: 24px; // Adjust as needed
  z-index: 100; // Ensure it's above other content
  cursor: pointer; // Optional, if you want to make it clickable
  user-select: none; // Prevent text selection
`;


const FloatingFrame = styled(motion.div)`
  padding: 20px;
  margin: 0rem auto 5rem;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.4); // White with some transparency

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
  color: #black;
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
        <Heading>Event Details</Heading>
        <Text>Ημερομηνία: Σάββατο 9/3/2024</Text>
        <Text>Ώρα: 9:00 ΜΜ</Text>
        <Text>Τοποθεσία: My place (επικοινωνήστε μαζί μου για τη διεύθυνση)</Text>
        {/* Additional Info Here */}
        <Heading>More Info</Heading>
        <Text>Το gathering θα ειναι μέχρι τις 2πμ περίπου. Μετα θα ακολουθήσει έξοδος για να χορέψουμε τα κορμιά μας αλύπητα. Please RSVP :) </Text>
        <Heading>Extra Info</Heading>
        <Text>Bring your own booze αν θέλετε κάτι ξεχωριστό </Text>
      </FloatingFrame>
      <ScrollIndicator
        animate={{ y: ['0%', '-20%', '0%'] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} // Optional: smooth scroll on click
      >
        <IoIosArrowDown /> {/* Example icon */}
      </ScrollIndicator>
    </Container>
  );
};

export default DetailsSection;

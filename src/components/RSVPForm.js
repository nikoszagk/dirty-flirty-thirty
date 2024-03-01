import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: -20px; // Adjust this value as needed to move the form up
  padding: 20px;
  // Other styles remain unchanged
`;


const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RSVPForm = () => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitted(true);
      // Simulate sending data to a server
      console.log(`Sending RSVP for: ${name}`);
      setTimeout(() => {
        alert(`Thank you for your RSVP, ${name}!`);
        setName(''); // Reset name after "submission"
        setSubmitted(false);
      }, 2000); // Simulate server response delay
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} disabled={submitted} />
        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        RSVP
        </Button>
      </Form>
    );
  };


  export default RSVPForm;

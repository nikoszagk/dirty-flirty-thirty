import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confetti from 'canvas-confetti';

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: -20px;
  padding: 20px;
  // Add your other style customizations here
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

  const firework = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prevent duplicate submissions by checking against local storage
    if (localStorage.getItem(name)) {
      alert('You have already submitted your RSVP.');
      setSubmitted(false);
      return;
    }

    const formData = { name };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwHHwaK4cIzKPW-NwVVFWgwYbozdDYWfvyO01pVPVeNboY_DCpHgLzKGoNiKyHKd0KC/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Optimistically assume success and show thank you message
      firework();
      notifySuccess(`Thank you for your RSVP, ${name}!`);
      // Use local storage to mark this name as submitted
      localStorage.setItem(name, true);
      setName(''); // Reset the form
      setSubmitted(false);
    } catch (error) {
      console.error('Submission error:', error);
      notifyError('Submission failed. Please check your internet connection and try again.');
      setSubmitted(false);
    }
  };

  const notifySuccess = () => toast.success(`Thank you for your RSVP, ${name}!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const notifyError = () => toast.error('Submission failed. Please check your internet connection and try again.', {
    // similar options as success
  });

  

  return (
    <Form initial={{ scale: 0.8 }} animate={{ scale: 1 }} onSubmit={handleSubmit}>
      <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} disabled={submitted} />
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={submitted}>
        RSVP
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default RSVPForm;

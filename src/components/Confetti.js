import { useEffect } from 'react'; // Import useEffect from React
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    // Run the confetti explosion on mount
    const end = Date.now() + (1 * 1000); // Keep firing confetti for 15 seconds

    // A function to fire confetti at different angles
    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        shapes: ['square', 'circle'],
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2
        }
      });
    }, 100); // Emit confetti every 200ms

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return null; // This component does not render anything
};

export default Confetti;

import { motion } from 'motion/react';
import { CompetitionGuide } from './components/CompetitionGuide';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CompetitionGuide />
    </motion.div>
  );
}
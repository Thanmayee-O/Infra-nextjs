'use client';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StaggerItem({ children }) {
  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}
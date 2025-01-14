import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  text: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ text, index }) => {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <p className="card-text">{text}</p>
    </motion.div>
  );
};

export default Card;

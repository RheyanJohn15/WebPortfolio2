import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BoxReveal from "../ui/box-reveal";
interface CardProps {
  header: string;
  index: number;
  image: string;
  desc: string;
  isHeader: boolean;
  position: string;
  company: string;
  year: string;
}

const Card: React.FC<CardProps> = ({ header, image, desc, index, isHeader, position, company, year }) => {
  return (
    <motion.div
      className="w-3/4 h-[50vh] flex items-center justify-center card border shadow-lg rounded-lg my-4 mx-0"
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
      {
        isHeader ? <div className="w-full h-full flex items-center justify-center">
           <BoxReveal boxColor={"#000"} duration={0.5}>
          <h1 className="text-black font-bold text-6xl">{header}</h1>
        </BoxReveal>
        </div> : <>
          <div className="w-1/3 h-full flex items-center justify-center px-8">
        <Image width={1000} height={1000} alt={header} src={image} className="w-auto rounded-lg" />
      </div>

      <div className="w-2/3 h-full flex flex-col justify-center gap-4">
        <BoxReveal boxColor={"#000"} duration={0.5}>
          <h1 className="text-black font-bold text-4xl">{header}</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#000"} duration={0.5}>
          <p className="text-black text-2xl">{desc}</p>
        </BoxReveal>
        <BoxReveal boxColor={"#000"} duration={0.5}>
          <p className="text-slate-600 text-xl">{position} - {company} <br/> <span className="text-slate-600 text-base">{year}</span> </p>
        </BoxReveal>
       
      </div>
      </>
      }
    
    </motion.div>
  );
};

export default Card;

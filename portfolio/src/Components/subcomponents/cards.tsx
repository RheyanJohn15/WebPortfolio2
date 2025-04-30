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
      className="w-full md:w-3/4 h-auto md:h-[50vh] flex flex-col md:flex-row items-center justify-center border border-gray-200 bg-white shadow-md hover:shadow-xl rounded-2xl my-8 mx-auto transition-all duration-300 overflow-hidden"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        },
      }}
      viewport={{ once: true }}
    >
      {isHeader ? (
        <div className="w-full h-full flex items-center justify-center py-12">
          <BoxReveal boxColor="#000" duration={0.5}>
            <h1 className="text-black font-bold text-5xl md:text-6xl text-center">
              {header}
            </h1>
          </BoxReveal>
        </div>
      ) : (
        <>
          <div className="w-full md:w-1/3 h-64 md:h-full flex items-center justify-center p-4">
            <Image
              width={1000}
              height={1000}
              alt={header}
              src={image}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center gap-6">
            <BoxReveal boxColor={"#000"} duration={0.5}>
              <h2 className="text-black font-semibold text-3xl md:text-4xl">{header}</h2>
            </BoxReveal>
            <BoxReveal boxColor={"#000"} duration={0.5}>
              <p className="text-gray-700 text-lg md:text-xl">{desc}</p>
            </BoxReveal>
            <BoxReveal boxColor={"#000"} duration={0.5}>
              <p className="text-gray-500 text-md md:text-lg">
                {position} – {company}
                <br />
                <span className="text-sm">{year}</span>
              </p>
            </BoxReveal>
          </div>
        </>
      )}
    </motion.div>
  );
};
export default Card;

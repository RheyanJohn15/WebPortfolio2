import BoxReveal from "@/Components/ui/box-reveal";
import Image from "next/image";
import React from "react";
import { textVal } from "@/data/text";

export default function AboutMe() {
  const descriptions = [
    textVal.aboutme.desc1,
    textVal.aboutme.desc2,
    textVal.aboutme.desc3,
    textVal.aboutme.desc4,
    textVal.aboutme.desc5,
  ];

  return (
    <div
      id="aboutme"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-24 py-20 bg-white"
    >
      <div className="w-full md:w-1/2">
        <BoxReveal boxColor="#000" duration={0.5}>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-gray-900">
            {textVal.aboutme.header}
          </h2>
        </BoxReveal>

        <div className="space-y-4">
          {descriptions.map((desc, index) => (
            <BoxReveal key={index} boxColor="#000" duration={0.5}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {desc}
              </p>
            </BoxReveal>
          ))}
        </div>
      </div>

      <div className="w-2/3 md:w-1/3 flex justify-center items-center">
        <Image
          src="/portf/rheyan.jpg"
          className="rounded-full object-cover shadow-lg"
          width={400}
          height={400}
          alt="Rheyan John Blanco"
        />
      </div>
    </div>
  );
}

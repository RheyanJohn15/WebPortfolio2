import BoxReveal from "@/Components/ui/box-reveal";
import Image from "next/image";
import React from "react";
import { textVal } from "@/data/text";
import { myProjects } from "@/data/myprojects";

export default function Projects() {

      
  return (
    <div id="projects" className="w-full px-6 md:px-24 py-16 bg-white ">
      <BoxReveal boxColor={"#000"} duration={0.5}>
        <h2 className="text-4xl md:text-6xl mb-12 font-bold text-center text-gray-800">
          {textVal.projects.header || "Project Showcase"}
        </h2>
      </BoxReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {myProjects.map((proj, idx) => (
        <Cards
            key={idx}
            image={proj.image}
            header={proj.header}
            description={proj.description}
            link={proj.link}
        />
        ))}

      </div>
    </div>
  );
}

interface CardProps {
    image: string;
    header: string;
    description: string;
    link: string;
  }
  
  const Cards: React.FC<CardProps> = ({ image, header, description, link }) => {
    return (
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-48 relative">
          <Image src={image} alt={header} fill className="object-cover" />
        </div>
        <div className="p-4 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-gray-800">{header}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium hover:underline mt-2"
          >
            Visit Project →
          </a>
        </div>
      </div>
    );
  };

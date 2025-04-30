import BoxReveal from "@/Components/ui/box-reveal";
import Image from "next/image";
import React from "react";
import { textVal } from "@/data/text";

export default function Projects() {
    const myProjects = [
        {
          image: "/projects/orangeshire.png",
          header: "Coworking Management System",
          description:
            "Developed using Laravel, jQuery, and MySQL, this system manages customer check-ins and check-outs, tracks subscriptions, and calculates payments based on time consumed. It also provides sales data analytics for administrative insights.",
          link: "https://orangeshire.com",
        },
        {
          image: "/projects/coresupporthub.png",
          header: "Core Support Hub",
          description:
            "A responsive company website built with Next.js, React, and Tailwind CSS. It features an admin panel for managing employee attendance, visitor messages, and newsletter subscribers. Data is handled via custom Django APIs and stored in a PostgreSQL database.",
          link: "https://coresupporthub.com",
        },
        {
          image: "/projects/raffledraw.png",
          header: "Raffle Draw Management System",
          description:
            "Built with Laravel and jQuery, this system generates QR codes for raffle entries, manages store clusters, and processes entries based on unique serial identifiers. It supports scheduled raffle draws and includes analytics for tracking top-selling products.",
          link: "https://promo.unioil.com",
        },
      ];
      
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

"use client";

import React from 'react';
import Navigation from "@/Components/navigation";
import dynamic from "next/dynamic";
const AboutMe = React.lazy(() => import('@/Components/aboutme'));
import { motion } from "framer-motion";
const Ripple = dynamic(() => import("@/Components/ui/ripple"), { ssr: false });
const HyperText = dynamic(() => import("@/Components/ui/hyper-text"), { ssr: false });
import { textVal } from '@/data/text';
import Experience from '@/Components/experience';
import Tools from '@/Components/tools';
import Link from 'next/link';
import Projects from '@/Components/projects';
import Footer from '@/Components/footer';

export default function Home() {
  return (
    <>
      <div className="w-full relative h-screen bg-gray-50 flex flex-col justify-center items-center">
        <Ripple />
        <div className="fixed w-full top-0 left-0 flex p-8 items-center justify-center">
          <Navigation />
        </div>
        <div className="w-full text-center">
          <HyperText className="text-2xl font-bold">{textVal.intro1}</HyperText>
          <HyperText className="text-6xl font-bold">{textVal.intro2}</HyperText>
          <HyperText className="text-2xl font-bold">{textVal.intro3}</HyperText>
        </div>

        <Link href="/#experience" className='w-full absolute bottom-24 left-0 cursor-pointer flex flex-col gap-4 justify-center items-center'>
          <div className='flex gap-4'>

            {Array.from({ length: 3 }, (_, i) => (
              <motion.svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 text-black opacity-30"
              >
                <path d="M12 5v14m-7-7l7 7 7-7" />
              </motion.svg>
            ))}
          </div>

          <motion.h1
            className="text-black opacity-30"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {textVal.seeMore}
          </motion.h1>
        </Link>
      </div>

      <Experience />
      <AboutMe />
      <Tools />
      <Projects />
      <Footer />
    </>
  );
}

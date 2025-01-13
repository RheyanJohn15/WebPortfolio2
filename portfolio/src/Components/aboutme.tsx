import BoxReveal from "./ui/box-reveal"
import Image from "next/image"
import React from "react";
import { textVal } from "@/data/text";

export default function AboutMe() {
   
    return (
        <div className="w-full grid grid-cols-2 px-24">
          <div className="col-span-1">
            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p className="text-6xl mb-8 font-semibold">
                    {textVal.aboutme.header}
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p className="mb-4">
                    {textVal.aboutme.desc1}
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p className="mb-4">
                    {textVal.aboutme.desc2}
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p className="mb-4">
                    {textVal.aboutme.desc3}
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p>
                    {textVal.aboutme.desc4}
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p>
                    {textVal.aboutme.desc5}
                </p>
            </BoxReveal>
          </div>

          <div className="col-span-1 flex justify-center">
              <Image src="/portf/me.jpg" className="rounded-full w-[24rem] h-[24rem] " width={500} height={500} alt="Rheyan John Blanco" />
          </div>  
        </div>
    )
}
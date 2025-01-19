import BoxReveal from "@/Components/ui/box-reveal";
import Image from "next/image"
import React from "react";
import { textVal } from "@/data/text";

export default function AboutMe() {

    const descriptions = [
        textVal.aboutme.desc1,
        textVal.aboutme.desc2,
        textVal.aboutme.desc3,
        textVal.aboutme.desc4,
        textVal.aboutme.desc5
    ]

    return (
        <div id="aboutme" className="w-full h-screen flex items-center justify-center px-24">
            <div className="w-1/2">
                <BoxReveal boxColor={"#000"} duration={0.5}>
                    <p className="text-6xl mb-8 font-semibold">
                        {textVal.aboutme.header}
                    </p>
                </BoxReveal>

                {
                    descriptions.map((desc, index) => {
                        return (
                            <BoxReveal key={index} boxColor={"#000"} duration={0.5}>
                                <p className="mb-4 text-xl">
                                    {desc}
                                </p>
                            </BoxReveal>
                        )
                    })
                }

            </div>

            <div className="flex justify-center items-center">
                <Image src="/portf/me-no-bg.png" className="rounded-full w-full" width={500} height={500} alt="Rheyan John Blanco" />
            </div>
        </div>
    )
}
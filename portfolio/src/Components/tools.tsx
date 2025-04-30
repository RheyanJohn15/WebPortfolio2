import React from "react";
import Image from "next/image";
import BoxReveal from "@/Components/ui/box-reveal";
import { textVal } from "@/data/text";
import { backendContent, frontendContent, databaseContent, otherContent } from "@/data/tools";

export default function Tools() {
    return (
        <div id="tools" className="w-full px-6 md:px-24 py-16 bg-white">
            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p className="text-4xl md:text-6xl mb-12 font-bold text-center text-gray-800">
                    {textVal.tools.header}
                </p>
            </BoxReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Tables contents={backendContent} title="Backend Technologies" />
                <Tables contents={frontendContent} title="Frontend Technologies" />
                <Tables contents={databaseContent} title="Databases" />
                <Tables contents={otherContent} title="Other Tools & Utilities" />
            </div>
        </div>
    );
}


interface ContentArray {
    name: string;
    icon: string;
  }

interface TablesProp {
    title: String,
    contents: ContentArray[],
}

const Tables: React.FC<TablesProp> = ({ title, contents }) => {
    return (
        <div className="rounded-2xl shadow-md border border-black overflow-hidden bg-white transition hover:shadow-lg">
            <table className="w-full">
                <thead>
                    <tr>
                        <th
                            colSpan={2}
                            className="bg-black text-white text-lg md:text-xl font-semibold p-4 text-center"
                        >
                            {title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map((content, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition">
                            <td className="p-4 w-[100px] text-center">
                                <Image
                                    src={content.icon}
                                    width={64}
                                    height={64}
                                    alt={content.name}
                                    className="mx-auto object-contain"
                                />
                            </td>
                            <td className="p-4 text-gray-800 text-lg font-medium">{content.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
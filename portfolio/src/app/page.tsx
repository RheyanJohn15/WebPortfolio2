"use client";

import Ripple from "@/Components/ui/ripple";
import Navigation  from "@/Components/navigation";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Ripple />
      <div className="fixed w-full top-0 left-0 flex p-8 items-center justify-center">
        <Navigation />
      </div>
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold">Hi There 👋</h1>
        <h1 className="text-6xl font-bold">I am Rheyan John</h1>
        <p className="text-2xl font-bold">a Full stack web developer</p>
      </div>
    </div>
  );
}

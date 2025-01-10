import BoxReveal from "./ui/box-reveal"

export default function AboutMe() {
    return (
        <div className="w-full h-screen grid grid-cols-3">
          <div className="col-span-2 p-24 border-2 border-sky-700">
            <h1 className="text-black"> Hello World</h1>
            <BoxReveal boxColor={"#000"} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                    About Me
                </p>
            </BoxReveal>
          </div>
        </div>
    )
}
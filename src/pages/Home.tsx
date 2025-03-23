import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2000);
  }, []);
  return (
    <div className="mt-8 flex max-h-[calc(100vh-32px)] max-w-[calc(100vw-32px)] flex-col overflow-auto border-t-2 border-t-zinc-400 md:ms-8 dark:border-t-zinc-800">
      <div className="w-full px-8">
        <h4 className="text-lg font-semibold text-zinc-500">{"< ICode />"}</h4>
      </div>
      <div className="flex w-full flex-col items-baseline gap-4 py-8 ps-4 pe-8 lg:flex-row lg:py-24 lg:ps-24">
        <p className="text-lg lg:text-2xl">Hi. This is </p>
        <div className="flex">
          <h1 className="text-3xl tracking-widest text-zinc-900 lg:text-6xl dark:text-zinc-200">
            AMETOJ
          </h1>
          <h1 className="text-3xl font-bold tracking-widest text-zinc-600 lg:text-6xl dark:text-zinc-500">
            SINGH
          </h1>
        </div>
      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I am a Backend Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am a Frontend Developer",
          1000,
          "I am a Software Engineer",
          1000,
          "I am a Web Designer",
          1000,
        ]}
        wrapper="span"
        speed={25}
        // style={{ fontSize: "1.5em", display: "inline-block" }}
        repeat={Infinity}
        className="ps-8 text-xl lg:ps-24 lg:text-2xl"
      />
      <hr className="animate-width-slide bg-zinc-400" />
      <div className="flex w-full">
        <div className="w-full ps-8 pe-8 pt-8 lg:w-2/3 lg:ps-24 lg:pt-16">
          <p className="text-sm/6 md:text-base/6 xl:text-lg/8">
            Once upon a line of code, a curious mind ventured from Sheridan
            College, armed with an advanced diploma in Software Development &
            Network Engineering (and a shiny 3.85 GPA). It was here, in the
            depths of Web Services and Advanced Mobile App Development courses,
            that the spark for full-stack development caught fire. Fast forward,
            and this developer's toolkit is brimming: React, Node.js, .NET, SQL
            databases—you name it. Crafting sleek, user-friendly apps isn’t just
            work; it’s an obsession. Clean, scalable code is their signature,
            and solving gnarly problems is their jam. Beyond the 9-to-5 of
            innovation and collaboration, there’s a perpetual quest: mastering
            modern frameworks, exploring cloud technologies, diving into DevOps
            tools—all fueled by the belief that learning never stops. And when
            the laptop finally powers down, you might find this coder immersed
            in tech trends, tinkering on side projects, or crushing it in a
            video game. The next chapter? A quest for a team that values
            creativity, teamwork, and building software that truly makes an
            impact. Game on! 🎮
          </p>
        </div>
        {isVisible && (
          <div className="animate-slow-slide mx-auto hidden h-96 w-72 -translate-y-16 items-center justify-center rounded-3xl bg-black text-xl tracking-widest lg:flex">
            <div className="flex flex-col items-start justify-center gap-0.5">
              <div className="flex gap-0.5">
                <h5 className="mr-2 text-[#A10DA2]">{`while`}</h5>
                <h5>{`(`}</h5>
                <h5 className="text-[#25E926]">{`alive`}</h5>
                <h5>{`)`}</h5>
                <h5>{`{`}</h5>
              </div>
              <div className="flex gap-0.5 pl-8">
                <h5 className="text-[#25E926]">{`eat`}</h5>
                <Brackets />
              </div>
              <div className="flex gap-0.5 pl-8">
                <h5 className="text-[#25E926]">{`sleep`}</h5>
                <Brackets />
              </div>
              <div className="flex gap-0.5 pl-8">
                <h5 className="text-[#25E926]">{`code`}</h5>
                <Brackets />
              </div>
              <div className="flex gap-0.5 pl-8">
                <h5 className="text-[#25E926]">{`repeat`}</h5>
                <Brackets />
              </div>
              <div>
                <h5>{`}`}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function Brackets() {
  return <h5 className="text-white">{`();`}</h5>;
}

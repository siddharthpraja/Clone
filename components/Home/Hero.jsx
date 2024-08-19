import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-full  lg:h-[70vh] flex flex-col pt-10 lg:pt-0 gap-10 justify-center items-center text-center">
      <div>
        <h2 className="border dark:border-neutral-400 rounded-full py-2 px-4 text-sm text-neutral-600 dark:text-neutral-300">
          What's new in Clipbook 1.6.0 →
        </h2>
      </div>
      <div className="">
        <h1 className="text-5xl lg:text-6xl dark:text-neutral-100 text-neutral-900 font-bold">A simple clipboard history</h1>
        <p className="lg:text-xl pt-5 lg:pt-0 text-base text-neutral-700 dark:text-neutral-400 ">
          ClipBook stores everything you copy and lets you quickly access <br />{" "}
          your clipboard history whenever you need it.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="px-[20px] hover:px-[22px]  shadow-xl py-[12px] hover:py-[13px] animate-bounce duration-700 ease-out w-max  bg-black dark:bg-white text-base font-bold gap-2 text-white dark:text-black items-center  flex rounded-lg">
          <Image
            src={"/apple.png"}
            className="w-[14px]  brightness-150 dark:brightness-50"
            width={200}
            height={200}
            alt="logo"
          />
          <Link href={"/Login"}>Download for Mac</Link>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4 ">macOS 14.0 or higher (Intel, Apple Silicon)</p>
      </div>
    </div>
  );
};

export default Hero;

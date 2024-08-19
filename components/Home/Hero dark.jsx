import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroDark = () => {
  return (
    <div>
      <div className="h-full lg:h-[50vh] flex flex-col pt-10 lg:pt-0 gap-4 justify-center items-center text-center">
        <div>
          <p className="text-xl text-purple-500  font-bold mt-4 ">
            It's all about time
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text5xl font-bold text-neutral-50 ">
            Boost your productivity
          </h1>
          <p className="lg:text-xl pt-5 lg:pt-0 text-base text-neutral-500 ">
            You don't need to worry about losing previously copied content and{" "}
            <br /> having to re-copy information multiple times. Save time and
            reduce <br /> interruptions in your daily workflows. If you copy &
            paste frequently, this <br /> simple clipboard history app can make
            you more productive!
          </p>
        </div>
      </div>
      <div>
      <div className="flex justify-center py-10">
          <Image src={"/bookdark.png"} width={1500} height={1500} className="lg:w-[70vw] w-screen shadow-xl border border-neutral-600 rounded-lg" alt="book2"/>
        </div>
      </div>
    </div>
  );
};

export default HeroDark;

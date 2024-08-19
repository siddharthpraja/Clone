import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";


const About = () => {
  return (
    <div>
      <div className="h-full lg:h-[50vh] flex flex-col pt-10 lg:pt-0 gap-4 justify-center items-center text-center">
        <div>
          <p className="text-xl text-green-500  font-bold mt-4 ">It's Free</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text5xl font-bold text-neutral-900 dark:text-neutral-100">
            Get it. Try it. Use it if you like it.
          </h1>
          <p className="lg:text-xl pt-5 lg:pt-0 text-base text-neutral-500 ">
            I hope you enjoy using ClipBook and it saves you a few hours each
            week. If you have any <br /> questions or feedback, please contact
            me.
          </p>
        </div>
      </div>
      <div className="my-10 gap-2 items-center justify-center flex flex-col">
        <div className="">
          <Image
            src={"/photo.png"}
            width={200}
            height={200}
            className="w-24 rounded-full"
            alt="photo"
          />
        </div>
        <div className="">
          <Image
            src={"/name.png"}
            width={500}
            height={500}
            className=" w-56 brightness-125 dark:brightness-50 "
            alt="photo"
          />
        </div>
        <p>Founder of ClipBook</p>
        <div className="flex gap-4">
          <FaSquareXTwitter className="text-2xl hover:text-3xl duration-300 " />
          <FaSquareGithub className="text-2xl scale-105 hover:text-3xl duration-300 " />
          <IoIosMail className="text-2xl hover:text-3xl scale-125 duration-300 " />
          <FaLinkedin className="text-2xl hover:text-3xl duration-300 " />
        </div>
      </div>
    </div>
  );
};

export default About;

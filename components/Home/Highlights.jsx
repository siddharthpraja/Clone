import Image from "next/image";
import React from "react";

const Highlights = () => {
  return (
    <div className="grid lg:grid-cols-3 w-full grid-cols-1 gap-4 py-10  px-2 ">
      <div className="w-full border-2 dark:border-neutral-700 col-span-2 lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10   py-14  rounded-xl border-t-0 shadow-lg hover:shadow-xl ">
        <h1 className="text-3xl font-bold dark:text-neutral-100 text-neutral-900">Unlimited clipboard history</h1>
        <p className="text-neutral-500">
          Keep everything you copy today, yesterday, last week, or even months
          ago in your clipboard history.
        </p>
        <p className="text-neutral-500">Remove the items from the history if you don't need them anymore.</p>
        <p className="text-neutral-500">Clear the entire history any time.</p>
      </div>
      <div className="w-full border-2 dark:border-neutral-700 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 col-span-2 lg:col-span-1  py-14  rounded-xl border-t-0 shadow-lg hover:shadow-xl ">
        <h1 className="text-3xl font-bold dark:text-neutral-100 text-neutral-900">Keyboard centric</h1>
        <p className="text-neutral-500">Don't waste your time moving your hands away from your keyboard.</p>
        <p className="text-neutral-500">
          Press{" "}
          <span className="bg-neutral-800 text-sm p-2 rounded-lg text-neutral-50">
            ⌘
          </span>{" "}
          <span className="bg-neutral-800 text-sm py-2 px-3 rounded-lg text-neutral-50">
            ⇧
          </span>{" "}
          <span className="bg-neutral-800 text-sm py-2 px-3 rounded-lg text-neutral-50">
            V
          </span>{" "}
          to open your clipboard history.
        </p>
        <p className="text-neutral-500">
          Navigate through your clipboard history using{" "}
          <span className="bg-neutral-800 text-sm py-2 px-3 rounded-lg text-neutral-50">
            ↓
          </span>{" "}
          <span className="bg-neutral-800 text-sm py-2 px-3 rounded-lg text-neutral-50">
            ↑
          </span>{" "}
          .
        </p>
        <p className="text-neutral-500">
          Hit{" "}
          <span className="bg-neutral-800 text-sm py-2 px-3 rounded-lg text-neutral-50">
            ↵
          </span>{" "}
          to paste selected item to the current active application.
        </p>
      </div>
      <div className="w-full border-2 dark:border-neutral-700 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 col-span-2 lg:col-span-1  py-14  rounded-xl border-t-0 shadow-lg hover:shadow-xl ">
        <h1 className="text-3xl font-bold dark:text-neutral-100 text-neutral-900">Paste as plain text</h1>
        <p className="text-neutral-500">Paste content without formatting.</p>
        <p className="text-neutral-500">
          Eliminate accidental formatting{" "}
          <span className="italic bg-white text-purple-600">
            inconsistencies
          </span>{" "}
          when copying and pasting text from different sources such as websites,
          PDFs, rich text editors, etc.
        </p>
        <p className="text-neutral-500">
          Don't show that the text was pasted from an external resource or
          document.
        </p>
      </div>
      <div className="w-full border-2 dark:border-neutral-700 flex items-center text-center flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 col-span-2 lg:col-span-1  py-14  rounded-xl border-t-0 shadow-lg hover:shadow-xl ">
        <Image
          src={"/privacy.png"}
          width={500}
          height={500}
          className="w-[220px]"
          alt="privacy"
        />
        <h1 className="text-3xl font-bold dark:text-neutral-100 text-neutral-900">Privacy</h1>
        <p className="text-neutral-500">
          Your clipboard history is securely stored on your computer and never
          leaves it.
        </p>
      </div>

      <div className="w-full border-2 dark:border-neutral-700 col-span-2 flex flex-col lg:flex-row gap-10 px-8 pl-0  py-14 rounded-xl border-t-0 shadow-lg hover:shadow-xl ">
        <div>
          <Image
            src={"/book2.png"}
            width={700}
            height={700}
            className="lg:w-[60vw] w-[80vh] border-2 dark:border-neutral-700 shadow-xl rounded-md"
            alt="privacy"
          />
        </div>
        <div className="flex flex-col gap-4 pl-10 lg:pl-0 ">
          <h1 className="text-3xl font-bold dark:text-neutral-100 text-neutral-900">Full content preview</h1>
          <p className="text-neutral-500">
            Quickly preview the full content of each item in your clipboard
            history to locate the right one before pasting it.
          </p>
          <p className="text-neutral-500">
            It will help you to verify the content and prevent mistakes that may
            occur when copying and pasting almost identical content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

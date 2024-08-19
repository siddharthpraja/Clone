import Image from "next/image";
import React from "react";

const Book = () => {
  return (
    <div>
      <div className="flex mt-10 lg:mt-0 justify-center">
        <Image
          src={"/book.png"}
          width={1950}
          height={150}
          alt="book"
          className="lg:w-[70vw] w-screen  shadow-xl border-2 rounded-md flex dark:hidden "
        />
        <div className="hidden justify-between dark:flex">
          <Image
            src={"/bookdark.png"}
            width={1950}
            height={150}
            alt="book"
            className="lg:w-[70vw] w-screen shadow-xl border border-neutral-600 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Book;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  // fatch data from backend
  const data = await fetch(`${process.env.DBURL}`).then((res) => res.json());

  //   fatch image from Backend because theses image store in link
  const featuredMediaUrls = await Promise.all(
    data.map(async (post) => {
      const featuredMediaResponse = await fetch(
        post._links["wp:featuredmedia"][0].href
      );
      const featuredMediaData = await featuredMediaResponse.json();
      return featuredMediaData.media_details.sizes.full.source_url;
    })
  );

  // only words can be precent for decription
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="grid lg:grid-cols-3 w-full grid-cols-1 gap-4 py-10   lg:px-24 px-2 ">
      {data.map((post, index) => (
        <div className="w-full p-4 flex justify-between h-max" key={post.id}>
          <Link href={`/blog/${post["slug"]}`} className="">
            <div className="h-64 w-full rounded-lg  overflow-hidden ">
              <Image
                src={featuredMediaUrls[index]}
                width={1000}
                height={1000}
                alt={post.title.rendered}
                className=" w-full h-full bg-fixed   hover:scale-105"
              />
            </div>

            <h2 className="">{post.title.rendered}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: truncateText(post["excerpt"]["rendered"], 15),
              }}
              className="text-neutral-600"
            />
            <div className=" ">
              <p className=""> Read More</p>{" "}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

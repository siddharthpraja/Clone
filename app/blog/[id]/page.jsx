import React from 'react';
import Image from 'next/image';

const BlogPage = async ({ params }) => {
  const { id } = params;

  try {
    // Fetch data from backend
    const data = await fetch(
      `${process.env.DBURL}?_embed&slug=${id}`
    ).then((res) => res.json());

    // Fetch image from Backend because these images are stored in a link
    const featuredMediaUrls = await Promise.all(
      data.map(async (post) => {
        const featuredMediaResponse = await fetch(
          post._links["wp:featuredmedia"][0].href
        );
        const featuredMediaData = await featuredMediaResponse.json();
        return featuredMediaData.media_details.sizes.full.source_url;
      })
    );

    return (
      <div className='flex flex-col justify-center w-full py-10 items-center bg-neutral-100 dark:bg-neutral-900'>
        {data.map((post, index) => (
          
          <div key={post.id} className='lg:w-2/4 w-full p-4'>
           
            <h2 className='text-5xl font-bold mb-3 dark:text-neutral-100 text-neutral-900'>{post.title.rendered}</h2>
            <Image
              src={featuredMediaUrls[index]}
              width={1000}
              height={1000}
              alt={post.title.rendered}
              className="w-full h-full object-cover mb-4"
            />
            <div
            dangerouslySetInnerHTML={{ __html: post["content"]["rendered"] }}
          />
          
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading data</div>;
  }
};

export default BlogPage;
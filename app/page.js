import Hero from '../components/Home/Hero'
import Book from '../components/Home/Book'
import Highlight from '../components/Home/Highlights'
import HeroDark from '../components/Home/Hero dark'
import Services from '../components/Home/Services'
import About from '../components/Home/About'


import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="bg-neutral-100 dark:bg-neutral-900 px-4 md:px-8 lg:px-16 2xl:px-28">
        <Hero />
        <Book />
        <Highlight />
      </div>
      <div className="bg-neutral-900 px-4 md:px-8 lg:px-16 2xl:px-28">
        <HeroDark />
        <Services/>
      </div>
      <About/>
    </div>
  );
};

export default Home;

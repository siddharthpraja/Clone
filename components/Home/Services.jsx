import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-3 w-full grid-cols-1 gap-4 py-10 ">
      {/* Service 1 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s1.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s1"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">
          Software Developers
        </h1>
        <p className="text-neutral-400">
          Copy multiple code snippets, examples, API references, terminal
          commands, stack traces, or log messages to your clipboard history in a
          row and quickly access them when needed during development tasks.
        </p>
      </div>
      {/* Service 2 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s2.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s2"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">
          Technical Writers
        </h1>
        <p className="text-neutral-400">
          Quickly access all the copied documentation snippets, URLs, research
          notes, citations, ChatGPT suggestions, and references during your
          writing sessions. Write more in less time. Focus on producing
          high-quality documentation.
        </p>
      </div>
      {/* Service 3 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s3.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s3"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">Support Agents</h1>
        <p className="text-neutral-400">
          Keep standard responses for common issues, reference customer
          information or previous interactions. Quickly access the needed
          information during troubleshooting sessions. Reduce response time and
          provide more efficient support to customers.
        </p>
      </div>
      {/* Service 4*/}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s4.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s4"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">
          Sales Representatives
        </h1>
        <p className="text-neutral-400">
          Reference past conversations, agreements, product specifications,
          pricing details, shipping information, return policies, case studies,
          or customer testimonials during sales presentations or negotiations.
          Streamline your proposal creation process and increase sales
          effectiveness.
        </p>
      </div>
      {/* Service 5 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s5.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s5"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">Lawyers</h1>
        <p className="text-neutral-400">
          Store and access contracts, agreements, legal citations, standard
          clauses, statutes, boilerplate language, or case law excerpts during
          legal research. Minimize repetitive typing. Save time and improve your
          research process and accuracy.
        </p>
      </div>
      {/* Service 6 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s6.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s6"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">
          Marketing Specialists
        </h1>
        <p className="text-neutral-400">
          Remember and reference URLs, hashtags, subject lines, email templates,
          image captions, video links, blog post drafts, or your content ideas
          during content creating process. Improve efficiency, creativity, and
          effectiveness in your marketing efforts.
        </p>
      </div>
      {/* Service 7 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s7.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s7"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">Designers</h1>
        <p className="text-neutral-400">
          References frequently used color codes, hex values, or font names when
          creating designs. Store and retrieve texts, code snippets, CSS
          stylesheets, HTML templates, UI components from your clipboard
          history. Enhance your creativity and streamline the design process.
        </p>
      </div>
      {/* Service 8 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s8.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s8"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">Students</h1>
        <p className="text-neutral-400">
          Copy information from various sources when conducting research for
          assignments or working on your academic tasks. Reduce distractions and
          focus more on your studies, rather than wasting time re-copying
          information.
        </p>
      </div>
      {/* Service 9 */}
      <div className="w-full col-span-2 items-start lg:col-span-1 flex flex-col gap-4 px-5 md:px-8 xl:px-5 2xl:px-10 py-14 ">
        <div>
          <Image
            src={"/s9.png"}
            width={200}
            height={200}
            className="w-16"
            alt="s9"
          />
        </div>
        <h1 className="text-3xl text-neutral-200  font-bold">Teachers</h1>
        <p className="text-neutral-400">
          Access all the copied articles, lecture notes, or worksheets from
          various sources when preparing lesson materials. Paste common comments
          and corrections when providing feedback to students.
        </p>
      </div>
    </div>
  );
};

export default Services;

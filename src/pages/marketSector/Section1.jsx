import React from "react";

export default function Section1({ sect }) {
  return (
    <section className="w-full md:grid grid-cols-2 px-[10%] py-20">
      <h1 className="text-5xl font-bold leading-tight col-span-1">
        {sect?.title2}
      </h1>
      <p className="text-grey text-justify col-span-1">
      {sect?.text2}
      </p>
    </section>
  );
}

export default function Section1({ sect }) {
    return (
      <section className="md:grid grid-cols-2">
        <div className="col-span-1 relative">
          <img src={sect?.img3} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="col-span-1 p-[10%] bg-black text-white">
          <h2 className="text-5xl font-bold mb-5">{sect?.title3}</h2>
          <p className="mb-5">{sect?.text3}</p>
        </div>
      </section>
    );
  }
  
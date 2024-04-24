import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import img1 from "../../assets/img/manufacturing/2.jpg";

export default function Section2() {
  return (
    <section className="md:grid grid-cols-2">
      <div className="col-span-1 relative">
        <img src={img1} className="w-full h-full object-cover" alt="" />
        <div className="hvr-pulse-grow  hidden md:block p-10 rounded-full bg-[#6A961F] absolute top-1/2 left-full">
          <MdOutlinePrecisionManufacturing className="text-white text-5xl" />
        </div>
      </div>
      <div className="col-span-1 p-[10%] bg-black text-white">
        <h2 className="text-4xl font-bold mb-5">OUR INFRASTRUCTURE</h2>
        <ul className="ml-5 mb-10">
          <li>Clean State-of-the-art manufacturing & packaging facility.</li>
          <li>Installed in a CE complied, ISO certified.</li>
          <li>Validated clean-room.</li>
          <li>
            Our highly skilled and trusted mould makers have a proven track
            record of quickly adapting to market while maintaining highest level
            of production quality and delivery reliability.
          </li>
        </ul>
        <h2 className="text-4xl font-bold mb-5">OUR MACHINERY</h2>
        <p className="mb-5">Our latest technology helps us deliver excellence. Our advance machines includes:</p>
        <ul className="ml-5 mb-10">
          <li>Injection Blow Moulding Machines</li>
          <li>Injection Moulding Machines</li>
          <li>Fully automatic Polymer handling and colourant dosing Machines</li>
          <li>
          Vacuum Packing & Sealing Machines
          </li>
        </ul>
        <h2 className="text-4xl font-bold mb-5">OUR CAPABILITIES</h2>
        <h6 className="text-3xl font-bold mb-5">Personal Care & Home Care Products</h6>
        <ul className="ml-5 mb-10">
          <li>Dispenser Pumps: 1.5 million/month</li>
          <li>Trigger Pumps: 0.9 million/month</li>
          <li>Flip Top Caps: 1.8 million/month</li>
        </ul>
        <h6 className="text-3xl font-bold mb-5">Pharmaceutical Products</h6>
        <ul className="ml-5">
          <li>Eye/Ear Dropper Bottles: 3.5 million/month</li>
          <li>Flip-off Seal: 10 million/month</li>
          <li>Measuring Caps: 10 million/month</li>
        </ul>
      </div>
    </section>
  );
}

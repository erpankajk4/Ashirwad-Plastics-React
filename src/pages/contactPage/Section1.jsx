import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Section1() {
  return (
    <section className="w-full bg-[#F3F3F3] md:flex justify-center group">
      <div className="flex-1 flex items-center flex-col gap-3 md:max-w-[400px] p-10">
        <FaPhone className="text-5xl text-primaryColor group-hover:[transform:rotateY(720deg)] transition-all duration-[1s]" />
        <h1 className="text-3xl text-black font-bold">Phone</h1>
        <p className="text-grey text-center">
          Reach us directly by phone at for immediate assistance during our
          business hours.
        </p>
        <div className="text-2xl font-bold text-center text-grey">
          <h2>0172 5014551</h2>
          <h2>7888697033</h2>
          <h2>7888697034</h2>
        </div>
      </div>
      <div className="flex-1 flex items-center flex-col gap-3 md:max-w-[400px] p-10 border-x border-[#d5d4d4]">
        <MdEmail className="text-5xl text-primaryColor group-hover:[transform:rotateY(720deg)] transition-all duration-[1s]" />
        <h1 className="text-3xl text-black font-bold">Email</h1>
        <p className="text-grey text-center">
          For general inquiries or support, send an email and our team will
          respond promptly.
        </p>
        <h2 className="text-2xl font-bold text-center text-grey">
          info@ashirwadplastics.com
        </h2>
      </div>
      <div className="flex-1 flex items-center flex-col gap-3 md:max-w-[400px] p-10">
        <FaLocationDot className="text-5xl text-primaryColor group-hover:[transform:rotateY(720deg)] transition-all duration-[1s]" />
        <h1 className="text-3xl text-black font-bold">Address</h1>
        <p className="text-center text-grey">
        Visit us for in-person consultations or meetings. We look forward to welcoming you to our facility!
        </p>
        <h2 className="text-2xl font-bold text-center text-grey">
        Plot No. 427, Industrial Area, Phase 9, SAS Nagar, Mohali – India
        </h2>
      </div>
    </section>
  );
}

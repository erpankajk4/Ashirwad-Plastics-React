import { IoSend } from "react-icons/io5";
import img from "../../assets/img/contact/2.jpg";

export default function Section2() {
  return (
    <section className="w-full md:grid grid-cols-2 px-[10%]">
      <div className="col-span-1 md:p-10 p-5 md:flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-5">Drop Us a <span className="text-primaryColor">Mail</span></h2>
        <p className="text-grey mb-5">
          We offer innovative products and services and make every effort to
          conserve resources for future generations.
        </p>
        <form action="./contact.php" method="post">
          <div className="form-control w-full mb-5">
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              className="input border border-borderColor rounded-md p-3 w-full"
            />
          </div>
          <div className="form-control w-full mb-5">
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="input border border-borderColor rounded-md p-3 w-full"
            />
          </div>
          <div className="form-control w-full mb-5">
            <textarea
              name="message"
              id="message"
              className="border border-borderColor rounded-md p-3 h-24 w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-control w-full mb-5">
            <button type="submit" id="submit" name="submit" className="hvr-sweep-to-right px-10 py-4 bg-primaryColor text-white flex gap-5 items-center">
              Send Your Question <IoSend />
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:block col-span-1">
        <img className="max-h-[600px] w-full object-cover object-center" src={img} alt="" />
      </div>
    </section>
  );
}

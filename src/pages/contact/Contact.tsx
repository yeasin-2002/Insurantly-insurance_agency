import cover from "../../assets/covers/aboutCover.png";

const Contact = () => {
  return (
    <section
      className="bg-white  eachSection min-h-screen min-w-screen px-8  md:px-20  py-14 md:pr-56 
       xl:pr-[30rem]
       2xl:pr-[60rem]
      lg:pr-96"
      style={{
        background: `url(${cover}) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h5 className="text-navyBlue text-lg font-bold">Contact Us</h5>
      <h4 className="text-navyBlue text-xl md:text-4xl font-extrabold mt-1">
        Make An Appointment
      </h4>

      <form>
        <div className="mt-5">
          <div className="md:flex  md:gap-x-2">
            <input
              type="text"
              className="textInput w-full"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="textInput w-full"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="md:flex  md:gap-x-2">
            <select
              name="reason"
              id="reason"
              className="textInput  w-full text-gray-400"
            >
              <option value="">Please Select</option>
            </select>
            <select
              name="AvailableTime"
              id="AvailableTime"
              className="textInput  w-full text-gray-400"
            >
              <option value="">4:00 </option>
            </select>
          </div>

          <textarea
            name="message"
            id="message"
            className="textInput w-full h-48"
            placeholder="Message"
          />
        </div>

        <button
          type="submit"
          className="ButtonBtnPrimaryColor mt-8  w-56 h-12 px-10 py-3.5 bg-sky-500 rounded flex-col justify-start text-white font-bold items-center gap-2.5 inline-flex"
        >
          Book Appointment
        </button>
      </form>
    </section>
  );
};

export default Contact;

const BottomContact = () => {
  return (
    <>
      <div className="md:flex md:justify-between py-8 w-full justify-center  bg-white md:items-center px-14  ">
        <div>
          <h5 className="font-bold md:text-2xl lg:text-4xl">
            Consulting Agency For Your Business
          </h5>
          <p className="font-light md:text-xl lg:text-2xl">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <button
          className="ButtonBtnPrimaryColor mt-8    px-10 py-4 bg-sky-500 rounded flex-col justify-start text-white font-bold items-center gap-2.5 inline-flex
         md:text-2xl
        "
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default BottomContact;

const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8 "></div>
      {/* footer */}
      <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto ">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap ">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>Daaviinchiii</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]"></span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>daaviinchiii@gmail.com</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3 ">Redes Sociais</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://twitter.com/david_23_c">
                <img src={require("./imgs/Twitter.png")} alt="" />
              </a>
              <a href="https://www.instagram.com/david_23_c/">
                <img src={require("./imgs/insta.png")} alt="" />
              </a>
              <a href="https://github.com/daaviinchiii">
                <img src={require("./imgs/Github.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2022. feito por David Cardoso
        </div>
      </div>
    </>
  );
};

export default Footer;

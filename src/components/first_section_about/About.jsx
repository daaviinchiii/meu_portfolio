import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            O david é um <span className="text-[#C778DD]"></span> {" "}
            <span className="text-[#C778DD]">fullstack developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            Organiza hoje para não ter de andar à procura amanhã.         </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <img src={require("./imgs/man.png")} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Neste momento a trabalhar em  <span className="text-white">Flutter</span>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
//adicionar botao
//  < button className = "text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]" >
//    Contact me!!
//          </button >

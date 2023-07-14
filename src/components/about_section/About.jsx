import { Link } from 'react-router-dom';
const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div data-aos="fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>Sobre-mim
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Ola eu chamo-me David
              <br />
              <br />
              Sou um estudante interessado pela área de programação. Neste momento, estou à
              procura de oportunidades para aumentar o meu conhecimento e adquirir
              experiência na área de trabalho. Durante o meu percurso no curso de programador
              de informática, adquiri conhecimentos em: Spring Boot, JavaScript, MySQL,
              Flutter, PHP, HTML e CSS. Também obtive conhecimentos na área de gestão de
              sistemas: Windows e Windows Server.
              <br />

            </p>
            {/* button */}
            <div className="mt-7">
              <Link
                to="/about"
                className="duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white"
              >
                <button>Saiba Mais -{">"}</button>
              </Link>
            </div>
          </div>
          {/* right */}
          <div data-aos="fade-left" className=" mx-auto">
            <img className="mx-auto" src={require("./imgs/david.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;

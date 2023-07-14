import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-down" className="fixed top-0 left-0 right-0 bg-[#282C33]">
      <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
        <div className="left flex  items-center font-bold text-white sm:text-[16px] sm:tracking-tighter">
          {/* logo */}
          <div className="img">
            <img src={require("./imgs/Logo.png")} alt="" />
          </div>
          <span className="text-[9px] sm:text-[16px]">Daaviinchiii</span>
        </div>
        <div className="right flex items-center">
          <NavLink
            to="/meu_portfolio/"
            className="text-[9px] sm:text-[16px] sm:tracking-tighter text-[#ABB2BF] my-4 list-none mx-4"
          >
            <span className="text-[#C778DD] font-medium">#</span>Página-principal
          </NavLink>
          <NavLink
            to="/about"
            className="text-[9px] sm:text-[16px] sm:tracking-tighter text-[#ABB2BF] my-4 list-none mx-4"
          >
            <span className="text-[#C778DD] font-medium">#</span>Sobre-mim
          </NavLink>
          <NavLink
            to="/contact"
            className="text-[9px] sm:text-[16px] sm:tracking-tighter text-[#ABB2BF] my-4 list-none mx-4"
          >
            <span className="text-[#C778DD] font-medium">#</span>Contactos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

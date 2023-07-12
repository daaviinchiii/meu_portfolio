import Projects from "../components/projects_section/Projects";
import Skills from "../components/skills_section/Skills";
import AboutSec from "../components/about_section/About";
import Contact from "../components/contact_section/Contact";
import About from "../components/first_section_about/About";
import Fun_facts from "../components/fun_facts/fun_facts";
const Home_page = () => {
  return (
    <>
      <About />
      <Skills />
      <AboutSec />
      <Fun_facts />
      <Contact />
    </>
  );
};
export default Home_page;
// aqui aduciona o < Projects /> para aparcer na page inicial
// bacup do return
//return (
//  <>
//     <About />
//     < Projects />
//     <Skills />
//     <AboutSec />
//     <Contact />
//   </>
//);
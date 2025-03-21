import Intro from "@/components/Intro";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import CompanyServices from "@/components/CompanyServices";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Wrapper>
      <Intro />
      <CompanyServices/>
      {/* <Projects/> */}
      {/* <AboutUs/> */}
      <Team/>
      <Footer/>
    </Wrapper>
  );
}

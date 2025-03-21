import Intro from "@/components/Intro";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import CompanyServices from "@/components/CompanyServices";


export default function Home() {
  return (
    <Wrapper>
      <Intro />
      <CompanyServices/>
      <Team/>
      <Footer/>
    </Wrapper>
  );
}

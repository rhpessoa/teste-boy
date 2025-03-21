import InternalWrapper from "../ui/InternalWrapper";

const CompanyServices: React.FC = () => {
  return (
    <section id="companyServices" className="flex-1 flex items-center justify-center bg-[#0F1B2D] py-16">
      <InternalWrapper>
        <section className="w-full flex flex-col items-center text-center px-4">
          <header className="flex flex-col justify-center items-center">
            <h2 className="text-5xl p-3 font-bold bg-clip-text text-[#D97706] drop-shadow-[2px_2px_3px_black]">
              Soluções Digitais Personalizadas para o Seu Negócio
            </h2>
            <p className="mt-6 text-xl text-[#EAEAEA] opacity-90 leading-relaxed max-w-4xl">
              A <span className="text-[#D97706] drop-shadow-[2px_2px_3px_black] font-bold">Epicloot Software</span> oferece serviços especializados em desenvolvimento web, soluções para jogos e design digital. Com foco em tecnologia, performance e inovação, criamos experiências eficientes e personalizadas para empresas e projetos criativos.
            </p>
          </header>

          <div className="mt-10 grid md:grid-cols-3 gap-8 w-full max-w-6xl">
            <article className="bg-[#1A1A1A] bg-opacity-90 p-6 rounded-xl shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#D97706]">
              <h3 className="text-2xl font-semibold text-[#D97706] drop-shadow-[2px_2px_3px_black]">Criação e Gerenciamento de Websites</h3>
              <p className="text-[#EAEAEA] mt-3">Desenvolvimento de sites institucionais, e-commerces e plataformas personalizadas, com segurança, desempenho e escalabilidade.</p>
            </article>

            <article className="bg-[#1A1A1A] bg-opacity-90 p-6 rounded-xl shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#602F8D] ">
              <h3 className="text-2xl font-semibold text-[#602F8D] drop-shadow-[2px_2px_3px_black]">Desenvolvimento Técnico para Jogos</h3>
              <p className="text-[#EAEAEA] mt-3">Programação de scripts em Unity e C#, otimização de código, correção de bugs e melhorias de performance.</p>
            </article>

            <article className="bg-[#1A1A1A] bg-opacity-90 p-6 rounded-xl shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#1849c4]">
              <h3 className="text-2xl font-semibold text-[#1849c4] drop-shadow-[2px_2px_3px_black]">Arte e Design para Jogos e Web</h3>
              <p className="text-[#EAEAEA] mt-3">Produção de assets 2D/3D, concept art, design de personagens e animações, garantindo qualidade visual e identidade única.</p>
            </article>
          </div>

          <a 
            href="https://wa.me/5545991174779?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="mt-10 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#602F8D] to-[#3D5A80] rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-[#304ca7]">
              Entre em contato
            </button>
          </a>
        </section>
      </InternalWrapper>
    </section>
  );
}

export default CompanyServices;

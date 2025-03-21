import Image from "next/image";
import Header from "../Header";
import InternalWrapper from "../ui/InternalWrapper";

const Intro: React.FC = () => {
  return (
    <>
      <Header />
      <main
        id="intro"
        className="flex-1 flex items-center justify-center bg-intro-background bg-no-repeat bg-cover bg-center px-4"
      >
        <InternalWrapper>
          <section className="w-full flex flex-col md:flex-row items-center justify-center my-8 py-16 md:py-24">
            <header className="sr-only">
              <h1>Epicloot Software - Estúdio de Games e Tecnologia</h1>
              <p>
                Desenvolvimento de jogos, sites e soluções criativas com foco em
                performance, arte e narrativa.
              </p>
            </header>

            <div className="flex flex-col w-full md:w-3/5 px-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#D97706] drop-shadow-[2px_2px_3px_black]">
                Bem-vindo à Epic Loot
              </h2>

              <p className="mt-6 text-2xl md:text-lg text-[#EAEAEA] opacity-90 leading-relaxed">
                Epicloot Software é um estúdio independente brasileiro com o
                propósito de crescer no mercado de games e desenvolver projetos
                que cativem os jogadores. Nosso objetivo é criar experiências
                envolventes, explorando mecânicas, arte e narrativa para
                construir jogos memoráveis.
                <br />
                <br />
                Além do desenvolvimento de games, também oferecemos serviços de
                criação de sites e consultoria em tecnologia. Estamos em
                constante aprendizado e aprimoramento, buscando entregar
                projetos criativos e bem-executados, sempre com dedicação e
                paixão pelo que fazemos.
              </p>

              <a
                href="#sobre"
                role="button"
                aria-label="Saiba mais sobre a Epicloot Software"
                className="self-center md:self-start px-8 py-3 mt-6 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#602F8D] to-[#3D5A80] rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-[#304ca7]"
              >
                Saiba mais
              </a>
            </div>

            <div className="flex w-full md:w-2/5 justify-center md:justify-end mt-8 md:mt-0">
              <Image
                src="/images/pet-company.png"
                alt="Ilustração representando o mascote do projeto"
                width={463}
                height={352}
                loading="lazy"
                className="w-3/4 md:w-full px-4 md:px-12 drop-shadow-lg"
              />
            </div>
          </section>
        </InternalWrapper>
      </main>
    </>
  );
};

export default Intro;

import InternalWrapper from "../ui/InternalWrapper";
import TeamMemberCard, { TeamMemberProps } from "../ui/TeamMemberCard";

const teamMembers: TeamMemberProps[] = [
  {
    name: "Caio Lima",
    username: 'Nergal',
    social_media: "https://www.linktr.ee/tvnergal",
    role: "Co-founder & Game Producer",
    imageUrl: "/images/nergal.png",
  },
  {
    name: "Bruno Saldanha",
    username: 'Havokk',
    social_media: "https://havokkmorands.github.io/portfolio/",
    role: "Co-founder & Programmer",
    imageUrl: "/images/donodo.png",
  },
  {
    name: "Rafael Henrique",
    username: 'Donodo',
    social_media: "https://www.linkedin.com/in/rhpessoa/",
    role: "Software Engineer",
    imageUrl: "/images/donodo.png",
  },
  {
    name: "Ruallyson Felype",
    username: 'Orsted',
    social_media: "https://www.linkedin.com/in/ruallyson-moura/",
    role: "Desenvolvedor de Jogos",
    imageUrl: "/images/ruallyson.png",
  },
  {
    name: "Hellen Alexandre",
    username: 'Kya',
    social_media: "https://linktr.ee/6kya",
    role: "Artista Digital",
    imageUrl: "/images/kya.png",
  },
  {
    name: "Isadkiel",
    username: 'Isadfox',
    social_media: "https://linktr.ee/Isadfox",
    role: "Artista Digital",
    imageUrl: "/images/fox.png",
  },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="flex-1 flex items-center justify-center bg-team-background bg-no-repeat bg-cover bg-center py-16"
      aria-labelledby="team-heading"
    >
      <InternalWrapper>
        <article
          className="w-full flex flex-col items-center justify-center px-4"
          aria-label="Apresentação da equipe Epicloot"
        >
          <header>
            <h2
              id="team-heading"
              className="text-4xl font-extrabold bg-clip-text text-[#D97706] drop-shadow-[2px_2px_3px_black] mb-6"
            >
              Conheça o Time da Epicloot
            </h2>
          </header>

          <p className="text-[#EAEAEA] drop-shadow-[2px_2px_3px_black] text-center max-w-3xl mb-10 opacity-90 leading-relaxed">
            A Epicloot é formada por profissionais apaixonados por tecnologia, games, arte e inovação. Conheça as pessoas por trás das ideias, códigos e criações.
          </p>

          <div className="flex w-full flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                name={member.name}
                username={member.username}
                social_media={member.social_media}
                role={member.role}
              />
            ))}
          </div>
        </article>
      </InternalWrapper>
    </section>
  );
};

export default Team;

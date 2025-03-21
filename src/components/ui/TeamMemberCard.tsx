import Image from "next/image";

export interface TeamMemberProps {
  name: string;
  social_media: string;
  username: string;
  imageUrl: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ imageUrl, name, social_media, role, username }) => {
  return (
    <article
      className="flex flex-col items-center w-full mt-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-[#1A1A1A] bg-opacity-90 p-6 rounded-xl shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#602F8D] transition-transform"
      aria-label={`Perfil de ${name}, ${role}`}
    >
      <div className="w-40 h-40 overflow-hidden rounded-full mb-4 border-4 border-[#602F8D]">
        <Image
          src={imageUrl}
          alt={`Foto de ${name}, ${role}`}
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      <p className="text-xl font-semibold text-[#EAEAEA] drop-shadow-[2px_2px_3px_black]">{name}</p>

      {social_media && (
        <a
          href={social_media}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Acessar rede social de ${username}`}
        >
          <p className="text-lg text-[#602F8D] drop-shadow-[2px_2px_3px_black] hover:text-[#4b246e] transition-colors">
            @{username}
          </p>
        </a>
      )}

      <p className="text-sm text-[#D97706] drop-shadow-[2px_2px_3px_black]">{role}</p>
    </article>
  );
};

export default TeamMemberCard;

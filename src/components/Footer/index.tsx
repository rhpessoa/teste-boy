import { FaInstagram, FaLinkedinIn, FaTiktok, FaTwitch, FaYoutube } from 'react-icons/fa';
import InternalWrapper from '../ui/InternalWrapper';
import { FaBluesky } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8" aria-label="Rodapé do site">
      <InternalWrapper>
        <div className="flex flex-col w-full">
          <div className="flex flex-col text-center md:flex-row w-full">
            {/* Coluna 1: Conecte-se */}
            <section
              className="flex flex-col px-4 w-full md:w-1/3 mb-8 md:mb-0"
              aria-labelledby="social-media-section"
            >
              <h2 id="social-media-section" className="text-2xl md:text-xl mb-5 font-semibold md:mb-4">
                Conecte-se com a gente
              </h2>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://www.instagram.com/epiclootsoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-3xl hover:text-pink-500 transition-colors"
                  aria-label="Perfil do Instagram da Epic Loot"
                  title="Instagram Epic Loot"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@epiclootsoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-3xl hover:text-black transition-colors"
                  aria-label="Perfil do TikTok da Epic Loot"
                  title="TikTok Epic Loot"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.twitch.tv/epiclootsoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-3xl hover:text-purple-600 transition-colors"
                  aria-label="Canal da Twitch da Epic Loot"
                  title="Twitch Epic Loot"
                >
                  <FaTwitch />
                </a>
                <a
                  href="https://bsky.app/profile/epiclootsoftware.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-3xl hover:text-blue-500 transition-colors"
                  aria-label="Perfil do Bluesky da Epic Loot"
                  title="Bluesky Epic Loot"
                >
                  <FaBluesky />
                </a>
                <a
                  href="https://www.youtube.com/@EpicLootSoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-3xl hover:text-red-500 transition-colors"
                  aria-label="Canal do YouTube da Epic Loot"
                  title="YouTube Epic Loot"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/company/epicloot-software/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-3xl hover:text-blue-500 transition-colors"
                  aria-label="Página do LinkedIn da Epic Loot"
                  title="LinkedIn Epic Loot"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </section>

            {/* Coluna 2: Contato */}
            <section
              className="flex flex-col px-4 w-full md:w-1/3 mb-8 md:mb-0"
              aria-labelledby="contact-section"
            >
              <h3 id="contact-section" className="text-2xl md:text-xl font-semibold mb-4">
                Contato
              </h3>
              <p className="mb-1 text-base">
                Telefone:{" "}
                <a
                  href="https://wa.me/5545991174779?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                  aria-label="Enviar mensagem no WhatsApp"
                >
                  (45) 99117-4779
                </a>
              </p>
              <p className="text-base">
                Email:{" "}
                <a
                  href="mailto:contato@epiclootsoftware.com.br"
                  className="hover:text-teal-400 transition-colors"
                  aria-label="Enviar e-mail para Epic Loot"
                >
                  contato@epiclootsoftware.com.br
                </a>
              </p>
            </section>

            {/* Coluna 3: Links Rápidos */}
            <nav
              className="flex flex-col px-4 w-full md:w-1/3"
              aria-labelledby="quick-links-section"
            >
              <h3 id="quick-links-section" className="text-2xl md:text-xl font-semibold mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#intro" className="text-base hover:text-teal-400 transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linktr.ee/tvnergal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-teal-400 transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-base text-gray-400">
            <p>© 2025 Epicloot Software. Todos os direitos reservados.</p>
          </div>
        </div>
      </InternalWrapper>
    </footer>
  );
};

export default Footer;

import InternalWrapper from "../ui/InternalWrapper";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="flex-1 flex items-center justify-center bg-stone-900">
        <InternalWrapper>
            <section className="w-full flex px-4 py-8">
                <div className="flex flex-col items-start w-full">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-lg">
                       Nossos Projetos
                    </h1>

                    <p className="mt-6 text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 leading-relaxed p-6">
                        Sites :)
                    </p>
                    <button className=" px-8 py-3 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Saiba mais
                    </button>
                </div>

            </section>
        </InternalWrapper>
    </section>
  );
}

export default Projects;

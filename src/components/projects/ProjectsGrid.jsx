import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsGrid = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10 min-h-screen">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          PROYECTOS
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="bg-white p-4 rounded-lg shadow-md border border-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl">
              <div className="flex justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-auto object-cover mb-4 rounded-lg shadow"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">{project.title}</h3>
              <p className="text-sm mb-2">{project.category}</p>
              <div className="flex flex-wrap mb-4">
                <button className="bg-red-900 ">{project.tag}</button>
              </div>
              <a
                className="bg-blue-500 hover:bg-blue-600 text-indigo-900 px-4 py-2 rounded-lg shadow cursor-pointer"
                href={project.url}
              >
                Demo Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;

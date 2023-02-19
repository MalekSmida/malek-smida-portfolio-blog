// local files
import { projects } from '../../constants';
import { Project } from '../../typings';
import { ProjectCard } from '../../components';

function Projects() {
  return (
    <section id="projects">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>

          <p className="mt-4 text-gray-500">Open source projects</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {projects.map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

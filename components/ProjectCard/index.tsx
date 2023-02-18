// node modules
import Image from 'next/image';

// local files
import { Project } from '../../typings';

interface PropsProjectCard {
  project: Project;
}

/**
 * Project card shown in home under Projects section
 */
function ProjectCard({ project }: PropsProjectCard) {
  const { title, projectUrl, picture, sourceCodeUrl, shortDescription } =
    project;

  return (
    <div className="block overflow-hidden">
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Open project"
      >
        <Image
          className="transition-transform duration-300 ease-in-out hover:scale-105"
          src={picture}
          alt={title}
          height={200}
          width={350}
          objectFit="cover"
          unoptimized={true}
        />
      </a>
      <div className="p-6">
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="mt-2 text-sm text-gray-500">{shortDescription}</p>

        {sourceCodeUrl && (
          <a
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open source code"
            className="mt-4 inline-block cursor-pointer border-b border-indigo-500 pb-1 text-sm font-medium text-indigo-600"
          >
            Source code
            <span className="ml-2" aria-hidden="true">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

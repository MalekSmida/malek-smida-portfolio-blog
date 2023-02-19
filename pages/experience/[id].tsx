// node modules
import { useRouter } from 'next/router';
import Image from 'next/image';

// local files
import { experiences } from '../../constants';
import { Experience } from '../../typings';

const Experience = () => {
  const router = useRouter();
  const { id } = router.query;

  const filterExperiencesById = (experienceId: string): Experience =>
    experiences.filter((item) => item._id === experienceId)[0];

  const currentExperience = filterExperiencesById(id as string);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col">
      {currentExperience && (
        <Image
          src={currentExperience.coverPath}
          alt={currentExperience.position}
          width={1152}
          height={250}
          objectFit="cover"
        />
      )}
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-5 mb-4 text-3xl font-semibold">
          {currentExperience?.position}
        </h1>
        {currentExperience?.company && (
          <strong className="border-indingo-50 rounded border bg-indigo-50 px-3 py-1.5 text-sm font-medium text-primary-color">
            @ {currentExperience?.company}
          </strong>
        )}
        <div className="mt-8 flex flex-col border-l-2 border-gray-500 py-1 px-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl">{currentExperience?.title}</h2>
          <p className="text-xs text-gray-500">{currentExperience?.date}</p>
        </div>
        <ul className="my-10 list-disc space-y-5 text-gray-700">
          {currentExperience?.work.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Experience;

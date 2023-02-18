// node modules
import Link from 'next/link';

// local files
import { Experience } from '../../typings';

interface PropsExperienceCard {
  experience: Experience;
}

/**
 * Experience card shown in home under Career section
 */
function ExperienceCard({ experience }: PropsExperienceCard) {
  const { title, _id, date, position } = experience;
  return (
    <Link href={`/experience/${_id}`}>
      <a className="group relative block h-64 hover:cursor-pointer">
        <span className="absolute inset-0 border-2 border-dashed border-indigo-600"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
            <h2 className="mt-4 text-2xl font-medium">{position}</h2>
            <p className="mt-4">{title}</p>
            <p className="mt-8 text-xs text-gray-400">{date}</p>
          </div>

          <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <h2 className="mt-4 text-2xl font-medium">{position}</h2>

            <p className="mt-4">{title}</p>

            <p className="mt-8 font-bold">Read more</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ExperienceCard;

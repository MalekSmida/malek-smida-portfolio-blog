// node modules
import Link from 'next/link';

// local files

interface Props {
  id: string;
  date: string;
  title: string;
  position: string;
  company?: string;
}

function ExperienceCard({ title, id, date, position, company }: Props) {
  return (
    <Link href={`/experience/${id}`}>
      <a className="relative block group h-64 hover:cursor-pointer">
        <span className="absolute inset-0 border-2 border-indigo-600 border-dashed"></span>

        <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
            <h2 className="mt-4 text-2xl font-medium">{position}</h2>
            <p className="mt-4">{title}</p>
            <p className="mt-8 text-xs text-gray-400">{date}</p>
          </div>

          <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
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

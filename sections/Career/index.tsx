// node modules

// local files
import { ExperienceCard } from '../../components';
import { experiences } from '../../data';
import { Experience } from '../../typings';

function Career() {
  return (
    <section id="career">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Career</h2>

          <p className="mt-4 text-gray-500">List of my professional experiences</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:gap-8 md:mt-16 md:grid-cols-3 lg:grid-cols-4">
          {experiences.map((experience: Experience) => (
            <ExperienceCard
              key={experience._id}
              id={experience._id}
              date={experience.date}
              title={experience.title}
              company={experience.company}
              position={experience.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;

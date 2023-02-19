// node modules

// local files
import { skills } from '../../constants';
import { Skill } from '../../typings';
import { SkillBlock } from '../../components';

function Skills() {
  return (
    <section id="skills">
      <div className="my-20 flex max-w-screen-xl flex-col items-center justify-center rounded-md bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>

        <div className="mt-8 grid grid-cols-5 gap-8 sm:grid-cols-7 md:mt-16 md:grid-cols-9 md:gap-12 lg:grid-cols-11">
          {skills.map((skill: Skill) => (
            <SkillBlock key={skill._id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

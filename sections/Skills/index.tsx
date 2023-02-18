// node modules

// local files
import { skills } from '../../data';
import { Skill } from '../../typings';
import { SkillBlock } from '../../components';

function Skills() {
  return (
    <section id="skills">
      <div className="max-w-screen-xl px-4 py-20 my-20 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-gray-50 rounded-md">
        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>

        <div className="grid grid-cols-5 gap-8 mt-8 sm:grid-cols-7 md:gap-12 md:mt-16 md:grid-cols-9 lg:grid-cols-11">
          {skills.map((skill: Skill) => (
            <SkillBlock key={skill._id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

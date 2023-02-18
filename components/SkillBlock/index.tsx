// node modules
import Image from 'next/image';

// local files
import { Skill } from '../../typings';

function SkillBlock(props: Skill) {
  return (
    <div className="opacity-70 transition-all ease-in-out duration-200 grayscale hover:grayscale-0 hover:opacity-100">
      <Image src={props.localPath} alt={props.label} height={50} width={50} title={props.label} />
    </div>
  );
}

export default SkillBlock;

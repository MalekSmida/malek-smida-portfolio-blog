// node modules
import type { NextPage } from 'next';

// local files
import { Intro, About, Career, Projects, Skills } from '../sections';
import { navListPortfolio, navListExperience } from '../constants';
import { Main } from '../containers';
import { useDetectMobileScreenSize } from '../hooks';

const Home: NextPage = () => {
  const { isMobile } = useDetectMobileScreenSize();
  return (
    <Main
      title="Malek Smida | Software Engineer | Profile, CV and Blog"
      metaDescription="Malek Smida, a passionate, agile-minded Software Engineer who is scrupulous about the details. Manage full software development life-cycle of Mobile and Web apps"
      navList={isMobile ? navListExperience : navListPortfolio}
    >
      <Intro />
      <Career />
      <About />
      <Projects />
      <Skills />
    </Main>
  );
};

export default Home;

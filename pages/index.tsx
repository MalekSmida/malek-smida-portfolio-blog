// node modules
import type { NextPage } from 'next';
import Head from 'next/head';

// local files
import { Footer, Intro, About, Career, Projects, Skills } from '../sections';
import { ProgressScrollBar, BackToTopButton, NavHeader } from '../components';
import { useShowBackToTop } from '../hooks';
import { navListPortfolio } from '../constants';

const Home: NextPage = () => {
  const { showArrowButton } = useShowBackToTop();
  return (
    <div>
      <Head>
        <title>Malek Smida | Software Engineer | Profile and CV</title>
        <meta
          name="description"
          content="Malek Smida, a passionate, agile-minded Software Engineer who is scrupulous about the details. Manage full software development life-cycle of Mobile and Web apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 sm:px-6">
        <ProgressScrollBar />
        <NavHeader navList={navListPortfolio} />
        <Intro />
        <Career />
        <About />
        <Projects />
        <Skills />
        {showArrowButton && <BackToTopButton />}
      </main>

      <Footer />
    </div>
  );
};

export default Home;

// node modules
import type { NextPage } from 'next';
import Head from 'next/head';

// local files
// import styles from "../styles/Home.module.css";
import { Footer, NavHeader, Intro, About, Career, Projects, Skills } from '../sections';
import { ProgressScrollBar, BackToTopButton } from '../components';
import { useShowBackToTop } from '../hooks';

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

      <main className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <ProgressScrollBar />
        <NavHeader />
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

// node modules
import React from 'react';
import Head from 'next/head';

// local files
import {
  NavHeader,
  BackToTopButton,
  Footer,
  Banner,
  ProgressScrollBar,
} from '../../components';
import useShowBackToTop from '../../hooks/useShowBackToTop';
import { navListBlog } from '../../constants';

// typing
interface PropsMain {
  hideBanner?: boolean;
  children?: React.ReactNode;
}

/**
 * Layout container as global design of the app
 */
const Main: React.FC<PropsMain> = ({ children, hideBanner }) => {
  // hooks
  const { showArrowButton } = useShowBackToTop();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Malek Smida | Wanderer Blog</title>
        <meta
          name="description"
          content="Wanderer blog is about: parable and short stories of wisdom, book summary and quotes, spirituality, ancient philosophy, and social psychology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 sm:px-6">
        <ProgressScrollBar />

        <NavHeader navList={navListBlog} />
        {!hideBanner && <Banner />}
        {children}
      </main>
      <Footer />
      {showArrowButton && <BackToTopButton />}
    </div>
  );
};

export default Main;

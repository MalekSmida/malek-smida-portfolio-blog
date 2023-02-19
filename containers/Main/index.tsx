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
import { INavButton } from '../../typings';

// typing
interface PropsMain {
  title: string;
  metaDescription: string;
  isBannerVisible?: boolean;
  navList: INavButton[];
  children?: React.ReactNode;
}

/**
 * Layout container as global design of the app
 */
const Main: React.FC<PropsMain> = ({
  title,
  metaDescription,
  isBannerVisible,
  navList,
  children,
}) => {
  // hooks
  const { showArrowButton } = useShowBackToTop();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 sm:px-6">
        <ProgressScrollBar />

        <NavHeader navList={navList} />
        {isBannerVisible && <Banner />}
        {children}
      </main>
      <Footer />
      {showArrowButton && <BackToTopButton />}
    </div>
  );
};

export default Main;

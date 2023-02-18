// node modules
import Link from 'next/link';
import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// local files
import { ProgressScrollBar } from '../../components';

interface NavButtonProps {
  label: string;
  anchorId?: string;
}

function NavHeader() {
  // constants
  const navList: Array<NavButtonProps> = [
    {
      label: 'Career',
      anchorId: '#career',
    },
    {
      label: 'About',
      anchorId: '#about',
    },
    {
      label: 'Projects',
      anchorId: '#projects',
    },
    {
      label: 'Skills',
      anchorId: '#skills',
    },
    {
      label: 'Contact',
      anchorId: '#contact',
    },
  ];

  // components
  const NavButton: FC<NavButtonProps> = ({ label, anchorId }) => {
    return (
      <li>
        <AnchorLink
          href={anchorId}
          className="group relative inline-block cursor-pointer overflow-hidden px-4 py-2 focus:outline-none"
        >
          <span className="absolute inset-y-0 left-0 w-[0px] bg-primary-color transition-all duration-300 group-hover:w-full group-active:bg-primary-color"></span>

          <span className="relative text-sm font-medium text-primary-color transition-colors group-hover:text-white">
            {label}
          </span>
        </AnchorLink>
      </li>
    );
  };

  return (
    <header
      id="header"
      className="mx-auto flex h-16 max-w-screen-xl items-center justify-between bg-white px-4 sm:px-6 lg:px-8"
    >
      <ProgressScrollBar />

      <div className="flex-1"></div>
      <div className="hidden flex-1 md:block">
        <nav aria-labelledby="header-navigation">
          <h2 className="sr-only" id="header-navigation">
            Header navigation
          </h2>

          <ul className="flex items-center gap-4 text-sm">
            {navList.map((item) => (
              <NavButton
                key={item.label}
                label={item.label}
                anchorId={item.anchorId}
              />
            ))}
            <li>
              <Link href="/blog">
                <div className="group relative inline-block cursor-pointer overflow-hidden px-4 py-2 focus:outline-none">
                  <span className="absolute inset-y-0 left-0 w-[0px] bg-primary-color transition-all duration-300 group-hover:w-full group-active:bg-primary-color"></span>

                  <span className="relative text-sm font-medium text-primary-color transition-colors group-hover:text-white">
                    Blog
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1"></div>
    </header>
  );
}

export default NavHeader;

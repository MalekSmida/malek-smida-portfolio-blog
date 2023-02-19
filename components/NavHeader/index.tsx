// node modules
import Link from 'next/link';
import { useRouter } from 'next/router';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// local files
import { INavButton } from '../../typings';

interface PropsNavHeader {
  navList: INavButton[];
}

/**
 * Navigation bar at the top of page
 */
const NavHeader: React.FC<PropsNavHeader> = ({ navList }) => {
  // hooks
  const currentRoute = useRouter();

  // components
  const NavButton: React.FC<INavButton> = ({ title, link }) => (
    <li>
      {link.type === 'anchor' ? (
        <AnchorLink href={link.href}>
          <span className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
            {title}
          </span>
        </AnchorLink>
      ) : (
        <Link href={link.href}>
          {currentRoute.pathname === link.href ? (
            <span className="relative cursor-pointer select-none text-sm font-medium text-primary-color before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-primary-color">
              {title}
            </span>
          ) : (
            <span className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
              {title}
            </span>
          )}
        </Link>
      )}
    </li>
  );

  return (
    <header
      id="header"
      className="mx-auto hidden h-16 max-w-screen-xl items-center justify-between bg-white px-4 sm:px-6 md:flex lg:px-8"
    >
      <nav aria-labelledby="header-navigation">
        <h2 className="sr-only" id="header-navigation">
          Header navigation
        </h2>

        <ul className="flex items-center gap-10 text-sm">
          {navList.map((item) => (
            <NavButton
              _id={item._id}
              key={item._id}
              title={item.title}
              link={item.link}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;

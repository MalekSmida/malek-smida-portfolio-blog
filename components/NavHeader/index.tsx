// node modules
import { useRouter } from 'next/router';

// local files
import NavButton from '../NavButton';
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

  return (
    <header
      id="header"
      className="mx-auto flex h-16 max-w-screen-xl items-center justify-between bg-white px-4 sm:px-6 lg:px-8"
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
              isSelected={currentRoute.pathname === item.link.href}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;

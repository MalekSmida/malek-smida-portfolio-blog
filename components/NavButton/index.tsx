// node modules
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// local files
import { INavButton } from '../../typings';

interface PropsNavButton extends INavButton {
  isSelected: boolean;
}

/**
 * Navigation button used in NavHeader
 */
const NavButton: React.FC<PropsNavButton> = ({ title, link, isSelected }) => (
  <li id="nav-button">
    {link.type === 'anchor' ? (
      <AnchorLink href={link.href}>
        <span className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
          {title}
        </span>
      </AnchorLink>
    ) : (
      <Link href={link.href}>
        {isSelected ? (
          <span
            className="relative cursor-pointer select-none text-sm font-medium text-primary-color before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-primary-color"
            data-testid={`navButton-${title}`}
          >
            {title}
          </span>
        ) : (
          <span
            className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100"
            data-testid={`navButton-${title}`}
          >
            {title}
          </span>
        )}
      </Link>
    )}
  </li>
);

export default NavButton;

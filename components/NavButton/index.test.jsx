import { render, screen } from '@testing-library/react';

// local files
import NavButton from './index';
// import { INavButton } from '../../typings';

/**
 * mockButton: INavButton;
 */
const mockButton = {
  _id: '0',
  title: 'buttonTest',
  link: {
    type: 'anchor',
    href: '#anchor',
  },
};

describe('NavButton', () => {
  it('Should renders anchor button', () => {
    render(<NavButton {...mockButton} isSelected={false} />);
    const buttonElement = screen.getByTestId(`navButton-${mockButton.title}`);
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should renders route button', () => {
    mockButton.link = {
      type: 'route',
      href: '/anchor',
    };
    render(<NavButton {...mockButton} isSelected={false} />);
  });

  it('Should renders selected button', () => {
    render(<NavButton {...mockButton} isSelected={true} />);
  });
});

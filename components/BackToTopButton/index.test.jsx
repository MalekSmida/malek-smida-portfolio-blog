// node modules
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// local files
import BackToTopButton from './';

describe('Component BackToTopButton', () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<BackToTopButton />);
  });

  it('Should render without errors', async () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should scroll to the top when clicked', async () => {
    window.scrollTo = jest.fn(); // mock window.scrollTo
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});

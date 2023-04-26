import { render, screen } from '@testing-library/react';

// local files
import BackToTopButton from './';

describe('Component: BackToTopButton', () => {
  it('Should render button', async () => {
    render(<BackToTopButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';

// local files
import Banner from './';

describe('Banner Component', () => {
  beforeEach(() => {
    render(<Banner />);
  });
  it('Should render without errors', async () => {
    const bannerElement = screen.getByTestId('banner-container');
    expect(bannerElement).toBeInTheDocument();
  });

  it('Should render title and description', async () => {
    // Title
    const blogTitle = 'Wanderer';
    const bannerTitleElement = screen.getByText(blogTitle);
    expect(bannerTitleElement).toBeInTheDocument();

    // Description
    const description =
      'How sad if we pass through life and never see it with the eyes of a child -Anthony De Mello';
    const bannerDescriptionElement = screen.getByText(description);
    expect(bannerDescriptionElement).toBeInTheDocument();
  });
});

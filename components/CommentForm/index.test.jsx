import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// local files
import CommentForm from './';

const mockPost = {
  _id: '0',
  _createdAt: '',
  title: '',
  author: {
    name: '',
    image: '',
  },
  comments: [], // or [Comment]
  description: '',
  mainImage: {
    assets: {
      url: '',
    },
  },
  slug: {
    current: '',
  },
  body: null,
};

describe('CommentForm', () => {
  const user = userEvent.setup();
  it('Should render all inputs', async () => {
    render(<CommentForm post={mockPost} />);

    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();

    await user.type(inputName, 'Fake Name');

    const inputSubmit = screen.getByTestId('input-submit');
    expect(inputSubmit).toBeInTheDocument();

    await user.click(inputSubmit);
  });
});

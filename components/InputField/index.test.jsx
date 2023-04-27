import { render, screen, waitFor } from '@testing-library/react';
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
  comments: [],
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

describe('CommentForm Component', () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<CommentForm post={mockPost} />);
  });

  it('Should render all inputs', async () => {
    const titleElement = screen.getByText('Leave a comment bellow');
    expect(titleElement).toBeInTheDocument();

    const inputName = screen.getByLabelText('Name');
    expect(inputName).toBeInTheDocument();

    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();

    const inputComment = screen.getByLabelText('Comment');
    expect(inputComment).toBeInTheDocument();

    const submitElement = screen.getByTestId('input-submit');
    expect(submitElement).toBeInTheDocument();
  });

  describe('CommentForm Validation', () => {
    // mock function
    const handleCreateComment = jest.fn();

    it.only('Should validate input name', async () => {
      // validate empty input
      let errorElement = screen.getByText('▪️ The Name Field is invalid');
      expect(errorElement).toBeNull();
      const submitElement = screen.getByTestId('input-submit');
      await user.click(submitElement);

      errorElement = screen.getByText('▪️ The Name Field is invalid');
      expect(errorElement).toBeInTheDocument();

      const inputName = screen.getByLabelText('Name');
      await user.type(inputName, 'Fake Name');
    });

    it.todo('Should submit valid inputs');
  });
});

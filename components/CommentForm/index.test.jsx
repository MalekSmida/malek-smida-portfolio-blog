import { render, screen, fireEvent, act } from '@testing-library/react';

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
  it('Should render all inputs', async () => {
    render(<CommentForm post={mockPost} />);

    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(inputName, { target: { value: 'Fake Name' } });
    });

    const inputSubmit = screen.getByTestId('input-submit');
    expect(inputSubmit).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(inputSubmit);
    });
  });
});

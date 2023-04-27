import { render, screen } from '@testing-library/react';

// local files
import CommentForm from '.';

const mockPostId = '0';

describe('CommentForm Component', () => {
  beforeEach(() => {
    render(<CommentForm postId={mockPostId} />);
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

  // No need to test submit and validation => handled by react-form-hook
});

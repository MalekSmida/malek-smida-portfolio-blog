import { render, screen } from '@testing-library/react';

// local files
import CommentList from './';

const mockComments = [
  {
    _id: '',
    _ref: '',
    _rev: '',
    _type: '',
    _createdAt: '',
    _updatedAt: '',
    approved: true,
    comment: "'first comment'",
    email: '',
    name: '',
    post: {
      _ref: '',
      _type: '',
    },
  },
  {
    _id: '',
    _ref: '',
    _rev: '',
    _type: '',
    _createdAt: '',
    _updatedAt: '',
    approved: true,
    comment: "'second comment'",
    email: '',
    name: '',
    post: {
      _ref: '',
      _type: '',
    },
  },
];

describe('CommentList Component', () => {
  beforeEach(() => {
    render(<CommentList post={mockComments} />);
  });

  it('Should render all comments', async () => {
    const firstComment = screen.getByText('first comment');
    expect(firstComment).toBeInTheDocument();

    const secondComment = screen.getByText('first comment');
    expect(secondComment).toBeInTheDocument();
  });
});

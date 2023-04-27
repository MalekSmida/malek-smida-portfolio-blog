import { render, screen } from '@testing-library/react';

// local files
import CommentList from './';

const mockComments = [
  {
    _id: '0',
    _ref: '',
    _rev: '',
    _type: '',
    _createdAt: '',
    _updatedAt: '',
    approved: true,
    comment: 'first comment',
    email: '',
    name: 'First Name',
    post: {
      _ref: '',
      _type: '',
    },
  },
  {
    _id: '1',
    _ref: '',
    _rev: '',
    _type: '',
    _createdAt: '',
    _updatedAt: '',
    approved: true,
    comment: 'second comment',
    email: '',
    name: 'Second Name',
    post: {
      _ref: '',
      _type: '',
    },
  },
];

describe('CommentList Component', () => {
  it('Should render empty message when no comments', async () => {
    render(<CommentList comments={[]} />);

    // show title
    const titleElement = screen.getByText('Comments');
    expect(titleElement).toBeInTheDocument();

    // show empty description
    const messageElement = screen.getByText(
      'No comments, be the first to add one ✨'
    );
    expect(messageElement).toBeInTheDocument();
  });

  it('Should render all comments', async () => {
    render(<CommentList comments={mockComments} />);

    const titleElement = screen.getByText('Comments');
    expect(titleElement).toBeInTheDocument();
    // no empty message shown
    const messageElement = screen.queryByText(
      'No comments, be the first to add one ✨'
    );
    expect(messageElement).toBeNull();

    // first message is shown
    const firstName = screen.getByText(/First Name/);
    expect(firstName).toBeInTheDocument();
    const firstComment = screen.getByText(/first comment/);
    expect(firstComment).toBeInTheDocument();

    // second message is shown
    const secondName = screen.getByText(/Second Name/);
    expect(secondName).toBeInTheDocument();
    const secondComment = screen.getByText(/second comment/);
    expect(secondComment).toBeInTheDocument();
  });
});

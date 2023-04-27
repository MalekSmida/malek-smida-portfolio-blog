// node modules
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// local files
import { commentSchema } from '../../utils/validationSchema';
import { PropsComment } from '../CommentList';
import useCreateComment from '../../hooks/useCreateComment';
import InputField from '../InputField';

// typing
interface PropsCommentForm {
  postId: string;
}
export interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

/**
 * Comment form by the end of Post page
 */
const CommentForm: React.FC<PropsCommentForm> = ({ postId }) => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(commentSchema),
  });
  // custom hook
  const { isCreated, isLoading, handleCreateComment } = useCreateComment();

  // handle form submit to create new comment
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleCreateComment(data);
  };

  if (isCreated) {
    return (
      <div className="mx-auto my-10 flex w-full max-w-2xl flex-col bg-primary-color p-12 text-white">
        <h3 className="mb-3 text-3xl font-bold">
          Thank you for submitting your comment
        </h3>
        <p>Once it has been approved, it will appear below</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mb-10 flex w-full max-w-2xl flex-col bg-gray-100 p-12"
    >
      <h3 className="text-3xl">Leave a comment bellow</h3>
      <hr className="mt-2 py-4" />

      <input {...register('_id')} type="hidden" name="_id" value={postId} />

      <InputField
        name="name"
        label="Name"
        register={register}
        error={!!errors.name}
        placeholder="John Doe"
        type="text"
      />
      <InputField
        name="email"
        label="Email"
        register={register}
        error={!!errors.email}
        placeholder="example@gmail.com"
        type="email"
      />
      <InputField
        name="comment"
        label="Comment"
        register={register}
        error={!!errors.comment}
        placeholder="What is on your mind?"
        type="textarea"
      />

      <input
        type="submit"
        disabled={isLoading}
        className="focus:shadow-outline cursor-pointer rounded bg-primary-color px-4 py-2 font-bold text-white shadow transition-colors duration-200 ease-in-out hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-700"
        data-testid="input-submit"
      />
    </form>
  );
};

export default CommentForm;

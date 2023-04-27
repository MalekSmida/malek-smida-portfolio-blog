// node modules
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';
import cx from 'classnames';

// local files
import { IFormInput } from '../CommentForm';

// typing
interface PropsInputField {
  register: UseFormRegister<IFormInput>;
  name: keyof IFormInput;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  error?: boolean;
}

/**
 * Reusable Input component
 * @param name input name => "name" | "email" | "comment"
 * @param label
 * @param register
 * @param error
 * @returns
 */
const InputField: React.FC<PropsInputField> = ({
  name,
  label,
  type = 'text',
  placeholder,
  register,
  error,
}) => {
  return (
    <label className="relative mb-5 block">
      <span className="text-gray-700">{label}</span>

      {type === 'textarea' ? (
        <textarea
          {...register(name)}
          className={cx(
            'form-textarea mt-1 block w-full rounded border px-3 py-2 shadow outline-primary-color',
            {
              'border-red-500': error,
            }
          )}
          placeholder={placeholder}
          rows={4}
          data-testid={`input-${name}`}
        />
      ) : (
        <input
          {...register(name)}
          className={cx(
            'form-input mt-1 block w-full rounded border px-3 py-2 shadow outline-primary-color',
            {
              'border-red-500': error,
            }
          )}
          placeholder={placeholder}
          type={type}
          data-testid={`input-${name}`}
        />
      )}

      {error && (
        <span
          className="absolute bottom-3 right-3 text-sm text-red-300"
          role="alert"
          aria-label={name}
        >
          Invalid
        </span>
      )}
    </label>
  );
};

export default InputField;

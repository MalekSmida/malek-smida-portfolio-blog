import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// local files
import InputField from '.';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput, FormInputName } from '../CommentForm';

// mock
const mockData = [
  {
    props: {
      name: 'name',
      label: 'Full Name',
      placeholder: 'John Doe',
      type: 'text',
    },
    testData: 'Ezdin Ben Ghdhehom',
  },
  {
    props: {
      name: 'email',
      label: 'Email Address',
      placeholder: 'example@email.com',
      type: 'email',
    },
    testData: 'fake@email.com',
  },
  {
    props: {
      name: 'comment',
      label: 'Commet',
      placeholder: 'Just type something',
      type: 'textarea',
    },
    testData: 'Hello world',
  },
];

describe('InputField Component', () => {
  // mock function
  const register: UseFormRegister<IFormInput> = jest.fn();
  // event instance
  const user = userEvent.setup();

  describe.each(mockData)('Input type: $props.name', ({ props, testData }) => {
    // should show error
    let isError = false;

    it('Should render empty input', () => {
      // render component
      render(
        <InputField
          {...props}
          name={props.name as FormInputName}
          error={isError}
          register={register}
        />
      );
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveValue('');
    });

    it('Should focus and type into input', async () => {
      render(
        <InputField
          {...props}
          name={props.name as FormInputName}
          error={isError}
          register={register}
        />
      );

      const inputElement = screen.getByRole('textbox');

      // 1- focus
      expect(inputElement).not.toHaveFocus();
      inputElement.focus();
      expect(inputElement).toHaveFocus();

      // 2- type
      await user.type(inputElement, testData);
      expect(inputElement).toHaveValue(testData);
      await user.clear(inputElement);
      expect(inputElement).toHaveValue('');
    });

    it('Should show error', () => {
      // we test condition of error not error itself as we have a library that handle input validation
      // should render with no error
      const { rerender } = render(
        <InputField
          {...props}
          name={props.name as FormInputName}
          error={isError}
          register={register}
        />
      );
      let alertElement = screen.queryByRole('alert');
      expect(alertElement).toBeNull();

      // should show error message when there is an error
      isError = true;
      rerender(
        <InputField
          {...props}
          name={props.name as FormInputName}
          error={isError}
          register={register}
        />
      );
      alertElement = screen.getByRole('alert');
      expect(alertElement).toBeInTheDocument();
    });
  });
});

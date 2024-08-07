import styled from '@emotion/styled';
import LabeledInput from '@/components/common/form/LabeledInput';
import { FormProps, FormValues } from '@/types/form';
import { validateField } from '@/utils/validate';
import useForm from '@/hooks/useForm';

export default function Form<T extends FormValues>({
  inputInformations,
  onSubmit,
  onError,
  initialValues,
  children,
}: FormProps<T>) {
  const {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit: useFormSubmit,
    resetForm,
  } = useForm({ initialValues, validate: validateField });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    useFormSubmit(e, () => onSubmit());
    // resetForm();
  };

  console.log(formData);
  return (
    <S.Form onSubmit={handleSubmit}>
      {inputInformations?.map((input) => (
        <LabeledInput
          key={input.id}
          id={input.id}
          type={input.type}
          label={input.label || ''}
          placeholder={input.placeholder}
          value={formData[input.id]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMsg={errors[input.id]}
        />
      ))}
      {children}
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    width: 100%;
  `,
};

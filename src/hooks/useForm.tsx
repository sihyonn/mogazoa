import { useState } from 'react';
import { AxiosError } from 'axios';
import { Details, FormValues, UseFormProps, UseFormReturn } from '@/types/form';

export default function useForm<T extends FormValues>({
  initialValues,
  validate,
}: UseFormProps<T>): UseFormReturn<T> {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setError = (id: string, message: string) => {
    setErrors((prev) => ({
      ...prev,
      [id]: message,
    }));
  };

  const handleServerError = (detailError: Details) => {
    const id = Object.keys(detailError)[0];
    const message = detailError[id].message;
    setError(id, message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const errorMsg = validate(id, value, formData);
    setError(id, errorMsg || '');
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    onSubmit: (data: T) => void,
  ) => {
    e.preventDefault();

    let hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      try {
        await onSubmit(formData);
      } catch (error) {
        const err = error as AxiosError<Details, any>;
        const details = err?.response?.data?.details;
        handleServerError(details);
      }
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

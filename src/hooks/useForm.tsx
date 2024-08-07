import { useState } from 'react';
import { FormValues, UseFormProps, UseFormReturn } from '@/types/form';

export default function useForm<T extends FormValues>({
  initialValues,
  validate,
}: UseFormProps<T>): UseFormReturn<T> {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const errorMsg = validate(id, value, formData);
    if (errorMsg) {
      setErrors({
        ...errors,
        [id]: errorMsg,
      });
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    onSubmit: (data: T) => void,
  ) => {
    e.preventDefault();
    let hasErrors = false;

    for (const key of Object.keys(errors)) {
      if (errors[key]) {
        hasErrors = true;
        break;
      }
    }

    if (!hasErrors) onSubmit(formData);
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}

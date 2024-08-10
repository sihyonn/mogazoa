export interface FormValues {
  [key: string]: any;
}

export interface InputInformations {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
}

export interface FormProps<T extends FormValues> {
  inputInformations: readonly InputInformations[];
  onSubmit: (data: T) => void;
  onError?: () => void;
  initialValues: T;
  children?: React.ReactNode;
}

export type ValidateFunction<T extends FormValues> = (
  id: keyof T,
  value: string,
  formData: T,
) => string | undefined;

export interface UseFormProps<T extends FormValues> {
  initialValues: T;
  validate: ValidateFunction<T>;
}

export interface Details {
  [key: string]: { message: string };
}

export interface UseFormReturn<T extends FormValues> {
  formData: T;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    onSubmit: (data: T) => void,
  ) => void;
}

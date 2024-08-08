import { FormValues } from '@/types/form';
import { ERROR_MESSAGE, FIELD_NAMES, REGEX } from '@/constants/FORM_VALIDATION';

type FieldNamesType = typeof FIELD_NAMES;
type FieldNameKey = keyof FieldNamesType;

const checkRequiredField = (value: string, fieldName: string) => {
  if (!value) return `${fieldName} 입력은 필수입니다!`;
};

const validateEmail = (value: string) => {
  if (!REGEX.EMAIL.test(value)) return ERROR_MESSAGE.EMAIL;
};

const validateNickname = (value: string) => {
  if (value.length > 20) return ERROR_MESSAGE.NICKNAME;
};

const validatePassword = (value: string) => {
  if (value.length < 8) return ERROR_MESSAGE.PW_LENGTH;
  if (!REGEX.PW.test(value)) return ERROR_MESSAGE.PW_FORMAT;
};

const validateConfirmPassword = (value: string, password: string) => {
  if (value !== password) return ERROR_MESSAGE.PW_CONFIRMATION;
};

export const validateField = (
  id: FieldNameKey,
  value: string,
  formData: FormValues,
) => {
  const fieldName = FIELD_NAMES[id];
  const requiredError = checkRequiredField(value, fieldName);
  if (requiredError) return requiredError;

  switch (id) {
    case 'email':
      return validateEmail(value);
    case 'nickname':
      return validateNickname(value);
    case 'password':
      return validatePassword(value);
    case 'passwordConfirmation':
      return validateConfirmPassword(value, formData.password);
    default:
      return '';
  }
};

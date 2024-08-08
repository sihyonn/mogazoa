export const FIELD_NAMES = {
  email: '이메일',
  nickname: '닉네임',
  password: '비밀번호',
  passwordConfirmation: '비밀번호 확인',
} as const;

export const REGEX = {
  EMAIL: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/,
  PW: /^(?=.*[a-zA-Z])(?=.*[0-9])\S{8,20}$/,
} as const;

export const ERROR_MESSAGE = {
  EMAIL: '이메일 형식으로 작성해 주세요.',
  NICKNAME: '닉네임은 최대 20자까지 가능해요.',
  PW_LENGTH: '비밀번호는 최소 8자 이상이에요.',
  PW_FORMAT: '비밀번호는 숫자, 영문, 특수문자 포함 8~20자 가능해요.',
  PW_CONFIRMATION: '비밀번호가 일치하지 않아요.',
} as const;

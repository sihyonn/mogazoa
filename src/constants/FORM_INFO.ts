const SIGN_UP = [
  {
    id: 'email',
    type: 'text',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 'nickname',
    type: 'text',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
  },
  {
    id: 'passwordCheck',
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 한번 더 입력해주세요.',
  },
] as const;

export default { SIGN_UP };

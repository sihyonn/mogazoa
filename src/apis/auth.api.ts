import API from '@/constants/API';
import instance from '@/apis/axios';

export const authRequests = {
  signUp: (signUpForm: SignUpFormValues) => {
    return instance({
      url: API.AUTH.SIGN_UP,
      method: 'POST',
      data: signUpForm,
    });
  },
  signIn: (signInForm: SignInFormValues) => {
    return instance({
      url: API.AUTH.SIGN_IN,
      method: 'POST',
      data: signInForm,
    });
  },
};

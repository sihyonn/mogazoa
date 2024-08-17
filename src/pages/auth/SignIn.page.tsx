import { useNavigate } from 'react-router-dom';
import SocialLogin from '@/components/auth/sign-in/SocialLogin';
import Button from '@/components/common/button/Button';
import Form from '@/components/common/form/Form';
import FORM_INFO from '@/constants/FORM_INFO';
import routes from '@/constants/routes';
import SignLayout from '@/styles/layout/SignLayout';
import { authRequests } from '@/apis/auth.api';

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = async (formData: SignInFormValues) => {
    try {
      const { data } = await authRequests.signIn(formData);
      navigate(routes.home);
    } catch (error) {
      throw error;
    }
  };
  return (
    <SignLayout>
      <Form
        inputInformations={FORM_INFO.SIGN_IN}
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        <Button style={{ margin: '6rem 0' }}>로그인</Button>
      </Form>
      <SocialLogin />
    </SignLayout>
  );
}

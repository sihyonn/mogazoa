import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button';
import Form from '@/components/common/form/Form';
import FORM_INFO from '@/constants/FORM_INFO';
import routes from '@/constants/routes';
import SignLayout from '@/styles/layout/SignLayout';
import { authRequests } from '@/apis/auth.api';

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = async (formData: SignUpFormValues) => {
    try {
      const { data } = await authRequests.signUp(formData);
      console.log(data);
      navigate(routes.home);
    } catch (error) {
      throw error;
    }
  };

  return (
    <SignLayout>
      <Form
        inputInformations={FORM_INFO.SIGN_UP}
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          nickname: '',
          password: '',
          passwordConfirmation: '',
        }}
      >
        <Button>회원가입</Button>
      </Form>
    </SignLayout>
  );
}

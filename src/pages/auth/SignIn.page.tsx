import Button from '@/components/common/button/Button';
import Form from '@/components/common/form/Form';
import FORM_INFO from '@/constants/FORM_INFO';
import SignLayout from '@/styles/layout/SignLayout';

export default function SignIn() {
  const handleSubmit = () => {
    console.log('제풀');
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
        <Button style={{ marginTop: '6rem' }}>로그인</Button>
      </Form>
    </SignLayout>
  );
}

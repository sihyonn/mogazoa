import Button from '@/components/common/Button';
import Form from '@/components/common/form/Form';
import FORM_INFO from '@/constants/FORM_INFO';
import SignLayout from '@/styles/layout/SignLayout';

export default function SignUp() {
  return (
    <SignLayout>
      <Form
        inputInformations={FORM_INFO.SIGN_UP}
        onSubmit={() => console.log('제출')}
        onError={() => console.log('폼 제출 실패')}
        initialValues={{
          email: '',
          nickname: '',
          password: '',
          passwordCheck: '',
        }}
      >
        <Button>회원가입</Button>
      </Form>
    </SignLayout>
  );
}

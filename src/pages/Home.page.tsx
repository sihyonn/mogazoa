import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button';
import routes from '@/constants/routes';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      홈페이지
      <Button
        onClick={() => navigate(routes.signUp)}
        style={{ width: '15rem' }}
      >
        회원가입 바로가기
      </Button>
    </div>
  );
}

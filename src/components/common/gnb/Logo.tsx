import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MainLogo from 'public/logo.svg';
import routes from '@/constants/routes';

export default function Logo() {
  return (
    <S.Container to={routes.home}>
      <img src={MainLogo} alt="메인로고" />
    </S.Container>
  );
}

const S = {
  Container: styled(Link)`
    cursor: pointer;
  `,
};

import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export default function SignLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <S.Container>
      <Outlet />
      {children}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    min-height: 100vh;
    padding: 9.3rem calc((100vw - 64rem) / 2) 0;

    @media (max-width: 375px) {
      padding: 0 2rem;
    }
  `,
};

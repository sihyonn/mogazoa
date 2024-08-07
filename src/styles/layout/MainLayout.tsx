import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <S.Gnb>gnb 자리</S.Gnb>
      <S.Container>
        <Outlet />
        {children}
      </S.Container>
    </>
  );
}

const S = {
  Gnb: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 10rem;
    border: ${({ theme }) => theme.border};
  `,

  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 10rem;
  `,
};

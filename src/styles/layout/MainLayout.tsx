import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Gnb from '@/components/common/gnb/Gnb';

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Gnb />
      <S.Container>
        <Outlet />
        {children}
      </S.Container>
    </>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 10rem;
  `,
};

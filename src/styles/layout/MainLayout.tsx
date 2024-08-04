import styled from '@emotion/styled';

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <S.Gnb>gnb 자리</S.Gnb>
      <S.Continer>{children}</S.Continer>
    </div>
  );
}

const S = {
  Gnb: styled.div`
    height: 10rem;
    border: ${({ theme }) => theme.border};
  `,

  Continer: styled.div`
    padding-top: 10rem;
  `,
};

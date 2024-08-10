import styled from '@emotion/styled';
import Logo from '@/components/common/gnb/Logo';

export default function Gnb() {
  return (
    <S.Container>
      <S.InnerWrap>
        <Logo />
        <div>그룹자리</div>
      </S.InnerWrap>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 10rem;
    border-bottom: 1px solid #252530;
    background-color: ${({ theme }) => theme.color.darkBlack};
  `,

  InnerWrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 12rem;

    @media (max-width: 767px) {
      padding: 1.2rem 2rem;
    }
  `,
};

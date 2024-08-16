import styled from '@emotion/styled';
import googleIcon from '@/assets/icons/google-icon.svg';
import kakaoIcon from '@/assets/icons/kako-icon.svg';

export default function SocialLogin() {
  return (
    <S.Container>
      <S.Title>SNS로 바로 시작하기</S.Title>
      <S.SnsButtonBox>
        <S.SnsButton>
          <img src={googleIcon} alt="구글 아이콘" />
        </S.SnsButton>
        <S.SnsButton>
          <img src={kakaoIcon} alt="카카오 아이콘" />
        </S.SnsButton>
      </S.SnsButtonBox>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  `,

  Title: styled.span`
    margin-bottom: 2rem;
    ${({ theme }) => theme.typography.body1}
  `,

  SnsButtonBox: styled.div`
    display: flex;
    gap: 2rem;
  `,

  SnsButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 5.6rem;
    height: 5.6rem;
    border: ${({ theme }) => theme.border};
    border-radius: 50%;
  `,
};

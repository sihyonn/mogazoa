import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import HideIcon from '@/assets/icons/eye-closed.svg';
import ShowIcon from '@/assets/icons/eye-open.svg';

interface EyeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isVisible: boolean;
}

export default function EyeIconButton({
  onClick,
  isVisible,
  ...htmlButtonProps
}: EyeButtonProps) {
  const src = isVisible ? ShowIcon : HideIcon;
  const alt = isVisible ? '비밀번호 보기' : '비밀번호 감추기 ';

  return (
    <S.Container onClick={onClick} type="button" {...htmlButtonProps}>
      <S.Icon src={src} alt={alt} />
    </S.Container>
  );
}

const S = {
  Container: styled.button`
    position: absolute;
    top: 2.3rem;
    right: 2rem;
  `,
  Icon: styled.img``,
};

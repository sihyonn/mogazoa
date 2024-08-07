import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { BUTTON_STYLE } from '@/constants/BUTTON';
import { buttonStyleByType } from '@/styles/commonStyle';

type ButtonStyleType = keyof typeof BUTTON_STYLE;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styleType?: ButtonStyleType;
}

export default function Button({
  children,
  styleType = BUTTON_STYLE.PRIMARY,
  ...htmlButtonProps
}: ButtonProps) {
  return (
    <S.Button {...htmlButtonProps} $styleType={styleType}>
      <S.InnerWrap>{children}</S.InnerWrap>
    </S.Button>
  );
}

const S = {
  Button: styled.button<{
    $styleType: ButtonStyleType;
  }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0.8rem;
    white-space: nowrap;

    &:disabled {
      color: ${({ theme }) => theme.color.darkGray};
      cursor: not-allowed;
      border: 2px solid ${({ theme }) => theme.color.lightBlack};
    }
    ${({ theme }) => theme.typography.button}
    ${({ $styleType }) => buttonStyleByType[$styleType]}
  `,

  InnerWrap: styled.div`
    padding: 2.2rem 14rem;
  `,
};

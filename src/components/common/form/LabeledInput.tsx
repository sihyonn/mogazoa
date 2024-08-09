import { useState } from 'react';
import styled from '@emotion/styled';
import EyeIconButton from '@/components/common/button/EyeIconButton';
import { commonInputStyle } from '@/styles/commonStyle';

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  errorMsg?: string;
}

export default function LabeledInput({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  errorMsg,
  ...htmlInputProps
}: LabeledInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;
  const renderMessage = errorMsg ? <S.Message>{errorMsg}</S.Message> : null;

  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          id={id}
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          $isError={!!errorMsg}
          autoComplete={type === 'password' ? 'off' : 'on'}
          {...htmlInputProps}
        />
        {type === 'password' && (
          <EyeIconButton
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            isVisible={isPasswordVisible}
          />
        )}
      </S.InputWrapper>
      {renderMessage}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2rem;
  `,

  Label: styled.label`
    ${({ theme }) => theme.typography.input};
    color: ${({ theme }) => theme.color.white};
  `,

  InputWrapper: styled.div`
    position: relative;
    width: 100%;
  `,

  Input: styled.input<{ $isError?: boolean }>`
    ${commonInputStyle}

    height: 7rem;
    padding: 2.3rem 2rem;
    border: 1px solid
      ${({ theme, $isError }) =>
        $isError ? theme.color.red : theme.color.lightBlack};
  `,

  Message: styled.span`
    ${({ theme }) => theme.typography.error}
  `,
};

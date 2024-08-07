import styled from '@emotion/styled';
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
  const renderMessage = errorMsg ? <S.Message>{errorMsg}</S.Message> : null;

  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        $isError={!!errorMsg}
        autoComplete={type === 'password' ? 'off' : 'on'}
        {...htmlInputProps}
      />
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

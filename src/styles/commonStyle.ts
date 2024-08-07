import theme from '@/styles/theme';

export const commonInputStyle = `
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${theme.color.black};
  color: ${theme.color.white};

  :focus {
    border: 1px solid transparent;
    border-radius: 0.8rem;
    background-image: linear-gradient(#1c1c22, #1c1c22),
      linear-gradient(91.17deg, #5097fa 0%, #5363ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  ::placeholder {
   ${theme.typography.placeholder}
  }
`;

export const buttonStyleByType = {
  PRIMARY: `
    background: linear-gradient(91.17deg, #5097FA 0%, #5363FF 100%);
    color: ${theme.color.white};

    &:hover {
      background: linear-gradient(91.17deg, #428ef9 0%, #465bf7 100%);
    }
    &:disabled {
      background:  ${theme.color.lightBlack};
    }
  `,

  SECONDARY: `
    border: 1px solid transparent;
    background-image: linear-gradient(#1C1C22, #1C1C22), linear-gradient(91.17deg, #5097FA 0%, #5363FF 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    color: ${theme.color.indigo}
  `,

  TERTIARY: `
    border: 1px solid ${theme.color.gray};
    color: ${theme.color.gray}
  `,
};

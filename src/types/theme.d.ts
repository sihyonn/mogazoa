import '@emotion/react';

type color =
  | 'darkBlack'
  | 'black'
  | 'lightBlack'
  | 'darkGray'
  | 'gray'
  | 'white'
  | 'main'
  | 'indigo'
  | 'yellow'
  | 'green'
  | 'pink'
  | 'red'
  | 'gradation';

type typography =
  | 'title'
  | 'subTitle1'
  | 'subTitle2'
  | 'subTitle3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'input'
  | 'button'
  | 'sideNav'
  | 'placeholder'
  | 'error';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in color]: string;
    };
    typography: {
      [key in typography]: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        color?: string;
      };
    };
    border: string;
  }
}

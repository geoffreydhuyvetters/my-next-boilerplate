import { createStitches, globalCss } from '@stitches/react';

export const { getCssText, styled, css } = createStitches({
  theme: {
    space: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      5: '32px',
      6: '64px',
      7: '128px',
      8: '256px',
    },
    fontSizes: {
      base: '16px',
      large: '22px',
      xlarge: '26px',
      xxlarge: '32px',
    },
    fonts: {
      base: 'Helvetica',
      header: 'Verdana',
    },
    colors: {
      primary: '#666',
      secondary: 'white',
    },
  },
});

export const reset = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
    {
      display: 'block',
    },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // @ts-ignore
    content: 'none',
  },
  table: {
    borderSpacing: '0',
  },
});

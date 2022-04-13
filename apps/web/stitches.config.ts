import { createStitches } from '@stitches/react';

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
  },
});

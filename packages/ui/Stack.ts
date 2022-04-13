import { styled } from './stitches.config';
import { gap } from './variants/gap';

const Stack = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    gap,
  },
  defaultVariants: {
    gap: '4',
  },
});

export { Stack };

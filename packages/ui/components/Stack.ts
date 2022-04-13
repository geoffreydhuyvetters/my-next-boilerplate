import { styled } from '../stitches.config';
import { gap } from '../variants/gap';

const Stack = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  variants: {
    gap,
  },
  defaultVariants: {
    gap: '4',
  },
});

export { Stack };

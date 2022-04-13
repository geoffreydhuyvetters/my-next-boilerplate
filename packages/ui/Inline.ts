import { styled } from './stitches.config';
import { gap } from './variants/gap';

const Inline = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  variants: {
    gap,
  },
  defaultVariants: {
    gap: '4',
  },
});

export { Inline };

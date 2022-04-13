import { styled } from '../stitches.config';

const Button = styled('button', {
  fontFamily: '$base',
  fontSize: '$base',
  padding: '7px 17px',
  backgroundColor: '$primary',
  border: 'none',
  color: '$secondary',
  cursor: 'pointer',
  textTransform: 'capitalize',
});

export { Button };

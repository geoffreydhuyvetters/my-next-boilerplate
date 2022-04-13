import { DefaultLayout } from '@/layouts/DefaultLayout';
import { styled } from '../../stitches.config';

const Stack = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    gap: {
      '1': {
        gap: '$1',
      },
      '2': {
        gap: '$2',
      },
      '3': {
        gap: '$3',
      },
      '4': {
        gap: '$4',
      },
      '5': {
        gap: '$5',
      },
      '6': {
        gap: '$6',
      },
      '7': {
        gap: '$7',
      },
      '8': {
        gap: '$8',
      },
    },
  },
});

const Index = () => {
  return (
    <DefaultLayout>
      <Stack gap="3">
        <h1>Hello World</h1>
        <p>start hacking!</p>
      </Stack>
    </DefaultLayout>
  );
};

export default Index;

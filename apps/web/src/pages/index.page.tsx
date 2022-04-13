import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Stack, Text, Header, Inline } from 'ui';

const Index = () => {
  return (
    <DefaultLayout>
      <Stack gap="4">
        <Header>Hello World</Header>
        <Inline gap="4">
          <Text>start hacking!</Text>
          <Text>start hacking!</Text>
        </Inline>
      </Stack>
    </DefaultLayout>
  );
};

export default Index;

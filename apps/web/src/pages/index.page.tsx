import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Stack, Text, Header, Inline } from 'ui';

const Index = () => {
  return (
    <DefaultLayout>
      <Stack>
        <Header>Hello World</Header>
        <Inline>
          <Text>start hacking!</Text>
          <Text>start hacking!</Text>
        </Inline>
      </Stack>
    </DefaultLayout>
  );
};

export default Index;

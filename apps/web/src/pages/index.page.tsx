import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Stack, Text, Header, Inline, Button } from 'ui';

const Index = () => {
  return (
    <DefaultLayout>
      <Stack>
        <Header>Hello World</Header>
        <Inline>
          <Text>start hacking!</Text>
          <Text>start hacking!</Text>
        </Inline>
        <Button>click me</Button>
      </Stack>
    </DefaultLayout>
  );
};

export default Index;

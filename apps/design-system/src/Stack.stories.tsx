import { Button, Stack, Text } from 'ui';

export default {
  title: 'primitives/Stack',
  component: Stack,
};

export const Basic = () => (
  <Stack>
    <Text>this</Text>
    <Text>is</Text>
    <Button>stacking</Button>
  </Stack>
);

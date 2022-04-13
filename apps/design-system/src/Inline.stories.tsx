import { Inline, Text } from 'ui';

export default {
  title: 'primitives/Inline',
  component: Inline,
};

export const Basic = () => (
  <Inline>
    <Text>this</Text>
    <Text>is</Text>
    <Text>inline</Text>
  </Inline>
);

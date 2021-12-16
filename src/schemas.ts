import { z } from 'zod';

// https://github.com/colinhacks/zod#defining-schemas
// https://github.com/colinhacks/zod#type-inference

const fooSchema = z.object({
  name: z.string().optional(),
});

export { fooSchema };

import { Type as t } from '@sinclair/typebox'
import { TypeBoxSchema } from './_Schema'

export const Todo = new TypeBoxSchema(
  'todos',
  t.Object({
    creatorUid: t.String({ format: 'uuid' }),
    title: t.String({
      minLength: 1,
    }),
    description: t.String(),
    done: t.Boolean({ default: false }),
    createdTimestamp: t.Number(),
    doneTimestamp: t.Number(),
  }),
)

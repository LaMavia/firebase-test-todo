import { Type as t } from '@sinclair/typebox'
import { SchemaType, TypeBoxSchema } from './_Schema'

export const User = new TypeBoxSchema(
  'users',
  t.Object({
    profilePictureUrl: t.Optional(
      t.String({
        format: 'uri-template',
      }),
    ),
    name: t.String(),
    uid: t.String({ $id: 'uid' }),
    todos: t.Record(t.String(), t.Boolean()),
  }),
)

export type User = SchemaType<typeof User>

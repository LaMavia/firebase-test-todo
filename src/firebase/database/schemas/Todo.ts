import { Type as t } from "@sinclair/typebox"
import { TypeBoxSchema } from "./_Schema"
import { User } from "./User"

export const Todo = new TypeBoxSchema(
  "todos",
  t.Object({
    creatorUid: t.Ref(User.schema.properties.uid),
    title: t.String({
      minLength: 1
    }),
    description: t.Optional(t.String({
      minLength: 1
    })),
    done: t.Boolean({ default: false }),
    createdTimestamp: t.Number(),
    doneTimestamp: t.Number()
  })
)

import { Static, TSchema } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

export abstract class Schema<S, V> {
  public constructor(
    public readonly dbPath: string,
    public readonly schema: S,
  ) {}

  public make(data: unknown): V | undefined {
    if (this.validate(data)) {
      return this.cast(data)
    }

    return undefined
  }

  abstract validate(data: unknown): data is V
  abstract cast<T extends V>(data: T): V
}

export type SchemaType<S extends Schema<any, any>> = S extends Schema<
  infer _,
  infer V
>
  ? V
  : never

export class TypeBoxSchema<S extends TSchema> extends Schema<S, Static<S>> {
  cast<T extends Static<S>>(data: T): Static<S> {
    return Value.Cast<S>(this.schema, data)
  }

  validate(data: unknown): data is Static<S> {
    return Value.Check<S>(this.schema, data)
  }
}

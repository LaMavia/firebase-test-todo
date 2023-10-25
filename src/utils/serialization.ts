type JsonSerializableNode =
  | string
  | number
  | boolean
  | undefined

export type SerialisedKeys<T extends object> = {
  [K in keyof T]: [Serialized<T[K]>] extends [never]
    ? never
    : K
}[keyof T]

export type Serialized<T> = T extends JsonSerializableNode
  ? T
  : T extends (...args: [...infer _]) => infer __
  ? never
  : T extends [infer A, ...infer As]
  ? [Serialized<A>] extends [never]
    ? Serialized<As>
    : [
        Serialized<A>,
        ...(Serialized<As> extends [...infer SerializedAs]
          ? [...SerializedAs]
          : []),
      ]
  : T extends []
  ? []
  : T extends object
  ? { [K in SerialisedKeys<T>]: Serialized<T[K]> }
  : never

// Casts objects serialized using .toJson() of firebase objects to their JSON-serializable types
export const serialize = <T>(obj: object | string) =>
  typeof obj === 'string'
    ? (JSON.parse(obj) as Serialized<T>)
    : (obj as Serialized<T>)

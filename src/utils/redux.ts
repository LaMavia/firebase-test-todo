import {
  PayloadActionCreator,
  Slice,
} from '@reduxjs/toolkit'

export type SliceActions<
  S extends Slice,
  Keys extends keyof S['actions'] = keyof S['actions'],
> = ReturnType<S['actions'][Keys]>

export type ActionPayload<
  Creator extends PayloadActionCreator,
> = ReturnType<Creator>['payload']

export type SliceState<S extends Slice> = ReturnType<
  S['getInitialState']
>

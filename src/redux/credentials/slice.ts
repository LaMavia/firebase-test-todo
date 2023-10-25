import {
  Action,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import { UserCredential } from 'firebase/auth'
import { SliceActions, SliceState } from '../../utils/redux'
import { RootState } from '../app/store'
import { Serialized } from '../../utils/serialization'

const initialState: {
  value: Serialized<UserCredential> | null
} = {
  value: null,
}

const slice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    // epic virtual actions
    signinEmailCredentials: (
      _state,
      _action: PayloadAction<{
        email: string
        password: string
      }>,
    ) => {
      void _state
      void _action
    },
    signupEmailCredentials: (
      _state,
      _action: PayloadAction<{
        email: string
        password: string
      }>,
    ) => {
      void _state
      void _action
    },
    signinAnonymousCredentials: (
      _state,
      _action: Action,
    ) => {
      void _state
      void _action
    },
    signinGoogleCredentials: (_state, _action: Action) => {
      void _state
      void _action
    },

    // real actions
    setCredentials: (
      state,
      {
        payload: newCredentials,
      }: PayloadAction<Serialized<UserCredential>>,
    ) => {
      state.value = newCredentials
    },
    clearCredentials: (state, _: Action) => {
      state.value = null
    },
  },
})

export type CredentialsAction = SliceActions<typeof slice>
export type CredentialsState = SliceState<typeof slice>

export const credentialsReducer = slice.reducer
export const credentialsStoreName = slice.name

export const { setCredentials, clearCredentials } =
  slice.actions

export const selectCredentialsUser = ({
  credentials,
}: RootState) => credentials.value?.user

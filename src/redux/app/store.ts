import { configureStore } from '@reduxjs/toolkit'
import {
  Epic,
  createEpicMiddleware,
} from 'redux-observable'
import { rootEpic } from './epics'
import {
  credentialsReducer,
  credentialsStoreName,
} from '../credentials/slice'

export const makeStore = () => {
  const epicMiddleware = createEpicMiddleware()
  const store = configureStore({
    reducer: {
      [credentialsStoreName]: credentialsReducer,
    },
    middleware: [epicMiddleware],
  })

  epicMiddleware.run(rootEpic as Epic)

  return store
}

type StoreType = ReturnType<typeof makeStore>
export type RootState = ReturnType<StoreType['getState']>
export type AppDispatch = StoreType['dispatch']

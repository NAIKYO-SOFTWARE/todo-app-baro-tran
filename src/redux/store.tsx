import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../views/Login/LoginSlide'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSage'

const sageMiddleware = createSagaMiddleware()
const rootReducer = {
  login: loginReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({

  }).concat(sageMiddleware),
});

sageMiddleware.run(rootSaga);
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

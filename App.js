import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './sagas/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/itemSagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

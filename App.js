import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import increaseExpense from './src/redux/reducer';
import Routes from './src/navigation/Routes';
import rootSaga from './src/redux/saga';
import {dummyCard} from './src/data/dummydata';
import { createServer } from "miragejs";  // create a server

// to create a server , which will have the local data.
if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/card", () => {
      return {
        card: dummyCard,
      }
    })
  },
})

//saga store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(increaseExpense, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
};
export default App;
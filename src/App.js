import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { sagafunction } from "./Saga/Sagas";
import combinedReducers from "./reducers/CombinedReducers";
import BodyComponent from "./components/BodyComponent";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagafunction);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <BodyComponent />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

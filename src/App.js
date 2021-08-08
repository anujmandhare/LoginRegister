import "./App.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import combinedReducers from "./reducers/CombinedReducers";
import BodyComponent from "./components/BodyComponent";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { sagafunction } from "./Saga/Sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

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

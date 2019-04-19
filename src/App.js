import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.min.css";
import store from "./store";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Pagination from "./components/Pagination/Pagination";
import PopMessage from "./components/PopMessage/PopMessage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />
          <Jumbotron />
          <Pagination />
          <PopMessage />
        </div>
      </Provider>
    );
  }
}

export default App;

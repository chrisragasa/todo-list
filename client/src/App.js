import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import TodoList from "./components/TodoList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <TodoList />
      </div>
    );
  }
}

export default App;

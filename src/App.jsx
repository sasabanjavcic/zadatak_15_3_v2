import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/header";
import Main from "./components/main";

class App extends Component {
  state = {
    page: "Home",
  };
  pageHandler = () => {
    if (this.state.page === "Home") {
      this.setState({
        page: "About",
      });
    } else {
      this.setState({
        page: "Home",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header pageHandler={this.pageHandler} page={this.state.page} />
        <Main page={this.state.page} />
      </div>
    );
  }
}

export default App;

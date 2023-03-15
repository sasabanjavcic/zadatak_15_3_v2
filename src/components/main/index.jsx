import { Component } from "react";
import Home from "../home";
import About from "../about";

export default class Main extends Component {
  render() {
    return <main>{this.props.page === "Home" ? <Home /> : <About />}</main>;
  }
}

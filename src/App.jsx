import React, { Component } from "react";
import PropTypes from "prop-types";
import { Sidebar } from "./components/Sidebar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

App.propTypes = {
  jwtTokenAccess: PropTypes.string,
  jwtTokenRefresh: PropTypes.string,
  basename: PropTypes.string.isRequired,
};

export default App;

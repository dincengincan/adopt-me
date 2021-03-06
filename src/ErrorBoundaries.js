// mostly code from react.js/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      redirect: false
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  //componentDidCatch ve getDerivedStateFromError un Hooks versiyonu yok
  componentDidCatch(error, info) {
    console.error("Errorboundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
      //I could have used simply below without state
      //setTimeout(() => navigate("/"), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error) {
    return { error };
  }

  // CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h1>An error has occurred in a child component!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

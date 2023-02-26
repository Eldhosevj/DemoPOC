import React, { Suspense } from "react";
class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
      console.log(error,"please see error")
      return {
        hasError: true,
        error
      };
    }
    render() {
      if (this.state.hasError) {
        return this.props.fallback;
      }
      return this.props.children;
    }
  }
  export default ErrorBoundary
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./footer/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow flex flex-col items-center justify-center text-center bg-blue-100 text-blue-400">
            <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
            <p className="mb-4 max-w-[320px] sm:max-w-none">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition cursor-pointer"
            >
              Refresh Page
            </button>
          </div>
          <Footer />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

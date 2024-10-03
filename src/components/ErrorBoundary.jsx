import React, { Component } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state to show fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
        // Store the error and errorInfo for rendering
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col justify-center items-center min-h-screen bg-red-100 text-red-700 p-6">
                    <AiOutlineWarning className="text-6xl mb-4" />
                    <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
                    <p className="text-lg mb-4">
                        We're sorry for the inconvenience. An unexpected error occurred.
                    </p>

                    {/* Dynamically display error message */}
                    {this.state.error && (
                        <div className="bg-white text-black p-4 rounded shadow-lg max-w-xl w-full">
                            <h2 className="text-xl font-semibold mb-2">Error Details:</h2>
                            <p className="mb-2">
                                <strong>Error:</strong> {this.state.error.toString()}
                            </p>
                            <details className="whitespace-pre-wrap">
                                <summary className="cursor-pointer text-gray-700">
                                    View stack trace
                                </summary>
                                <p className="mt-2">{this.state.errorInfo?.componentStack}</p>
                            </details>
                        </div>
                    )}

                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 mt-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-500 transition-colors"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

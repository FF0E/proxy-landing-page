"use client"

import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

function DefaultErrorFallback({
  error,
  resetError,
}: {
  error: Error
  resetError: () => void
}) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-destructive/20 bg-destructive/5 p-8 text-center">
      <h2 className="mb-2 text-lg font-semibold text-destructive">
        Something went wrong
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">
        {error.message || "An unexpected error occurred"}
      </p>
      <button
        onClick={resetError}
        className="rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Try again
      </button>
    </div>
  )
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={() => this.setState({ hasError: false, error: undefined })}
        />
      )
    }

    return this.props.children
  }
}
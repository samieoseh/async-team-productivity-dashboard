// RouteErrorBoundary.tsx
import type { JSX } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function RouteErrorBoundary(): JSX.Element {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Unexpected Application Error</h2>
        <pre>{error.message}</pre>
      </div>
    );
  }

  return <h2>Unknown error</h2>;
}

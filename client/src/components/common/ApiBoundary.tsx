import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ApiErrorFallback from "./ApiErrorFallback";
import Loading from "./Loading";

export default function ApiBoundary({ children }: { children: ReactNode }) {
  return (
    <>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <>
            <ErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </ErrorBoundary>
          </>
        )}
      </QueryErrorResetBoundary>
    </>
  );
}

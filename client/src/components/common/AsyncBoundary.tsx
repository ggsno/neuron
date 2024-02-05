import { ReactNode, Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import Loading from "./Loading";

/**
 * Suspense + Error Boundary
 */
export default function AsyncBoundary({ children }: { children: ReactNode }) {
  return (
    <>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </ErrorBoundary>
          </>
        )}
      </QueryErrorResetBoundary>
    </>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  // TODO: 에러 원인에 따라 처리 후 아래의 임시로 넣은 콘솔로그 지우기
  console.log(error);
  return (
    <>
      <div>요청에 실패했습니다.</div>
      <button onClick={() => resetErrorBoundary()}>재시도</button>
    </>
  );
}

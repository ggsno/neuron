import { FallbackProps } from "react-error-boundary";

export default function ApiErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <>
      요청에 실패했습니다.{error}
      <button onClick={() => resetErrorBoundary()}>재시도</button>
    </>
  );
}

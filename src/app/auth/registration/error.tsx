'use client';

import { useEffect } from 'react';

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <p>{error.digest}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default Error;

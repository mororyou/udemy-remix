import { useState } from 'react';
import Header from '~/components/demo/Header';

export default function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Header />
      <h1>Demo Page</h1>
      <p>Welcome to the demo page!</p>
      {isLoading && <p>Loading...</p>}
      <button onClick={() => setIsLoading(true)}>Submit</button>
    </div>
  );
}

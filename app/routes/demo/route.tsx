import { Fragment, useState } from 'react';
import Header from '~/components/demo/Header';

export default function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Fragment>
      <Header />
      <main className="spacy-4 flex flex-col px-4">
        <h1 className="text-lg font-bold text-gray-800">Demo Page</h1>
        <p>Welcome to the demo page!</p>
        {isLoading && <p>Loading...</p>}
        <button onClick={() => setIsLoading(true)}>Submit</button>
        <a href="/about">to About</a>
      </main>
    </Fragment>
  );
}

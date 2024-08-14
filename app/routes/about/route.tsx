import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import Header from '~/components/demo/Header';

export default function About() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Fragment>
      <Header />
      <main className="spacy-4 flex flex-col px-4">
        <h1 className="text-lg font-bold text-gray-800">About Page</h1>
        <p>Welcome to the About page!</p>
        {isLoading && <p>Loading...</p>}
        <button onClick={() => setIsLoading(true)}>Submit</button>
        <a href="/demo">to Demo</a>
      </main>
    </Fragment>
  );
}

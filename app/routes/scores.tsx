import { useLoaderData } from '@remix-run/react';

export async function loader() {
  const scores = [
    { id: 1, teams: 'Alice', goals: 10, some_key: 'some_value' },
    { id: 2, teams: 'Bob', goals: 20, some_key: 'some_value' },
    { id: 3, teams: 'Charlie', goals: 30, some_key: 'some_value' },
  ];
  return scores;
}

export default function Scores() {
  const scores = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="mb-4 font-bold text-gray-800">Scores</h1>
      <ul className="flex flex-col space-y-2">
        {scores.map((score) => (
          <li key={score.id}>
            Team: {score.teams} - Score: {score.goals}
          </li>
        ))}
      </ul>
    </div>
  );
}

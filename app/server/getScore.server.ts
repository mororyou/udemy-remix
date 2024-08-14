export async function getScores() {
  const scores = [
    { id: 1, teams: 'Alice', goals: 10, some_key: 'some_value' },
    { id: 2, teams: 'Bob', goals: 20, some_key: 'some_value' },
    { id: 3, teams: 'Charlie', goals: 30, some_key: 'some_value' },
  ];
  return scores;
}

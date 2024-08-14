import { getScores } from '~/server/getScore.server';

export async function loader() {
  const scores = await getScores();
  return scores;
}

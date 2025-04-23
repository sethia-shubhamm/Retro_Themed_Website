export interface HighScore {
  id: string;
  playerName: string;
  score: number;
  game: string;
  date: string;
}

const STORAGE_KEY = 'retro_high_scores';

export function getHighScores(): HighScore[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const scores = localStorage.getItem(STORAGE_KEY);
    return scores ? JSON.parse(scores) : [];
  } catch (error) {
    console.error('Error fetching high scores:', error);
    return [];
  }
}

export function saveHighScore(score: Omit<HighScore, 'id' | 'date'>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const scores = getHighScores();
    const newScore: HighScore = {
      ...score,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    
    scores.push(newScore);
    scores.sort((a, b) => b.score - a.score);
    
    // Keep only top 10 scores
    const topScores = scores.slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topScores));
  } catch (error) {
    console.error('Error saving high score:', error);
  }
}

export function getGameHighScores(game: string): HighScore[] {
  return getHighScores().filter(score => score.game === game);
}

export function getTopScores(game: string, limit: number = 10): HighScore[] {
  const scores = game 
    ? getHighScores().filter(score => score.game === game)
    : getHighScores();
  
  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
} 
export interface HighScoreSubmission {
  playerName: string;
  score: number;
  game: string;
}

export interface HighScore {
  id: string;
  playerName: string;
  score: number;
  game: string;
  createdAt: string;
}

export async function submitHighScore(score: HighScoreSubmission): Promise<HighScore | null> {
  try {
    const response = await fetch('/api/high-scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting high score:', error);
    return null;
  }
}

export async function getGameHighScores(game: string, limit: number = 10): Promise<HighScore[]> {
  try {
    const response = await fetch(`/api/high-scores?game=${encodeURIComponent(game)}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching game high scores:', error);
    return [];
  }
} 
import { NextRequest, NextResponse } from 'next/server';
import { getHighScores, saveHighScore, getTopScores } from '@/lib/highscores';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const game = searchParams.get('game');
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : 10;

    if (game) {
      const scores = await getTopScores(game, limit);
      return NextResponse.json(scores);
    } else {
      const scores = await getHighScores();
      return NextResponse.json(scores);
    }
  } catch (error) {
    console.error('Error in high-scores GET route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch high scores' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.playerName || typeof body.score !== 'number' || !body.game) {
      return NextResponse.json(
        { error: 'Missing required fields: playerName, score, and game are required' },
        { status: 400 }
      );
    }

    const newScore = await saveHighScore({
      playerName: body.playerName,
      score: body.score,
      game: body.game,
    });

    return NextResponse.json(newScore);
  } catch (error) {
    console.error('Error in high-scores POST route:', error);
    return NextResponse.json(
      { error: 'Failed to save high score' },
      { status: 500 }
    );
  }
} 
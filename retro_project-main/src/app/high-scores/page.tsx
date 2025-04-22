"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getHighScores, type HighScore } from '@/lib/highscores';

export default function HighScores() {
  const [scores, setScores] = useState<HighScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const highScores = getHighScores();
      setScores(highScores);
    } catch (error) {
      console.error('Error loading high scores:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="min-h-screen bg-neutral text-white font-retro">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-center mb-8 text-retroPink">
            HIGH SCORES
          </h1>

          <div className="retro-card p-6">
            {loading ? (
              <div className="text-center text-2xl text-retroYellow">
                LOADING SCORES...
              </div>
            ) : scores.length === 0 ? (
              <div className="text-center text-2xl text-retroYellow">
                NO SCORES YET. BE THE FIRST TO PLAY!
              </div>
            ) : (
              <div className="space-y-4">
                {scores.map((score) => (
                  <div
                    key={score.id}
                    className="flex justify-between items-center p-4 bg-neutral-800 rounded"
                  >
                    <div>
                      <div className="text-xl text-retroGreen">
                        {score.playerName}
                      </div>
                      <div className="text-sm text-gray-400">
                        {score.game} • {new Date(score.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-2xl text-retroYellow">{score.score}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
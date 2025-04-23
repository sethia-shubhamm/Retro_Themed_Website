"use client";

import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define types
type Position = {
  x: number;
  y: number;
};

export default function SnakeGame() {

  const canvasSize = 400;
  const gridSize = 20;
  const cellSize = canvasSize / gridSize;


  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);


  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 10 }
  ]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Position>({ x: 0, y: 0 });


  const generateFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
    setFood(newFood);
  };


  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: 0 });
    setScore(0);
    setGameOver(false);
    generateFood();
  };


  const startGame = () => {
    resetGame();
    setIsPlaying(true);
    setDirection({ x: 1, y: 0 }); 
  };


  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, direction]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const updateGame = () => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        

        const head = {
          x: newSnake[0].x + direction.x,
          y: newSnake[0].y + direction.y
        };

        if (
          head.x < 0 || 
          head.x >= gridSize || 
          head.y < 0 || 
          head.y >= gridSize
        ) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        for (let i = 0; i < newSnake.length; i++) {
          if (newSnake[i].x === head.x && newSnake[i].y === head.y) {
            setGameOver(true);
            setIsPlaying(false);
            return prevSnake;
          }
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          setScore(prevScore => prevScore + 10);
          generateFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };
    const gameLoop = setInterval(updateGame, 150);
    
    return () => clearInterval(gameLoop);
  }, [isPlaying, gameOver, direction, food, gridSize]);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;


    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvasSize, canvasSize);


    ctx.fillStyle = '#00ff00'; 
    snake.forEach(segment => {
      ctx.fillRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize - 1,
        cellSize - 1
      );
    });

    ctx.fillStyle = '#ff00ff'; 
    ctx.fillRect(
      food.x * cellSize,
      food.y * cellSize,
      cellSize - 1,
      cellSize - 1
    );
  }, [snake, food, cellSize, canvasSize]);

  return (
    <main className="min-h-screen bg-neutral text-white font-retro">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-center mb-8 text-retroGreen">
            SNAKE
          </h1>
          
          <div className="retro-card p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl">SCORE: {score}</div>
              {!isPlaying && !gameOver && (
                <button
                  onClick={startGame}
                  className="retro-button"
                >
                  START GAME
                </button>
              )}
              {gameOver && (
                <button
                  onClick={startGame}
                  className="retro-button"
                >
                  PLAY AGAIN
                </button>
              )}
            </div>

            <div className="flex justify-center">
              <canvas
                ref={canvasRef}
                width={canvasSize}
                height={canvasSize}
                className="border border-retroPink rounded-lg"
              />
            </div>

            {gameOver && (
              <div className="text-center mt-4 text-2xl text-retroPink">
                GAME OVER!
              </div>
            )}

            <div className="mt-6 text-center text-gray-400">
              Use arrow keys to control the snake
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
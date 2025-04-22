"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { submitHighScore } from '@/lib/client';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const gridSize = 20;
  const cellSize = 20;
  const initialSpeed = 100;
  const speedIncrease = 5;
  
  const snakeRef = useRef<Position[]>([{ x: 5, y: 5 }]);
  const foodRef = useRef<Position>({ x: 10, y: 10 });
  const directionRef = useRef<Direction>('RIGHT');
  const speedRef = useRef<number>(initialSpeed);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const finalScoreRef = useRef<number>(0);

  const generateFood = useCallback(() => {
    const x = Math.floor(Math.random() * (gridSize - 1));
    const y = Math.floor(Math.random() * (gridSize - 1));
    
    const isOnSnake = snakeRef.current.some(
      segment => segment.x === x && segment.y === y
    );
    
    if (isOnSnake) {
      return generateFood();
    }
    
    return { x, y };
  }, [gridSize]);

  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setHighScore(prev => Math.max(prev, score));
    finalScoreRef.current = score;
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
    
    if (score > 0) {
      setShowNameInput(true);
    }
  }, [score]);

  function gameLoopFunction() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const newSnake = [...snakeRef.current];
    
    const newHead = { ...newSnake[0] };
    switch (directionRef.current) {
      case 'UP':
        newHead.y -= 1;
        break;
      case 'DOWN':
        newHead.y += 1;
        break;
      case 'LEFT':
        newHead.x -= 1;
        break;
      case 'RIGHT':
        newHead.x += 1;
        break;
    }
    
    if (
      newHead.x < 0 ||
      newHead.y < 0 ||
      newHead.x >= gridSize ||
      newHead.y >= gridSize ||
      newSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      handleGameOver();
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FF69B4';
      ctx.font = '30px &quot;Press Start 2P&quot;, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
      
      return;
    }
    
    newSnake.unshift(newHead);
    
    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
      foodRef.current = generateFood();
      
      setScore(prev => prev + 10);
      
      if (speedRef.current > 50) {
        speedRef.current -= speedIncrease;
        if (gameLoopRef.current) {
          clearInterval(gameLoopRef.current);
        }
        gameLoopRef.current = setInterval(gameLoopFunction, speedRef.current);
      }
    } else {
      newSnake.pop();
    }
    
    snakeRef.current = newSnake;
    
    newSnake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#8A2BE2' : '#00BFFF';
      ctx.fillRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize,
        cellSize
      );
      
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize,
        cellSize
      );
    });
    
    ctx.fillStyle = '#FF69B4';
    ctx.fillRect(
      foodRef.current.x * cellSize,
      foodRef.current.y * cellSize,
      cellSize,
      cellSize
    );
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvas.width, i * cellSize);
      ctx.stroke();
    }
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    for (let i = 0; i < canvas.height; i += 4) {
      ctx.fillRect(0, i, canvas.width, 2);
    }
    
    ctx.fillStyle = '#FFD700';
    ctx.font = '16px &quot;Press Start 2P&quot;, monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE: ${score}`, 10, 25);
  }
  
  const gameLoop = useCallback(gameLoopFunction, [gridSize, generateFood, handleGameOver, score, gameLoopFunction]);

  const togglePause = useCallback(() => {
    if (gameOver || !isGameStarted) return;
    
    setIsPaused(prev => {
      if (!prev) {
        if (gameLoopRef.current) {
          clearInterval(gameLoopRef.current);
          gameLoopRef.current = null;
        }
      } else {
        gameLoopRef.current = setInterval(gameLoop, speedRef.current);
      }
      return !prev;
    });
  }, [gameOver, isGameStarted, gameLoop]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameOver) return;
    
    switch (e.key) {
      case 'ArrowUp':
        if (directionRef.current !== 'DOWN') {
          directionRef.current = 'UP';
        }
        break;
      case 'ArrowDown':
        if (directionRef.current !== 'UP') {
          directionRef.current = 'DOWN';
        }
        break;
      case 'ArrowLeft':
        if (directionRef.current !== 'RIGHT') {
          directionRef.current = 'LEFT';
        }
        break;
      case 'ArrowRight':
        if (directionRef.current !== 'LEFT') {
          directionRef.current = 'RIGHT';
        }
        break;
      case ' ':
        togglePause();
        break;
      default:
        break;
    }
  }, [gameOver, togglePause]);

  const initGame = useCallback(() => {
    snakeRef.current = [{ x: 5, y: 5 }];
    foodRef.current = generateFood();
    directionRef.current = 'RIGHT';
    speedRef.current = initialSpeed;
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setIsGameStarted(true);
    setShowNameInput(false);
    
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
    
    gameLoopRef.current = setInterval(gameLoop, speedRef.current);
  }, [generateFood, initialSpeed, gameLoop]);

  const handleSubmitScore = async () => {
    if (!playerName.trim()) return;
    
    try {
      await submitHighScore({
        playerName: playerName,
        score: finalScoreRef.current,
        game: 'snake'
      });
      
      setShowNameInput(false);
    } catch (error) {
      console.error('Failed to submit score:', error);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [handleKeyDown]);

  const handleTouchControl = (direction: Direction) => {
    if (gameOver || isPaused) return;
    
    switch (direction) {
      case 'UP':
        if (directionRef.current !== 'DOWN') {
          directionRef.current = 'UP';
        }
        break;
      case 'DOWN':
        if (directionRef.current !== 'UP') {
          directionRef.current = 'DOWN';
        }
        break;
      case 'LEFT':
        if (directionRef.current !== 'RIGHT') {
          directionRef.current = 'LEFT';
        }
        break;
      case 'RIGHT':
        if (directionRef.current !== 'LEFT') {
          directionRef.current = 'RIGHT';
        }
        break;
    }
  };

  return (
    <div className="retro-card p-6 crt-effect max-w-xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-retroGreen mb-2">SNAKE</h2>
        <div className="flex justify-between">
          <p className="font-retro text-retroYellow">SCORE: {score}</p>
          <p className="font-retro text-retroPink">HIGH SCORE: {highScore}</p>
        </div>
      </div>
      
      <div className="relative border-4 border-white mb-4">
        <canvas 
          ref={canvasRef} 
          width={gridSize * cellSize} 
          height={gridSize * cellSize}
          className="bg-base-100"
        />
        
        {!isGameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="text-center">
              <h3 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-retroPink mb-4">SNAKE</h3>
              <p className="font-retro text-white mb-6">Use arrow keys to move</p>
              <button 
                onClick={initGame}
                className="retro-button"
              >
                START GAME
              </button>
            </div>
          </div>
        )}
        
        {isPaused && isGameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <h3 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-retroYellow">PAUSED</h3>
          </div>
        )}
        
        {showNameInput && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-neutral p-6 border-2 border-retroPink max-w-[80%]">
              <h3 className="text-xl font-[&quot;Press_Start_2P&quot;] text-retroYellow mb-4">NEW HIGH SCORE!</h3>
              <p className="font-retro mb-4 text-white">Your score: {finalScoreRef.current}</p>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="ENTER YOUR NAME"
                maxLength={15}
                className="retro-input w-full mb-4"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSubmitScore}
                  className="retro-button bg-retroGreen flex-1"
                >
                  SAVE
                </button>
                <button
                  onClick={() => setShowNameInput(false)}
                  className="retro-button bg-retroPurple flex-1"
                >
                  SKIP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={() => isGameStarted ? togglePause() : initGame()}
          className="retro-button"
        >
          {!isGameStarted ? 'START' : isPaused ? 'RESUME' : 'PAUSE'}
        </button>
        
        {(gameOver || isPaused) && (
          <button 
            onClick={initGame}
            className="retro-button bg-retroPink"
          >
            RESTART
          </button>
        )}
      </div>
      
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
          <div></div>
          <button 
            className="retro-button p-2"
            onClick={() => handleTouchControl('UP')}
          >
            ↑
          </button>
          <div></div>
          
          <button 
            className="retro-button p-2"
            onClick={() => handleTouchControl('LEFT')}
          >
            ←
          </button>
          <div></div>
          <button 
            className="retro-button p-2"
            onClick={() => handleTouchControl('RIGHT')}
          >
            →
          </button>
          
          <div></div>
          <button 
            className="retro-button p-2"
            onClick={() => handleTouchControl('DOWN')}
          >
            ↓
          </button>
          <div></div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="font-retro text-gray-400 text-sm">
          Use arrow keys to move. Press spacebar to pause.
        </p>
      </div>
    </div>
  );
} 
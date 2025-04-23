"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Arcade() {
  return (
    <main className="min-h-screen bg-neutral text-white font-retro">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl text-center mb-8 text-retroPink">
          RETRO ARCADE
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Snake Game */}
          <Link href="/arcade/snake" className="retro-card group">
            <div className="aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🐍</span>
            </div>
            <h2 className="text-2xl text-retroGreen mb-2">SNAKE</h2>
            <p className="text-gray-400">Classic snake game with retro vibes</p>
          </Link>

          {/* Tetris Game */}
          <Link href="/arcade/tetris" className="retro-card group">
            <div className="aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">📦</span>
            </div>
            <h2 className="text-2xl text-retroBlue mb-2">TETRIS</h2>
            <p className="text-gray-400">Stack blocks and clear lines</p>
          </Link>

          {/* Space Invaders */}
          <Link href="/arcade/space-invaders" className="retro-card group">
            <div className="aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">👾</span>
            </div>
            <h2 className="text-2xl text-retroYellow mb-2">SPACE INVADERS</h2>
            <p className="text-gray-400">Defend Earth from alien invasion</p>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
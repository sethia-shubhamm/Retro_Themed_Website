"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TetrisPage() {
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="text-center mb-8">
            <Link href="/arcade" className="inline-block font-retro text-retroPink hover:text-retroYellow mb-4">
              ← BACK TO ARCADE
            </Link>
            <h1 className="text-4xl md:text-5xl font-[&quot;Press_Start_2P&quot;] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroBlue to-retroGreen">
              TETRIS
            </h1>
            <p className="text-xl font-retro max-w-3xl mx-auto">
              Arrange falling tetrominoes to clear lines and score points in this iconic puzzle game.
            </p>
          </div>
          
          <div className="retro-card crt-effect p-12 text-center mb-8">
            <h2 className="text-3xl font-[&quot;Press_Start_2P&quot;] mb-6 text-retroYellow">COMING SOON</h2>
            <p className="text-xl font-retro mb-8">
              We&apos;re working hard to bring you the classic Tetris experience. Check back soon!
            </p>
            <div className="w-24 h-24 bg-retroBlue border-2 border-white mx-auto mb-8"></div>
            <Link href="/arcade" className="retro-button inline-block">
              EXPLORE OTHER GAMES
            </Link>
          </div>
          
          <div className="retro-card p-6">
            <h3 className="text-xl font-[&quot;Press_Start_2P&quot;] mb-4 text-retroPink">HOW TO PLAY</h3>
            <ul className="font-retro space-y-2 mb-4">
              <li><span className="text-retroGreen">→</span> Rotate pieces with up arrow key</li>
              <li><span className="text-retroGreen">→</span> Move with left/right arrow keys</li>
              <li><span className="text-retroGreen">→</span> Speed up drop with down arrow key</li>
              <li><span className="text-retroGreen">→</span> Hard drop with spacebar</li>
              <li><span className="text-retroGreen">→</span> Clear lines to score points</li>
            </ul>
            <p className="font-retro">Coming soon to our retro arcade collection!</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SpaceInvadersPage() {
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="text-center mb-8">
            <Link href="/arcade" className="inline-block font-retro text-retroPink hover:text-retroYellow mb-4">
              ← BACK TO ARCADE
            </Link>
            <h1 className="text-4xl md:text-5xl font-['Press_Start_2P'] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroPurple to-retroPink">
              SPACE INVADERS
            </h1>
            <p className="text-xl font-retro max-w-3xl mx-auto">
              Defend Earth from alien invaders in this arcade classic. Shoot them before they reach you!
            </p>
          </div>
          
          <div className="retro-card crt-effect p-12 text-center mb-8">
            <h2 className="text-3xl font-['Press_Start_2P'] mb-6 text-retroYellow">COMING SOON</h2>
            <p className="text-xl font-retro mb-8">
              Our alien invasion is being prepared. The mothership will arrive soon!
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-8 h-8 bg-retroPurple border-2 border-white"></div>
              <div className="w-8 h-8 bg-retroPurple border-2 border-white"></div>
              <div className="w-8 h-8 bg-retroPurple border-2 border-white"></div>
            </div>
            <Link href="/arcade" className="retro-button inline-block">
              EXPLORE OTHER GAMES
            </Link>
          </div>
          
          <div className="retro-card p-6">
            <h3 className="text-xl font-['Press_Start_2P'] mb-4 text-retroPink">HOW TO PLAY</h3>
            <ul className="font-retro space-y-2 mb-4">
              <li><span className="text-retroGreen">→</span> Move with left/right arrow keys</li>
              <li><span className="text-retroGreen">→</span> Fire with spacebar</li>
              <li><span className="text-retroGreen">→</span> Destroy all aliens before they reach you</li>
              <li><span className="text-retroGreen">→</span> Use the shields for protection</li>
              <li><span className="text-retroGreen">→</span> Watch out for the mothership for bonus points</li>
            </ul>
            <p className="font-retro">Coming soon to our retro arcade collection!</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
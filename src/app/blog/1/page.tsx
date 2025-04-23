"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost1() {
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="mb-8">
            <Link href="/blog" className="inline-block font-retro text-retroPink hover:text-retroYellow mb-4">
              ← BACK TO BLOG
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-['Press_Start_2P'] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroPink to-retroBlue">
              THE GOLDEN AGE OF ARCADE GAMING
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-retroPurple rounded-full border-2 border-white mr-2"></div>
              <span className="font-retro text-gray-300">By RetroWave Admin</span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="font-retro text-gray-300">June 15, 2023</span>
            </div>
            
            <div className="aspect-video w-full bg-retroPurple bg-opacity-20 border-2 border-white mb-8 flex items-center justify-center">
              <div className="text-2xl font-['Press_Start_2P'] text-retroPink">FEATURED IMAGE</div>
            </div>
            
            <div className="retro-card p-8 mb-8">
              <div className="font-retro text-lg space-y-6">
                <p>
                  The late 1970s and early 1980s marked what many consider the golden age of arcade gaming. This era saw the birth of iconic titles like Space Invaders (1978), Pac-Man (1980), and Donkey Kong (1981) that would forever change the landscape of interactive entertainment.
                </p>
                
                <p>
                  Arcades became social hubs where players would gather to test their skills and compete for high scores. The distinctive sounds of arcade cabinets, with their beeps, boops, and electronic melodies, created an atmosphere unlike anything before it.
                </p>
                
                <h2 className="text-2xl font-['Press_Start_2P'] text-retroYellow mt-8 mb-4">
                  THE RISE OF HOME CONSOLES
                </h2>
                
                <p>
                  As technology advanced, the experience of arcade gaming began to make its way into homes. The Atari 2600, released in 1977, allowed families to enjoy simplified versions of arcade hits from the comfort of their living rooms.
                </p>
                
                <p>
                  The transition wasn&apos;t perfect - early home consoles couldn&apos;t match the processing power of their arcade counterparts. Games were often simplified, with reduced graphics and sound. But the convenience of playing at home without quarters began the slow decline of the arcade era.
                </p>
                
                <h2 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-retroYellow mt-8 mb-4">
                  ENDURING LEGACY
                </h2>
                
                <p>
                  While arcades no longer dominate the gaming landscape, their influence persists. Modern game designers continue to draw inspiration from the elegant simplicity and instant accessibility of classic arcade titles.
                </p>
                
                <p>
                  The aesthetic of this era - with its pixel art, chiptune music, and neon colors - has become a timeless style that evokes nostalgia even in those too young to have experienced the original arcade boom.
                </p>
                
                <p>
                  Our retro arcade project aims to capture that magic, bringing these classic experiences to a new generation while honoring the groundbreaking innovation of early game designers.
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Link href="/blog" className="retro-button bg-retroBlue hover:bg-retroGreen">
                MORE ARTICLES
              </Link>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white bg-retroPurple">
                  <span className="font-retro">FB</span>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white bg-retroPurple">
                  <span className="font-retro">TW</span>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white bg-retroPurple">
                  <span className="font-retro">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
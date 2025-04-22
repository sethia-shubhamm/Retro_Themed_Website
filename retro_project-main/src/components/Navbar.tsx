"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral text-white py-4">
      <div className="retro-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-retro text-retroYellow hover:text-retroPink">
            RETRO WAVE
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/arcade" className="font-retro hover:text-retroYellow">
              ARCADE
            </Link>
            <Link href="/blog" className="font-retro hover:text-retroYellow">
              BLOG
            </Link>
            <Link href="/high-scores" className="font-retro hover:text-retroYellow">
              HIGH SCORES
            </Link>
            <Link href="/about" className="font-retro hover:text-retroYellow">
              ABOUT
            </Link>
          </div>


          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

\
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/arcade" className="block font-retro hover:text-retroYellow">
              ARCADE
            </Link>
            <Link href="/blog" className="block font-retro hover:text-retroYellow">
              BLOG
            </Link>
            <Link href="/high-scores" className="block font-retro hover:text-retroYellow">
              HIGH SCORES
            </Link>
            <Link href="/about" className="block font-retro hover:text-retroYellow">
              ABOUT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 
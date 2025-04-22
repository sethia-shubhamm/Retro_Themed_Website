"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost2() {
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="mb-8">
            <Link href="/blog" className="inline-block font-retro text-retroPink hover:text-retroYellow mb-4">
              ← BACK TO BLOG
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-['Press_Start_2P'] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroGreen to-retroBlue">
              THE ART OF PIXEL DESIGN
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-retroPurple rounded-full border-2 border-white mr-2"></div>
              <span className="font-retro text-gray-300">By RetroWave Admin</span>
              <span className="mx-4 text-gray-400">|</span>
              <span className="font-retro text-gray-300">July 28, 2023</span>
            </div>
            
            <div className="aspect-video w-full bg-retroBlue bg-opacity-20 border-2 border-white mb-8 flex items-center justify-center">
              <div className="text-2xl font-['Press_Start_2P'] text-retroPink">FEATURED IMAGE</div>
            </div>
            
            <div className="retro-card p-8 mb-8">
              <div className="font-retro text-lg space-y-6">
                <p>
                  Pixel art emerged from technical limitations of early computer systems but has evolved into a distinct and beloved art form. Game developers in the 1970s and 80s had to work with extremely limited processing power and memory, forcing them to create recognizable characters and environments using just a handful of pixels.
                </p>
                
                <p>
                  This constraint bred creativity. Artists learned to suggest detail rather than render it explicitly, using clever techniques to create the illusion of more complexity than was actually present.
                </p>
                
                <h2 className="text-2xl font-['Press_Start_2P'] text-retroYellow mt-8 mb-4">
                  TECHNIQUES AND PRINCIPLES
                </h2>
                
                <p>
                  Good pixel art follows specific principles that differentiate it from simply low-resolution images. Skilled pixel artists understand concepts like:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong className="text-retroPink">Limited palette:</strong> Using a restricted color set forces creative solutions and gives a cohesive look.
                  </li>
                  <li>
                    <strong className="text-retroPink">Careful dithering:</strong> Patterns of alternating pixels create the illusion of additional colors or shading.
                  </li>
                  <li>
                    <strong className="text-retroPink">Clean lines:</strong> Avoiding &quot;jaggies&quot; where possible by strategic placement of pixels.
                  </li>
                  <li>
                    <strong className="text-retroPink">Symbolic representation:</strong> Suggesting features rather than drawing them directly.
                  </li>
                </ul>
                
                <h2 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-retroYellow mt-8 mb-4">
                  MODERN REVIVAL
                </h2>
                
                <p>
                  Despite modern technology allowing for photorealistic 3D rendering, pixel art has experienced a remarkable revival. Games like Stardew Valley, Celeste, and Shovel Knight deliberately embrace the pixel aesthetic not out of technical necessity, but artistic choice.
                </p>
                
                <p>
                  This resurgence speaks to pixel art&apos;s unique charm. The style carries inherent nostalgia while also offering a clear, readable visual language that can be both beautiful and functional. For many players, the deliberate abstraction of pixel art leaves just enough to the imagination to create a more engaging experience.
                </p>
                
                <p>
                  In our retro-themed projects, we celebrate this distinctive art form that has transcended its humble beginnings to become a timeless approach to game aesthetics.
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
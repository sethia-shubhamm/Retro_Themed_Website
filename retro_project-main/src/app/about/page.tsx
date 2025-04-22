import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-['Press_Start_2P'] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroPink to-retroBlue">
              ABOUT US
            </h1>
            <p className="text-xl font-retro max-w-3xl mx-auto">
              Welcome to Cyber80s, where we celebrate the nostalgic vibes of the 80s and 90s era through games, articles, and retro aesthetics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="retro-card p-6">
              <h2 className="text-2xl font-['Press_Start_2P'] mb-4 text-retroPink">OUR MISSION</h2>
              <p className="font-retro mb-4 text-lg">
                Cyber80s is dedicated to preserving and celebrating the iconic aesthetics, games, and culture of the 80s and 90s. 
                We aim to create a nostalgic haven for those who lived through this golden era and introduce these timeless classics to a new generation.
              </p>
              <p className="font-retro text-lg">
                Through our collection of arcade games, blog articles, and retro-themed content, 
                we hope to transport you back to a time of pixel art, neon lights, and synthwave beats.
              </p>
            </div>
            
            <div className="retro-card p-6">
              <h2 className="text-2xl font-['Press_Start_2P'] mb-4 text-retroBlue">RETRO ARCADE</h2>
              <p className="font-retro mb-4 text-lg">
                Our arcade features faithful recreations of classic games like Snake, Tetris, Space Invaders, and more. 
                All games are built with modern web technologies while maintaining the charm and gameplay of the originals.
              </p>
              <p className="font-retro mb-6 text-lg">
                Challenge yourself to beat high scores and compete with other retro enthusiasts around the world!
              </p>
              <Link href="/arcade" className="retro-button inline-block">
                VISIT ARCADE
              </Link>
            </div>
          </div>
          
          <div className="retro-card p-6 mb-16">
            <h2 className="text-2xl font-['Press_Start_2P'] mb-4 text-retroGreen text-center">OUR TEAM</h2>
            <p className="font-retro text-center mb-8 text-lg">
              Cyber80s was created by a passionate team of designers, developers, and retro enthusiasts who share a love for all things vintage and nostalgic.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-retroPurple rounded-full flex items-center justify-center">
                  <span className="text-3xl font-retro">👾</span>
                </div>
                <h3 className="font-['Press_Start_2P'] text-retroPink mb-2">Shubham</h3>
                <p className="font-retro">Lead Game Developer</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-retroGreen rounded-full flex items-center justify-center">
                  <span className="text-3xl font-retro">📼</span>
                </div>
                <h3 className="font-['Press_Start_2P'] text-retroGreen mb-2">Shubham</h3>
                <p className="font-retro">Content Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
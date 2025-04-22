import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <section className="relative overflow-hidden py-20 md:py-40 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-[&quot;Press_Start_2P&quot;] mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-retroPink to-retroBlue">
              WELCOME TO<br />THE RETRO ZONE
            </h1>
            <p className="text-xl md:text-2xl font-retro mb-8 max-w-3xl mx-auto">
              Experience the nostalgic vibes of the 80s and 90s. Play classic games, read retro-themed blogs, and immerse yourself in synthwave culture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/arcade" className="retro-button text-xl">
                PLAY GAMES
              </Link>
              <Link href="/blog" className="retro-button text-xl bg-retroBlue hover:bg-retroGreen">
                READ BLOG
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </section>
      
      <section className="py-16 bg-base-100">
        <div className="retro-container">
          <h2 className="text-3xl font-[&quot;Press_Start_2P&quot;] mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-retroGreen to-retroBlue">
            FEATURED CONTENT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="retro-card crt-effect">
              <div className="aspect-video relative mb-4 overflow-hidden border-2 border-white">
                <div className="absolute inset-0 bg-retroPurple opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-white">ARCADE</h3>
                </div>
              </div>
              <h3 className="text-xl font-retro mb-2 text-retroPink">CLASSIC GAMES</h3>
              <p className="font-retro mb-4">Play our collection of retro-inspired games including Snake, Tetris, and Space Invaders.</p>
              <Link href="/arcade" className="inline-block font-retro text-retroYellow hover:text-retroPink">
                PLAY NOW →
              </Link>
            </div>
            
            <div className="retro-card crt-effect">
              <div className="aspect-video relative mb-4 overflow-hidden border-2 border-white">
                <div className="absolute inset-0 bg-retroBlue opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-white">BLOG</h3>
                </div>
              </div>
              <h3 className="text-xl font-retro mb-2 text-retroBlue">RETRO ARTICLES</h3>
              <p className="font-retro mb-4">Dive into articles about 80s and 90s culture, technology, music, and more.</p>
              <Link href="/blog" className="inline-block font-retro text-retroYellow hover:text-retroPink">
                READ ARTICLES →
              </Link>
            </div>
            
            <div className="retro-card crt-effect">
              <div className="aspect-video relative mb-4 overflow-hidden border-2 border-white">
                <div className="absolute inset-0 bg-retroGreen opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-[&quot;Press_Start_2P&quot;] text-white">HIGH SCORES</h3>
                </div>
              </div>
              <h3 className="text-xl font-retro mb-2 text-retroGreen">LEADERBOARDS</h3>
              <p className="font-retro mb-4">Check out the top players on our arcade games and try to beat their high scores.</p>
              <Link href="/high-scores" className="inline-block font-retro text-retroYellow hover:text-retroPink">
                VIEW SCORES →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral">
        <div className="retro-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-[&quot;Press_Start_2P&quot;] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroPink to-retroYellow">
                JOIN OUR<br />CYBER COMMUNITY
              </h2>
              <p className="text-xl font-retro mb-6">
                Create an account to track high scores, participate in tournaments, and connect with fellow retro gamers.
              </p>
              <Link href="/register" className="retro-button text-xl inline-block">
                SIGN UP NOW
              </Link>
            </div>
            
            <div className="md:w-1/2 retro-card crt-effect">
              <div className="p-6">
                <h3 className="text-xl font-[&quot;Press_Start_2P&quot;] mb-4 text-retroBlue">GAME ALERTS</h3>
                <p className="font-retro mb-4">Get notified when we add new games or host special tournaments.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="retro-input w-full"
                  />
                  <button 
                    type="submit"
                    className="retro-button w-full text-lg"
                  >
                    POWER UP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

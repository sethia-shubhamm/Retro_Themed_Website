"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "THE GOLDEN AGE OF ARCADE GAMES",
      excerpt: "Explore the history and impact of classic arcade games that defined an era.",
      category: "HISTORY",
      date: "March 15, 2024",
      author: "DHRUV"
    },
    {
      id: 2,
      title: "RETRO GAMING: WHY WE LOVE IT",
      excerpt: "Discover why retro gaming continues to captivate players of all ages.",
      category: "CULTURE",
      date: "March 10, 2024",
      author: "VASU"
    },
    {
      id: 3,
      title: "THE EVOLUTION OF GAME CONTROLLERS",
      excerpt: "From simple joysticks to modern controllers, see how gaming input has evolved.",
      category: "TECHNOLOGY",
      date: "March 5, 2024",
      author: "TUSHAR"
    }
  ];

  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-['Press_Start_2P'] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-retroPink to-retroBlue">
              RETRO GAMING BLOG
            </h1>
            <p className="text-xl font-retro max-w-2xl mx-auto">
              Dive into the world of retro gaming with our latest articles and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="retro-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video relative mb-6 overflow-hidden border-2 border-white bg-retroPurple">
                  <div className="opacity-60 absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-['Press_Start_2P'] text-white">{post.category}</div>
                  </div>
                </div>
                <h2 className="text-xl font-['Press_Start_2P'] mb-4 text-retroYellow">
                  {post.title}
                </h2>
                <p className="font-retro mb-4 text-gray-400">
                  {post.excerpt}
                </p>
                <div className="font-retro text-sm text-gray-500">
                  By {post.author} | {post.date}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 pt-6 flex justify-center">
            <div className="retro-card p-6 max-w-xl w-full">
              <h3 className="text-xl font-['Press_Start_2P'] mb-4 text-retroBlue">
                JOIN OUR CYBER NEWSLETTER
              </h3>
              <p className="font-retro mb-4">
                Get exclusive retro content, game updates, and tips delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="retro-input flex-grow"
                />
                <button 
                  type="submit"
                  className="retro-button whitespace-nowrap"
                >
                  JOIN NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
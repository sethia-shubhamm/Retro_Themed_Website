"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);


    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to home
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-gradient-to-b from-neutral to-base-100">
        <div className="retro-container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-[&quot;Press_Start_2P&quot;] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-retroBlue to-retroGreen">
                LOG IN
              </h1>
              <p className="font-retro text-lg">
                Access your account to check high scores and game progress.
              </p>
            </div>
            
            <div className="retro-card crt-effect">
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {error && (
                  <div className="bg-retroPink bg-opacity-20 border border-retroPink p-3 mb-4 font-retro">
                    {error}
                  </div>
                )}
                
                <div>
                  <label className="block font-retro text-retroYellow mb-2">
                    EMAIL
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="retro-input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-retro text-retroYellow mb-2">
                    PASSWORD
                  </label>
                  <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="retro-input w-full"
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="mr-2 border-2 border-white bg-transparent"
                  />
                  <label htmlFor="remember" className="font-retro text-white">
                    Remember me
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="retro-button w-full mt-6"
                  disabled={loading}
                >
                  {loading ? 'LOGGING IN...' : 'LOG IN'}
                </button>
                
                <div className="text-center mt-4">
                  <p className="font-retro mb-2">
                    <Link href="/forgot-password" className="text-retroBlue hover:text-retroPink">
                      Forgot password?
                    </Link>
                  </p>
                  <p className="font-retro">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-retroBlue hover:text-retroPink">
                      REGISTER
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/" className="font-retro text-retroPink hover:text-retroYellow">
                ← BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
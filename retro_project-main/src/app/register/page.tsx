"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate form
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      
     
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
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
              <h1 className="text-3xl font-[&quot;Press_Start_2P&quot;] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-retroPink to-retroBlue">
                JOIN THE CREW
              </h1>
              <p className="font-retro text-lg">
                Create your account to save high scores and join our retro community.
              </p>
            </div>
            
            <div className="retro-card crt-effect">
              {success ? (
                <div className="text-center p-6">
                  <div className="text-retroGreen text-6xl mb-4">✓</div>
                  <h2 className="font-[&quot;Press_Start_2P&quot;] text-retroGreen mb-4">REGISTRATION COMPLETE!</h2>
                  <p className="font-retro mb-4">Welcome to Retro Wave! Redirecting you to the homepage...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {error && (
                    <div className="bg-retroPink bg-opacity-20 border border-retroPink p-3 mb-4 font-retro">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label className="block font-retro text-retroYellow mb-2">
                      USERNAME
                    </label>
                    <input 
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="retro-input w-full"
                      required
                    />
                  </div>
                  
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
                  
                  <div>
                    <label className="block font-retro text-retroYellow mb-2">
                      CONFIRM PASSWORD
                    </label>
                    <input 
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="retro-input w-full"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="retro-button w-full mt-6"
                    disabled={loading}
                  >
                    {loading ? 'PROCESSING...' : 'REGISTER'}
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="font-retro">
                      Already have an account?{' '}
                      <Link href="/login" className="text-retroBlue hover:text-retroPink">
                        LOG IN
                      </Link>
                    </p>
                  </div>
                </form>
              )}
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
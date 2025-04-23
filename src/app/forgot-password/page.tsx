"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate email
    if (!email) {
      setError('Please enter your email address');
      setLoading(false);
      return;
    }

    try {
     
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
    } catch (error) {
      console.error('Password reset error:', error);
      setError('Failed to send reset link. Please try again.');
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
              <h1 className="text-3xl font-['Press_Start_2P'] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-retroYellow to-retroPink">
                FORGOT PASSWORD
              </h1>
              <p className="font-retro text-lg">
                Enter your email and we&apos;ll send you a link to reset your password.
              </p>
            </div>
            
            <div className="retro-card crt-effect">
              {success ? (
                <div className="p-6 text-center">
                  <div className="text-retroGreen text-6xl mb-4">✓</div>
                  <h2 className="font-[&quot;Press_Start_2P&quot;] text-retroGreen mb-4">EMAIL SENT!</h2>
                  <p className="font-retro mb-6">
                    We&apos;ve sent you a password reset link. Please check your email and follow the instructions.
                  </p>
                  <Link href="/login" className="retro-button inline-block">
                    BACK TO LOGIN
                  </Link>
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
                      EMAIL
                    </label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="retro-input w-full"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="retro-button w-full mt-6"
                    disabled={loading}
                  >
                    {loading ? 'SENDING...' : 'RESET PASSWORD'}
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="font-retro">
                      <Link href="/login" className="text-retroBlue hover:text-retroPink">
                        ← Back to login
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
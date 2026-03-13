import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, we'd handle auth here. For this assignment, we just log in.
        onLogin({ username, isSignUp });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3d2b1f] via-[#2a1b12] to-[#1a0f0a] px-4 py-12 relative overflow-hidden font-sans">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#b8860b]/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 mix-blend-screen pointer-events-none"></div>

            <div className="max-w-md w-full relative z-10">
                {/* Artistic Header */}
                <div className="text-center mb-12 animate-fade-in-down">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        <svg
                            className="w-8 h-8 text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#8d6e63] drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                        Frame <span className="font-medium font-serif">Flow</span>
                    </h2>

                    {/* Catchy Lines */}
                    <div className="space-y-2 mt-6">
                        <p className="text-[#f3e5ab] font-light text-lg tracking-wide italic">
                            Curated Excellence.
                        </p>
                        <p className="text-[#a68a56] text-xs uppercase tracking-[0.3em] font-medium opacity-80">
                            Enter the Gallery
                        </p>
                        <p className="text-[#d4af37] font-light text-sm mt-1 italic drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]">
                            "Where every frame tells a golden story"
                        </p>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-[#1a0f0a]/60 backdrop-blur-2xl p-8 sm:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[#d4af37]/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="flex mb-10 bg-[#0a0502]/60 p-1.5 rounded-2xl border border-[#d4af37]/10 relative z-10 shadow-inner">
                        <button
                            type="button"
                            onClick={() => setIsSignUp(false)}
                            className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 tracking-[0.15em] uppercase ${!isSignUp ? 'bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-[#a68a56] hover:text-[#f3e5ab]'
                                }`}
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsSignUp(true)}
                            className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 tracking-[0.15em] uppercase ${isSignUp ? 'bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-[#a68a56] hover:text-[#f3e5ab]'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="group">
                            <label className="block text-[#a68a56] text-[10px] font-medium mb-2 uppercase tracking-[0.2em] ml-1 transition-colors group-focus-within:text-[#d4af37]">
                                Username
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-[#0a0502]/60 border border-[#d4af37]/20 rounded-xl px-4 py-3.5 text-[#f3e5ab] placeholder-[#5d4037] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/60 focus:border-[#d4af37]/60 transition-all font-light text-sm shadow-inner"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[#a68a56] text-[10px] font-medium mb-2 uppercase tracking-[0.2em] ml-1 transition-colors group-focus-within:text-[#d4af37]">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#0a0502]/60 border border-[#d4af37]/20 rounded-xl px-4 py-3.5 text-[#f3e5ab] placeholder-[#5d4037] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/60 focus:border-[#d4af37]/60 transition-all font-light text-sm shadow-inner"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-8 py-4 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] bg-[length:200%_auto] hover:bg-right text-black font-semibold rounded-xl uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98]"
                        >
                            {isSignUp ? 'Create Account' : 'Authenticate'}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-12 text-[#5d4037] text-[10px] uppercase tracking-[0.4em]">
                    Internal Use Only
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

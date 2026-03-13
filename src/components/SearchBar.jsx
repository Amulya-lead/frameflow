import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="max-w-2xl mx-auto mb-14 px-4">
            <div className="relative group flex items-center justify-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search collection by author..."
                    className="w-full pl-14 pr-12 py-4 text-[#f3e5ab] bg-[#1a0f0a]/60 border border-[#d4af37]/20 rounded-full focus:outline-none focus:ring-1 focus:ring-[#d4af37]/60 focus:bg-[#2d1e16]/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl placeholder-[#a68a56]/50 transition-all font-light text-sm"
                />
                {/* Search icon */}
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-[#d4af37]/50 group-focus-within:text-[#d4af37] group-focus-within:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                {/* Clear ✕ button — shown only when user has typed */}
                {searchTerm && (
                    <button
                        type="button"
                        onClick={() => onSearchChange('')}
                        className="absolute inset-y-0 right-5 flex items-center text-[#a68a56] hover:text-[#d4af37] transition-colors duration-200 cursor-pointer"
                        aria-label="Clear search"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

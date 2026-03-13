import React from 'react';

const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
    return (
        <div className={`relative bg-[#1a0f0a] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:-translate-y-2 group ${isFavourite
                ? 'border-2 border-[#d4af37]/70 shadow-[0_10px_30px_rgba(212,175,55,0.2)] ring-1 ring-[#d4af37]/30'
                : 'border border-[#d4af37]/10 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/30'
            }`}>
            <div className="aspect-square bg-[#0a0502] overflow-hidden">
                <img
                    src={photo.download_url}
                    alt={photo.author}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    loading="lazy"
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-[#0a0502] via-[#0a0502]/80 to-transparent pt-12">
                <span className="text-[#f3e5ab] font-serif text-sm tracking-wide truncate mr-2 drop-shadow-md" title={photo.author}>
                    {photo.author}
                </span>
                <button
                    type="button"
                    onClick={() => onToggleFavourite(photo)}
                    className={`focus:outline-none transition-all duration-300 transform active:scale-75 ${isFavourite
                        ? 'text-[#d4af37] hover:text-[#f3e5ab] drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]'
                        : 'text-[#a68a56]/60 hover:text-[#d4af37] drop-shadow-md'
                        }`}
                    aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transition-all duration-300 ${isFavourite ? 'fill-current scale-110' : 'fill-none stroke-current'}`}
                        viewBox="0 0 24 24"
                        strokeWidth={isFavourite ? 0 : 2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default React.memo(PhotoCard);

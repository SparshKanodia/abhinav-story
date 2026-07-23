'use client';

import React from 'react';

interface HeroSectionProps {
  onReadStories: () => void;
  onMeetAuthor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReadStories,
  onMeetAuthor,
}) => {
  return (
    <header className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-8 py-12 sm:py-16 bg-gradient-to-b from-primary-fixed to-surface rounded-3xl my-3 sm:my-4 mx-2 sm:mx-3 md:mx-6 border border-primary/10">
      <div className="absolute inset-0 opacity-20 doodle-bg pointer-events-none" />

      {/* Floating Element 1: Castle - hidden below lg to prevent overlap */}
      <div className="hidden lg:block absolute top-16 left-10 w-44 h-44 float colored-pencil-border rounded-full overflow-hidden z-10 transform -rotate-6 shadow-md pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRU_1F_jg-TC6tceBLXuPEHbCP6vPgX95rhah5dFAU1PnRKjUkHZWqzoUseQTq9QPrd912D2Z8hgM9_d8E1qs5qSG8bniGNWz9xtQjFekadUrxdhBKUtNotmQJH6w3wGpiBiwP9SN52i63wKYM9yEz4ZHyos9OwwtqujXEW3-IyBqgUBT2-aaLDl8cX6LYyBlXrqwWbEtI4rrRvimjmY6saUKUsqnbEQjG-gB9KQSOwJIXSO3EIulb91hNZPVbixOi0M8oBNigAwI"
          alt="A watercolor castle on a hill under a starry sky"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Floating Element 2: Ghost - hidden below lg */}
      <div className="hidden lg:block absolute bottom-20 right-16 w-36 h-36 float-delayed colored-pencil-border rounded-full overflow-hidden z-10 transform rotate-12 shadow-md pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW3nQAH5-Cwd_WjieYa_sGotCTkDk6XPTpSjo4gRlDcLakPZCBGskImOMAFjENvktdgLL3CbzrzWkj01_Ormo-3tRM5fmb__xeM5n-pFCITXOHC9W2uPgiyBHDTeQ_BDsy26Is1ZTv10LKggZt8bHl_cVIeVQKD40iRJc7JFtJpe3ffofU4R-yXg0mlMAo-QlUlB9LntJhX0iYGntTHxCgSaijVjM58menanrTpATZTlxDHP9lZRUbRpIUDpAWyfhYsXa9eGSmfdk"
          alt="A cute, friendly watercolor ghost floating"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Floating Element 3: Magical Wand SVG - hidden on small screens */}
      <div className="hidden sm:block absolute top-12 right-8 w-20 md:w-28 lg:w-36 h-20 md:h-28 lg:h-36 z-10 float opacity-80 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M40 160 L140 60" stroke="#8B4513" strokeLinecap="round" strokeWidth="8" />
          <circle cx="145" cy="55" fill="#FFD700" r="12">
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;0.5;1" />
          </circle>
          <path d="M145 35 L145 45 M135 55 L125 55 M155 55 L165 55 M145 65 L145 75" stroke="#FFD700" strokeLinecap="round" strokeWidth="3" />
          <circle cx="170" cy="30" fill="#FFD700" r="4" />
          <circle cx="120" cy="80" fill="#FFD700" r="3" />
          <circle cx="150" cy="100" fill="#FFD700" r="2" />
        </svg>
      </div>

      {/* Floating Element 4: Red Car - hidden below lg */}
      <div className="hidden lg:block absolute bottom-12 left-16 w-44 h-44 float-delayed colored-pencil-border rounded-full overflow-hidden z-10 transform -rotate-12 shadow-md pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7sQABOc8GNaN96MVovQCakQrDH8O36UPJ62IH1tyJ-C5jGIt25jcBMloV6AFZ65-Mn2Lc8eRRSRd8e_SZrF2H2vWrMCkQh8h2QVxImyex1ckBRpbtT33b4bBYv59ty3lzrFZ7h56qyETg9dwWmIYPGK19Nzwv3mpM9yT0t_atHM5tflLhJbVHSI1z4ywf2vKiKVCK2bA1i06yDjBi_63q5Z28dqVDIkvbzDvdTz9JYehB8VYQ031AiHlyEOapeiN1bA7VlyyXqhM"
          alt="A red car driving on a winding road at night"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Central Cloud Card */}
      <div className="relative z-20 text-center max-w-2xl w-full mx-auto bg-surface/90 p-6 sm:p-8 md:p-12 rounded-[40px] md:rounded-[50px] colored-pencil-border shadow-[8px_8px_0px_0px_rgba(112,93,0,0.15)] backdrop-blur-md paper-edge">
        <h1 className="font-headline-xl text-primary mb-2 transform -rotate-2">
          A Mix of Stories
        </h1>
        <p className="font-headline-lg text-tertiary mb-4 transform rotate-1">
          By Abhinav Mehrotra
        </p>
        <p className="font-body-lg text-on-surface-variant mb-6 sm:mb-8">
          Three magical adventures waiting for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={onReadStories}
            className="bounce-button bg-primary-container text-on-primary-container font-label-md text-base md:text-lg py-4 px-6 sm:px-8 rounded-full colored-pencil-border hover:shadow-lg flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center min-h-[52px]"
          >
            <span className="material-symbols-outlined">menu_book</span>
            Read Stories
          </button>
          <button
            onClick={onMeetAuthor}
            className="bounce-button bg-secondary-container text-on-secondary-container font-label-md text-base md:text-lg py-4 px-6 sm:px-8 rounded-full colored-pencil-border hover:shadow-lg flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center min-h-[52px]"
          >
            <span className="material-symbols-outlined">person</span>
            Meet the Author
          </button>
        </div>

        {/* Decorative sparkles - repositioned to stay inside */}
        <div className="absolute top-2 left-2 sm:-top-4 sm:-left-4 pointer-events-none float opacity-70">
          <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">sparkles</span>
        </div>
        <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:-right-4 pointer-events-none float-delayed opacity-70">
          <span className="material-symbols-outlined text-primary-container text-2xl sm:text-3xl">auto_awesome</span>
        </div>
      </div>
    </header>
  );
};

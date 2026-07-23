'use client';

import React, { useState } from 'react';

interface TopNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'stories', label: 'Stories' },
    { id: 'about', label: 'About' },
    { id: 'characters', label: 'Characters' },
    { id: 'read', label: 'Read Online' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 max-w-7xl mx-auto rounded-full mt-4 mx-4 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-sm border-2 border-primary/20 shadow-[4px_4px_0px_0px_rgba(112,93,0,0.2)]">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => handleItemClick('home')}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW3nQAH5-Cwd_WjieYa_sGotCTkDk6XPTpSjo4gRlDcLakPZCBGskImOMAFjENvktdgLL3CbzrzWkj01_Ormo-3tRM5fmb__xeM5n-pFCITXOHC9W2uPgiyBHDTeQ_BDsy26Is1ZTv10LKggZt8bHl_cVIeVQKD40iRJc7JFtJpe3ffofU4R-yXg0mlMAo-QlUlB9LntJhX0iYGntTHxCgSaijVjM58menanrTpATZTlxDHP9lZRUbRpIUDpAWyfhYsXa9eGSmfdk"
          alt="Ghost Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full colored-pencil-border group-hover:rotate-12 transition-transform duration-300"
        />
        <span className="font-headline-lg text-2xl md:text-3xl text-tertiary dark:text-tertiary-fixed-dim hover:scale-105 transition-transform duration-200">
          A Mix of Stories
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`font-label-md text-label-md transition-all duration-150 hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary p-2 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {mobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 mx-4 bg-surface border-2 border-primary/20 rounded-2xl p-4 shadow-xl md:hidden flex flex-col gap-3 z-50">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left font-label-md py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

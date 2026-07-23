'use client';

import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 w-full max-w-7xl mx-auto mt-2 sm:mt-4 rounded-full bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-sm border-2 border-primary/20 shadow-[4px_4px_0px_0px_rgba(112,93,0,0.2)]"
      aria-label="Main navigation"
    >
      <div
        className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0"
        onClick={() => handleItemClick('home')}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW3nQAH5-Cwd_WjieYa_sGotCTkDk6XPTpSjo4gRlDcLakPZCBGskImOMAFjENvktdgLL3CbzrzWkj01_Ormo-3tRM5fmb__xeM5n-pFCITXOHC9W2uPgiyBHDTeQ_BDsy26Is1ZTv10LKggZt8bHl_cVIeVQKD40iRJc7JFtJpe3ffofU4R-yXg0mlMAo-QlUlB9LntJhX0iYGntTHxCgSaijVjM58menanrTpATZTlxDHP9lZRUbRpIUDpAWyfhYsXa9eGSmfdk"
          alt="Ghost Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full colored-pencil-border group-hover:rotate-12 transition-transform duration-300 shrink-0"
        />
        <span className="font-headline-lg text-xl sm:text-2xl md:text-3xl text-tertiary dark:text-tertiary-fixed-dim hover:scale-105 transition-transform duration-200 truncate">
          A Mix of Stories
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-4 lg:gap-6" role="list">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`font-label-md transition-all duration-150 hover:scale-105 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary p-2 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenuOpen}
      >
        <span className="material-symbols-outlined text-3xl">
          {mobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Dropdown Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute top-full left-0 right-0 mx-2 sm:mx-4 mt-2 bg-surface border-2 border-primary/20 rounded-2xl p-4 shadow-xl md:hidden flex flex-col gap-2 z-50"
            role="dialog"
            aria-label="Navigation menu"
          >
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left font-label-md py-3 px-4 rounded-lg transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-bold'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </nav>
  );
};

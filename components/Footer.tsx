'use client';

import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: Record<string, { title: string; body: string }> = {
    privacy: {
      title: 'Privacy Policy',
      body: 'At A Mix of Stories, we deeply care about safety for children and parents. We do not track personal data, collect cookies without consent, or show external advertisements. Enjoy a safe, whimsical reading environment!',
    },
    terms: {
      title: 'Terms of Service',
      body: 'All stories, original characters, and watercolor illustrations in A Mix of Stories are created by Abhinav Mehrotra. Feel free to enjoy reading them online for personal and family use.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      body: 'Q: How do I read stories on mobile?\nA: You can read right in your browser! Use the font size controls and speech synthesizer to listen along.\n\nQ: Are new stories added?\nA: Yes! New tales and illustrations are published regularly.',
    },
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [activeModal]);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  return (
    <footer className="relative w-full flex flex-col items-center justify-center space-y-4 px-4 md:px-8 bg-surface-container-low dark:bg-surface-container-lowest pt-12 sm:pt-16 pb-8 sm:pb-10 mt-12 sm:mt-16 md:mt-20 border-t border-primary/10">
      {/* Grass SVG Pattern Row */}
      <div className="w-full flex justify-center overflow-hidden opacity-80 mb-2 pointer-events-none select-none">
        <div className="flex gap-2 text-primary/30 flex-wrap justify-center">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-xl sm:text-2xl">
              grass
            </span>
          ))}
        </div>
      </div>

      <div className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-primary z-10 text-center">
        A Mix of Stories
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 z-10">
        <button
          onClick={() => setActiveModal('privacy')}
          className="font-body-md text-on-surface-variant hover:text-secondary hover:translate-y-[-2px] transition-transform cursor-pointer min-h-[44px] flex items-center"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveModal('terms')}
          className="font-body-md text-on-surface-variant hover:text-secondary hover:translate-y-[-2px] transition-transform cursor-pointer min-h-[44px] flex items-center"
        >
          Terms of Service
        </button>
        <button
          onClick={() => setActiveModal('faq')}
          className="font-body-md text-on-surface-variant hover:text-secondary hover:translate-y-[-2px] transition-transform cursor-pointer min-h-[44px] flex items-center"
        >
          FAQ
        </button>
      </div>

      <div className="text-secondary dark:text-secondary-fixed-dim font-body-md z-10">
        &copy; Abhinav Mehrotra. All rights reserved.
      </div>

      {/* Footer Info Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={modalContent[activeModal].title}
        >
          <div className="bg-surface p-5 sm:p-8 max-w-md w-full colored-pencil-border shadow-2xl rounded-3xl paper-edge text-center relative text-on-surface mx-auto max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-surface-container text-tertiary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="font-headline-lg text-2xl sm:text-3xl text-primary mb-3 sm:mb-4 mt-4 sm:mt-0">
              {modalContent[activeModal].title}
            </h3>

            <p className="font-body-md text-on-surface-variant whitespace-pre-line text-left mb-4 sm:mb-6 leading-relaxed">
              {modalContent[activeModal].body}
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className="bounce-button bg-primary text-on-primary font-label-md py-3 px-6 rounded-full colored-pencil-border cursor-pointer min-w-[120px]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

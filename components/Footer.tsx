'use client';

import React, { useState } from 'react';

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

  return (
    <footer className="relative w-full flex flex-col items-center justify-center space-y-4 px-4 md:px-8 bg-surface-container-low dark:bg-surface-container-lowest pt-16 pb-10 mt-20 border-t border-primary/10">
      {/* Grass SVG Pattern Row */}
      <div className="w-full flex justify-center overflow-hidden opacity-80 mb-2 pointer-events-none select-none">
        <div className="flex gap-2 text-primary/30">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-2xl">
              grass
            </span>
          ))}
        </div>
      </div>

      <div className="font-headline-xl text-3xl md:text-4xl text-primary z-10">
        A Mix of Stories
      </div>

      <div className="flex flex-wrap justify-center gap-6 z-10">
        <button
          onClick={() => setActiveModal('privacy')}
          className="font-body-md text-on-surface-variant hover:text-secondary hover:translate-y-[-2px] transition-transform cursor-pointer"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveModal('terms')}
          className="font-body-md text-on-surface-variant hover:text-secondary hover:translate-y-[-2px] transition-transform cursor-pointer"
        >
          Terms of Service
        </button>
        <button
          onClick={() => setActiveModal('faq')}
          className="font-body-md text-on-surface-variant hover:text-secondary hover:translate-y-[-2px] transition-transform cursor-pointer"
        >
          FAQ
        </button>
      </div>

      <div className="text-secondary dark:text-secondary-fixed-dim font-body-md text-sm md:text-base z-10">
        © Abhinav Mehrotra. All rights reserved.
      </div>

      {/* Footer Info Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface p-6 md:p-8 max-w-md w-full colored-pencil-border shadow-2xl rounded-3xl paper-edge text-center relative text-on-surface">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container text-tertiary transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h3 className="font-headline-lg text-3xl text-primary mb-4">
              {modalContent[activeModal].title}
            </h3>

            <p className="font-body-md text-on-surface-variant whitespace-pre-line text-left mb-6 leading-relaxed">
              {modalContent[activeModal].body}
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className="bounce-button bg-primary text-on-primary font-label-md py-3 px-6 rounded-full colored-pencil-border"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

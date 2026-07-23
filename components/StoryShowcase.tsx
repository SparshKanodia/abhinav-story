'use client';

import React from 'react';
import { STORIES, Story } from '@/lib/stories';

interface StoryShowcaseProps {
  onSelectStory: (storyId: string) => void;
}

export const StoryShowcase: React.FC<StoryShowcaseProps> = ({ onSelectStory }) => {
  return (
    <section className="py-16 sm:py-20 px-4 md:px-8 relative" id="stories">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline-xl text-secondary mb-12 sm:mb-16 text-center transform -rotate-1">
          Discover the Tales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STORIES.map((story, index) => {
            const rotations = ['rotate-0 md:rotate-0', 'rotate-1 md:translate-y-6', '-rotate-1 md:-rotate-1'];
            return (
              <article
                key={story.id}
                className={`bg-surface-container-low p-4 sm:p-6 colored-pencil-border rounded-2xl transform transition-transform duration-300 shadow-[6px_6px_0px_0px_rgba(112,93,0,0.1)] paper-edge ${
                  rotations[index % 3]
                } hover:-translate-y-2`}
              >
                <div className="aspect-[4/3] sm:aspect-square mb-4 sm:mb-6 overflow-hidden rounded-xl colored-pencil-border bg-surface-container-lowest">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline-lg text-primary mb-2">
                  {story.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4 sm:mb-6">
                  {story.description}
                </p>
                <button
                  onClick={() => onSelectStory(story.id)}
                  className="bounce-button text-tertiary font-label-md underline hover:text-primary transition-colors flex items-center gap-1 group cursor-pointer min-h-[44px]"
                >
                  Read{' '}
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

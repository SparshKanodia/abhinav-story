'use client';

import React from 'react';
import { STORIES, Story } from '@/lib/stories';

interface StoryShowcaseProps {
  onSelectStory: (storyId: string) => void;
}

export const StoryShowcase: React.FC<StoryShowcaseProps> = ({ onSelectStory }) => {
  return (
    <section className="py-20 px-4 md:px-8 relative" id="stories">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline-xl text-4xl md:text-5xl text-center text-secondary mb-16 transform -rotate-1">
          Discover the Tales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story, index) => {
            const rotations = ['rotate-0', 'rotate-1 md:translate-y-6', '-rotate-1'];
            return (
              <article
                key={story.id}
                className={`bg-surface-container-low p-6 colored-pencil-border rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_0px_rgba(112,93,0,0.1)] paper-edge ${
                  rotations[index % 3]
                }`}
              >
                <div className="aspect-square mb-6 overflow-hidden rounded-xl colored-pencil-border bg-surface-container-lowest">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline-lg text-3xl text-primary mb-2">
                  {story.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 min-h-[48px]">
                  {story.description}
                </p>
                <button
                  onClick={() => onSelectStory(story.id)}
                  className="bounce-button text-tertiary font-label-md text-base underline hover:text-primary transition-colors flex items-center gap-1 group cursor-pointer"
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

'use client';

import React, { useState } from 'react';
import { TopNav } from '@/components/TopNav';
import { HeroSection } from '@/components/HeroSection';
import { StoryShowcase } from '@/components/StoryShowcase';
import { FriendsSection } from '@/components/FriendsSection';
import { AuthorSection } from '@/components/AuthorSection';
import { ReaderView } from '@/components/ReaderView';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedStoryId, setSelectedStoryId] = useState<string>('rachits-magical-car');

  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);

    if (viewId !== 'read') {
      const element = document.getElementById(viewId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectStoryToRead = (storyId: string) => {
    setSelectedStoryId(storyId);
    setCurrentView('read');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <TopNav currentView={currentView} onNavigate={handleNavigate} />

      {currentView === 'read' ? (
        <main className="flex-grow" id="main-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
            <button
              onClick={() => handleNavigate('stories')}
              className="bounce-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-low colored-pencil-border text-tertiary font-label-md hover:bg-surface-container transition-colors shadow-sm cursor-pointer mb-2"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Stories Showcase
            </button>
          </div>
          <ReaderView
            initialStoryId={selectedStoryId}
            onBackToHome={() => handleNavigate('home')}
          />
        </main>
      ) : (
        <main className="flex-grow w-full" id="main-content">
          <section id="home">
            <HeroSection
              onReadStories={() => handleNavigate('stories')}
              onMeetAuthor={() => handleNavigate('about')}
            />
          </section>

          <StoryShowcase onSelectStory={handleSelectStoryToRead} />

          <FriendsSection />

          <AuthorSection />
        </main>
      )}

      <Footer />
    </div>
  );
}

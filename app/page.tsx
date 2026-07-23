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
  const [selectedStoryId, setSelectedStoryId] = useState<string>('magic-car');

  const handleNavigate = (viewId: string) => {
    setCurrentView(viewId);

    // If navigating to home/stories/about/gallery/characters/contact, scroll smoothly if already on main page
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
      {/* Top Navigation */}
      <TopNav currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      {currentView === 'read' ? (
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 pt-4">
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
        <main className="flex-grow max-w-7xl mx-auto w-full">
          {/* Hero Section */}
          <section id="home">
            <HeroSection
              onReadStories={() => handleNavigate('stories')}
              onMeetAuthor={() => handleNavigate('about')}
            />
          </section>

          {/* Story Showcase */}
          <StoryShowcase onSelectStory={handleSelectStoryToRead} />

          {/* Characters Section */}
          <FriendsSection />

          {/* Author Section */}
          <AuthorSection />
        </main>
      )}

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

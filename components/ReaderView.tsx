'use client';

import React, { useState, useEffect } from 'react';
import { STORIES, Story, StoryPage } from '@/lib/stories';

interface ReaderViewProps {
  initialStoryId?: string;
  onBackToHome?: () => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  initialStoryId = 'rachits-magical-car',
  onBackToHome,
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(initialStoryId);
  const [prevInitialId, setPrevInitialId] = useState<string>(initialStoryId);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [fontSizeScale, setFontSizeScale] = useState<number>(1);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [tocOpen, setTocOpen] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  if (initialStoryId !== prevInitialId) {
    setPrevInitialId(initialStoryId);
    setSelectedStoryId(initialStoryId);
    setPageIndex(1);
  }

  const currentStory: Story =
    STORIES.find((s) => s.id === selectedStoryId) || STORIES[0];

  const currentPage: StoryPage =
    currentStory.pages[pageIndex] || currentStory.pages[0];

  const totalPages = currentStory.pages.length;

  const progressPercent = Math.round(((pageIndex + 1) / totalPages) * 100);

  const [bookmarkTrigger, setBookmarkTrigger] = useState<number>(0);
  const bookmarked = typeof window !== 'undefined' &&
    localStorage.getItem(`bookmark_${selectedStoryId}`) === pageIndex.toString();

  const toggleBookmark = () => {
    if (bookmarked) {
      localStorage.removeItem(`bookmark_${selectedStoryId}`);
    } else {
      localStorage.setItem(`bookmark_${selectedStoryId}`, pageIndex.toString());
    }
    setBookmarkTrigger((v) => v + 1);
  };

  const handleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const textToRead = [
      currentPage.chapterTitle,
      ...currentPage.leftParagraphs,
      ...currentPage.rightParagraphs,
    ].join('. ');

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [pageIndex, selectedStoryId]);

  useEffect(() => {
    if (tocOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setTocOpen(false);
      };
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [tocOpen]);

  return (
    <div
      className={`min-h-screen py-6 sm:py-8 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto transition-colors duration-300 ${
        isNightMode ? 'dark bg-[#12161b] text-slate-100' : 'bg-transparent text-on-background'
      }`}
    >
      {/* Top Reader Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 bg-surface-container-low dark:bg-surface-dim colored-pencil-border p-3 sm:p-4 wobbly-line relative z-20 shadow-md">
        {/* Left: TOC Button & Title & Story Selector */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 relative min-w-0 flex-1">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            aria-label="Table of Contents"
            className="bounce-hover flex items-center justify-center p-2 rounded-full bg-secondary-container text-on-secondary-container hover:scale-105 min-w-[44px] min-h-[44px]"
            title="Table of Contents"
          >
            <span className="material-symbols-outlined">menu_book</span>
          </button>

          <div className="min-w-0">
            <div className="font-headline-lg-mobile md:font-headline-lg text-xl sm:text-2xl md:text-3xl text-primary truncate">
              {currentStory.subtitle || currentStory.title}
            </div>
            <select
              value={selectedStoryId}
              onChange={(e) => {
                setSelectedStoryId(e.target.value);
                setPageIndex(0);
              }}
              className="text-xs font-label-md bg-transparent text-tertiary focus:outline-none cursor-pointer underline decoration-dashed min-h-[44px] max-w-[200px] sm:max-w-none"
              aria-label="Select a story"
            >
              {STORIES.map((s) => (
                <option key={s.id} value={s.id} className="text-on-surface bg-surface">
                  Book: {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Table of Contents Dropdown */}
          {tocOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setTocOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute top-full left-0 mt-2 w-56 sm:w-64 bg-surface p-4 rounded-2xl colored-pencil-border shadow-2xl z-50 text-on-surface">
                <h4 className="font-headline-lg text-xl text-primary mb-2 border-b pb-1">
                  Chapters
                </h4>
                <ul className="space-y-2 max-h-[50vh] overflow-y-auto">
                  {currentStory.pages.map((p, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          setPageIndex(idx);
                          setTocOpen(false);
                        }}
                        className={`w-full text-left font-body-md text-sm p-2 rounded-lg transition-colors min-h-[44px] ${
                          pageIndex === idx
                            ? 'bg-primary-container text-on-primary-container font-bold'
                            : 'hover:bg-surface-container-low'
                        }`}
                      >
                        {p.chapterTitle}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
          <button
            onClick={() => setFontSizeScale((s) => Math.max(0.8, s - 0.1))}
            aria-label="Decrease Font Size"
            className="bounce-hover flex items-center justify-center p-2 rounded-full bg-surface text-primary colored-pencil-border shadow-sm min-w-[44px] min-h-[44px]"
            title="Decrease Text Size"
          >
            <span className="material-symbols-outlined text-sm md:text-base">text_decrease</span>
          </button>

          <button
            onClick={() => setFontSizeScale((s) => Math.min(1.3, s + 0.1))}
            aria-label="Increase Font Size"
            className="bounce-hover flex items-center justify-center p-2 rounded-full bg-surface text-primary colored-pencil-border shadow-sm min-w-[44px] min-h-[44px]"
            title="Increase Text Size"
          >
            <span className="material-symbols-outlined text-sm md:text-base">text_increase</span>
          </button>

          <div className="w-px h-6 bg-outline-variant mx-1 hidden sm:block" />

          <button
            onClick={handleSpeech}
            aria-label="Listen to Story"
            className={`bounce-hover flex items-center justify-center p-2 rounded-full colored-pencil-border shadow-sm min-w-[44px] min-h-[44px] ${
              isPlayingAudio
                ? 'bg-primary text-on-primary animate-pulse'
                : 'bg-surface text-primary'
            }`}
            title={isPlayingAudio ? 'Stop Reading' : 'Listen to Story'}
          >
            <span className="material-symbols-outlined">
              {isPlayingAudio ? 'volume_off' : 'volume_up'}
            </span>
          </button>

          <button
            onClick={() => setIsNightMode(!isNightMode)}
            aria-label="Toggle Night Mode"
            className="bounce-hover flex items-center justify-center p-2 rounded-full bg-surface text-tertiary colored-pencil-border shadow-sm min-w-[44px] min-h-[44px]"
            title="Toggle Night Mode"
          >
            <span className="material-symbols-outlined">
              {isNightMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={toggleBookmark}
            aria-label="Bookmark Page"
            className={`bounce-hover flex items-center justify-center p-2 rounded-full colored-pencil-border shadow-sm min-w-[44px] min-h-[44px] ${
              bookmarked
                ? 'bg-secondary-container text-on-secondary-container'
                : 'bg-tertiary-container text-on-tertiary-container'
            }`}
            title={bookmarked ? 'Page Bookmarked' : 'Add Bookmark'}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: bookmarked ? "'FILL' 1" : "'FILL' 0" }}
            >
              bookmark
            </span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-8 mb-6 sm:mb-8 relative flex items-center px-3 sm:px-4">
        <div className="absolute left-3 sm:left-4 right-3 sm:right-4 h-1 border-t-2 border-dashed border-tertiary/40 top-1/2 -translate-y-1/2" />
        <div
          className="absolute left-3 sm:left-4 h-3 bg-tertiary rounded-full top-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-10"
          style={{ width: `${Math.max(10, Math.min(progressPercent, 95))}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 bg-surface-container-lowest rounded-full colored-pencil-border flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-xs sm:text-base text-tertiary">
              directions_car
            </span>
          </div>
        </div>
      </div>

      {/* The Book Layout */}
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-stretch paper-edge shadow-[8px_8px_0px_0px_rgba(112,93,0,0.1)] p-4 sm:p-6 md:p-12 relative transition-colors duration-300 ${
          isNightMode ? 'bg-[#1f252d] text-slate-100' : 'bg-[#fffcf5] text-on-surface'
        }`}
      >
        {/* Center Fold (Spine) on Desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0 border-l border-dashed border-outline-variant/30 -ml-px pointer-events-none z-10" />

        {/* Page 1 (Left Page) */}
        <article className="flex-1 relative pb-12 md:pb-0 md:pr-6 lg:pr-8 flex flex-col justify-between">
          <div>
            <div className="absolute top-0 right-0 text-outline/50 font-headline-lg text-lg sm:text-2xl transform rotate-12 select-none pointer-events-none">
              Pg {currentPage.pageLeftNum}
            </div>

            <h1 className="font-headline-xl text-2xl sm:text-3xl md:text-5xl text-primary mb-4 sm:mb-6 text-center md:text-left mt-2 sm:mt-4 leading-snug">
              {currentPage.chapterTitle}
            </h1>

            <div
              className="prose prose-lg max-w-none font-body-lg space-y-4 sm:space-y-6 drop-cap transition-all duration-200"
              style={{ fontSize: `${20 * fontSizeScale}px`, lineHeight: 1.6 }}
            >
              {currentPage.leftParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 self-start text-tertiary/40 transform -rotate-12 pointer-events-none">
            <span className="material-symbols-outlined text-3xl sm:text-4xl">
              {currentPage.leftDoodleIcon || 'eco'}
            </span>
          </div>
        </article>

        {/* Page 2 (Right Page) */}
        <article className="flex-1 relative pt-8 md:pt-0 md:pl-6 lg:pl-8 flex flex-col justify-between">
          <div>
            <div className="absolute top-0 left-0 text-outline/50 font-headline-lg text-lg sm:text-2xl transform -rotate-12 select-none pointer-events-none">
              Pg {currentPage.pageRightNum}
            </div>

            {/* Embedded Storybook Illustration */}
            <div className="w-full rounded-xl overflow-hidden colored-pencil-border mb-6 sm:mb-8 mt-2 sm:mt-4 transform rotate-1 bg-surface-container-lowest p-1 sm:p-2 shadow-md">
              <img
                src={currentPage.illustrationUrl}
                alt={currentPage.illustrationAlt}
                className="w-full h-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              className="prose prose-lg max-w-none font-body-lg space-y-4 sm:space-y-6 transition-all duration-200"
              style={{ fontSize: `${20 * fontSizeScale}px`, lineHeight: 1.6 }}
            >
              {currentPage.rightParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 self-end text-secondary/40 transform rotate-12 pointer-events-none">
            <span className="material-symbols-outlined text-3xl sm:text-4xl">
              {currentPage.rightDoodleIcon || 'star'}
            </span>
          </div>
        </article>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 sm:mt-10 gap-3 sm:gap-4">
        <button
          onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
          disabled={pageIndex === 0}
          className={`bounce-hover flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-label-md transition-all min-h-[52px] ${
            pageIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-surface-container text-outline'
              : 'bg-surface colored-pencil-border text-primary hover:bg-surface-container-low cursor-pointer shadow-sm'
          }`}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="hidden sm:inline">Previous Page</span>
          <span className="sm:hidden">Prev</span>
        </button>

        <button
          onClick={() => setPageIndex((i) => Math.min(totalPages - 1, i + 1))}
          disabled={pageIndex === totalPages - 1}
          className={`bounce-hover flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full font-label-md transition-all min-h-[52px] ${
            pageIndex === totalPages - 1
              ? 'opacity-40 cursor-not-allowed bg-surface-container text-outline'
              : 'bg-primary text-on-primary shadow-[4px_4px_0px_0px_rgba(0,100,145,0.3)] hover:translate-y-[-2px] cursor-pointer'
          }`}
        >
          <span className="hidden sm:inline">Next Page</span>
          <span className="sm:hidden">Next</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

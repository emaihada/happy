import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StudyTab from './components/StudyTab';
import FlashcardTab from './components/FlashcardTab';
import QuizTab from './components/QuizTab';
import BookmarksTab from './components/BookmarksTab';
import { StudyMode } from './types';
import { BookOpen, Star, Sparkles, CheckCircle2, Layers, ClipboardList, Bookmark } from 'lucide-react';
import { VOCAB_DATA } from './data/vocabData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<StudyMode>('list');
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  // Restore bookmarks from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dent_bookmarks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setBookmarks(new Set(parsed as string[]));
        }
      }
    } catch (e) {
      console.error('Failed to load bookmarks', e);
    }
  }, []);

  // Sync bookmarks to localStorage
  const saveBookmarks = (newBookmarks: Set<string>) => {
    setBookmarks(newBookmarks);
    try {
      localStorage.setItem('dent_bookmarks', JSON.stringify(Array.from(newBookmarks)));
    } catch (e) {
      console.error('Failed to save bookmarks', e);
    }
  };

  const toggleBookmark = (id: string) => {
    const next = new Set<string>(Array.from(bookmarks));
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    saveBookmarks(next);
  };

  // Learning progress
  const progressPercent = Math.round((bookmarks.size / VOCAB_DATA.length) * 100);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      {/* Dental header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        bookmarksCount={bookmarks.size}
      />

      {/* Progress banner */}
      <div className="bg-slate-950 text-slate-300 text-[11px] font-semibold py-2 px-4 border-b border-indigo-950/20">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-2.5">
          <div className="flex items-center gap-1.5">
            <Sparkles size={13} className="text-amber-400 animate-pulse" />
            <span>치위생 임상 기구 개인 단어장 (총 <strong className="text-white font-extrabold">{VOCAB_DATA.length}</strong>개 수록)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="opacity-80">마스터 완료: <strong className="text-emerald-400 font-extrabold">{bookmarks.size}</strong>개 ({progressPercent}%)</span>
            <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Study Screen Render Block */}
      <main id="mainAppDeck" className="animate-fadeIn">
        {currentTab === 'list' && (
          <StudyTab
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}
        {currentTab === 'flashcard' && (
          <FlashcardTab
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}
        {currentTab === 'quiz' && (
          <QuizTab bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
        )}
        {currentTab === 'bookmarks' && (
          <BookmarksTab
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}
      </main>

      {/* Navigation Footer for easy mobile reach */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100/80 py-2.5 px-3 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] flex items-center justify-around z-40 md:hidden pb-safe">
        <button
          onClick={() => setCurrentTab('list')}
          className={`flex flex-col items-center justify-center flex-1 h-12 relative transition-all duration-300 ${
            currentTab === 'list'
              ? 'text-indigo-600 scale-105'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {currentTab === 'list' && (
            <span className="absolute top-[-10px] w-6 h-0.5 bg-indigo-600 rounded-full"></span>
          )}
          <BookOpen id="mobileNavListIcon" size={20} className="mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">목록학습</span>
        </button>
        <button
          onClick={() => setCurrentTab('flashcard')}
          className={`flex flex-col items-center justify-center flex-1 h-12 relative transition-all duration-300 ${
            currentTab === 'flashcard'
              ? 'text-indigo-600 scale-105'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {currentTab === 'flashcard' && (
            <span className="absolute top-[-10px] w-6 h-0.5 bg-indigo-600 rounded-full"></span>
          )}
          <Layers id="mobileNavFlashcardIcon" size={20} className="mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">플래시카드</span>
        </button>
        <button
          onClick={() => setCurrentTab('quiz')}
          className={`flex flex-col items-center justify-center flex-1 h-12 relative transition-all duration-300 ${
            currentTab === 'quiz'
              ? 'text-indigo-600 scale-105'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {currentTab === 'quiz' && (
            <span className="absolute top-[-10px] w-6 h-0.5 bg-indigo-600 rounded-full"></span>
          )}
          <ClipboardList id="mobileNavQuizIcon" size={20} className="mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">마스터퀴즈</span>
        </button>
        <button
          onClick={() => setCurrentTab('bookmarks')}
          className={`flex flex-col items-center justify-center flex-1 h-12 relative transition-all duration-300 ${
            currentTab === 'bookmarks'
              ? 'text-indigo-600 scale-105'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {currentTab === 'bookmarks' && (
            <span className="absolute top-[-10px] w-6 h-0.5 bg-indigo-600 rounded-full"></span>
          )}
          <div className="relative mb-0.5">
            <Bookmark id="mobileNavBookmarksIcon" size={20} />
            {bookmarks.size > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[8px] h-3.5 min-w-[14px] rounded-full flex items-center justify-center px-1 font-bold">
                {bookmarks.size}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight">체크단어</span>
        </button>
      </nav>
    </div>
  );
}

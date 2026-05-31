import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StudyTab from './components/StudyTab';
import FlashcardTab from './components/FlashcardTab';
import QuizTab from './components/QuizTab';
import BookmarksTab from './components/BookmarksTab';
import { StudyMode } from './types';
import { BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
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
      <div className="bg-indigo-600 text-white text-xs font-semibold py-2 px-4 shadow-inner">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-300 animate-bounce" />
            <span>총 <strong className="text-amber-300 font-black">{VOCAB_DATA.length}</strong>개의 치위생 임상 기구를 수록 중입니다.</span>
          </div>
          <div className="flex items-center gap-3">
            <span>마스터한 기구: <strong className="text-amber-300 font-black">{bookmarks.size}</strong>개 ({progressPercent}%)</span>
            <div className="w-20 bg-indigo-800 rounded-full h-2 overflow-hidden border border-indigo-500/50">
              <div 
                className="bg-amber-400 h-full rounded-full transition-all duration-300"
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2.5 px-4 shadow-lg flex items-center justify-around z-40 md:hidden">
        <button
          onClick={() => setCurrentTab('list')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentTab === 'list' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <span>📖</span>
          <span>목록학습</span>
        </button>
        <button
          onClick={() => setCurrentTab('flashcard')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentTab === 'flashcard' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <span>🃏</span>
          <span>플래시</span>
        </button>
        <button
          onClick={() => setCurrentTab('quiz')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentTab === 'quiz' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <span>✍️</span>
          <span>테스트</span>
        </button>
        <button
          onClick={() => setCurrentTab('bookmarks')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
            currentTab === 'bookmarks' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <span className="relative">
            📌
            {bookmarks.size > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-rose-500 text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold">
                {bookmarks.size}
              </span>
            )}
          </span>
          <span>북마크</span>
        </button>
      </nav>
    </div>
  );
}

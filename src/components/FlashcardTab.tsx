import React, { useState, useEffect } from 'react';
import { VocabItem } from '../types';
import { VOCAB_DATA } from '../data/vocabData';
import { Volume2, Star, RefreshCw, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FlashcardTabProps {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}

export default function FlashcardTab({ bookmarks, toggleBookmark }: FlashcardTabProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [items, setItems] = useState<VocabItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const list = selectedChapter === 'all'
      ? VOCAB_DATA
      : VOCAB_DATA.filter(item => item.chapterId === selectedChapter);
    
    // Shuffle
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedChapter]);

  const speakEnglish = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    if (items.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 150);
  };

  const handlePrev = () => {
    if (items.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, 150);
  };

  const handleShuffle = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentItem = items[currentIndex];
  const chapters = Array.from(new Set(VOCAB_DATA.map(i => JSON.stringify({ id: i.chapterId, name: i.chapterName }))));
  const chapterList = chapters.map(c => JSON.parse(c));

  return (
    <div id="flashcardTabContent" className="max-w-xl mx-auto px-4 py-8">
      {/* Chapter Filter & Reshuffle Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm justify-between">
        <select
          id="flashcardChapterSelect"
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="bg-slate-50 text-slate-700 font-bold border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none"
        >
          <option value="all">전체 챕터 무작위 학습</option>
          {chapterList.map(ch => (
            <option key={ch.id} value={ch.id}>{ch.name}</option>
          ))}
        </select>
        <button
          id="reshuffleFlashcardsBtn"
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-bold rounded-lg transition-all hover:bg-indigo-100"
        >
          <RefreshCw size={13} /> 카드 다시 섞기
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-3xl py-12 text-center border-2 border-slate-100 shadow-lg">
          <p className="text-sm font-semibold text-slate-500">카드가 비어 있습니다.</p>
        </div>
      ) : (
        <div>
          {/* Card Content with elegant flip animation */}
          <div className="perspective-1000 w-full aspect-[4/3] max-w-full relative mb-6">
            <motion.div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full h-full relative preserve-3d duration-300 cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Front side of Card (English) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-white border-2 border-slate-100 rounded-3xl shadow-xl flex flex-col items-center justify-between p-6 overflow-hidden"
                style={{ zIndex: isFlipped ? 0 : 2 }}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">
                    {currentItem.chapterName}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakEnglish(currentItem.eng);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-50"
                    >
                      <Volume2 size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(currentItem.id);
                      }}
                      className={`p-1.5 rounded-lg ${bookmarks.has(currentItem.id) ? 'text-amber-500' : 'text-slate-300'}`}
                    >
                      <Star size={16} fill={bookmarks.has(currentItem.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold font-mono tracking-tight text-slate-800 break-words mb-2 select-all">
                    {currentItem.eng}
                  </h2>
                  <p className="text-sm text-indigo-500 font-semibold">{currentItem.pron}</p>
                </div>

                <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
                  <HelpCircle size={14} /> 클릭하여 뒤집어보기
                </div>
              </div>

              {/* Back side of Card (Korean Meaning & Detail) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-indigo-50/50 border-2 border-indigo-200 rounded-3xl shadow-xl flex flex-col items-center justify-between p-6 overflow-hidden rotate-y-180"
                style={{ zIndex: isFlipped ? 2 : 0 }}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold">
                    뜻 풀이
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(currentItem.id);
                    }}
                    className={`p-1.5 rounded-lg ${bookmarks.has(currentItem.id) ? 'text-amber-500' : 'text-indigo-300'}`}
                  >
                    <Star size={16} fill={bookmarks.has(currentItem.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="text-center px-4 max-w-full">
                  <h3 className="text-xl font-black text-indigo-900 border-b-2 border-indigo-100 pb-2 inline-block mb-4 select-all">
                    {currentItem.kor}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium bg-white/70 p-3 rounded-2xl border border-indigo-50 select-all">
                    {currentItem.description}
                  </p>
                </div>

                <div className="text-xs text-indigo-500 font-semibold">
                  클릭해서 앞면으로
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stepper Controllers */}
          <div className="flex items-center justify-between gap-4">
            <button
              id="prevFlashcardBtn"
              onClick={handlePrev}
              className="p-3 bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 rounded-full transition-all shadow-sm flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-full font-mono">
              {currentIndex + 1} / {items.length}
            </span>

            <button
              id="nextFlashcardBtn"
              onClick={handleNext}
              className="p-3 bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 rounded-full transition-all shadow-sm flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

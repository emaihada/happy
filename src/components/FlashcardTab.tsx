import React, { useState, useEffect } from 'react';
import { VocabItem } from '../types';
import { VOCAB_DATA } from '../data/vocabData';
import { Star, RefreshCw, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
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

  const handleNext = () => {
    if (items.length === 0) return;
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 350);
    } else {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (items.length === 0) return;
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }, 350);
    } else {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
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
    <div id="flashcardTabContent" className="max-w-xl mx-auto px-4 py-4 md:py-8 pb-16">
      {/* Chapter Filter & Reshuffle Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-150/40 shadow-sm justify-between">
        <select
          id="flashcardChapterSelect"
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="bg-slate-50 text-slate-700 font-extrabold border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:outline-none transition-all"
        >
          <option value="all">🌐 전체 진료과목 무작위 셔플</option>
          {chapterList.map(ch => (
            <option key={ch.id} value={ch.id}>🩺 {ch.name}</option>
          ))}
        </select>
        <button
          id="reshuffleFlashcardsBtn"
          onClick={handleShuffle}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-50/60 border border-indigo-200/50 text-indigo-700 text-xs font-black rounded-xl hover:bg-indigo-100/70 transition-all active:scale-95"
        >
          <RefreshCw size={13} className="animate-spin" style={{ animationDuration: '4s' }} /> 카드 무작위 셔플
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-3xl py-12 text-center border border-slate-100 shadow-sm">
          <p className="text-xs font-semibold text-slate-400">카드가 비어 있습니다.</p>
        </div>
      ) : (
        <div>
          {/* Card Content with elegant flip animation. Adjusted height dynamically for smaller devices */}
          <div className="perspective-1000 w-full min-h-[280px] sm:min-h-[320px] max-w-full relative mb-6">
            <motion.div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full h-full absolute preserve-3d duration-300 cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Front side of Card (English) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-100 rounded-3xl shadow-[0_4px_24px_rgb(0,0,0,0.04)] flex flex-col items-center justify-between p-6 overflow-hidden"
                style={{ zIndex: isFlipped ? 0 : 2 }}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-[10px] bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full font-black">
                    {currentItem.chapterName}
                  </span>
                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => toggleBookmark(currentItem.id)}
                      className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all ${
                        bookmarks.has(currentItem.id) 
                          ? 'bg-amber-50 border-amber-200 text-amber-500' 
                          : 'bg-slate-50 border-slate-150 text-slate-400 hover:text-amber-500'
                      }`}
                    >
                      <Star size={15} fill={bookmarks.has(currentItem.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="text-center px-4 max-w-full">
                  <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-800 break-words mb-2.5 select-all leading-tight">
                    {currentItem.eng}
                  </h2>
                  <p className="text-xs sm:text-sm text-indigo-500 font-bold tracking-tight bg-indigo-50/50 px-3 py-1 rounded-full inline-block">{currentItem.pron}</p>
                </div>

                <div className="text-[10px] text-slate-400 font-extrabold flex items-center gap-1.5 bg-slate-50/50 px-3 py-1.5 rounded-full border border-slate-100">
                  <HelpCircle size={12} className="text-indigo-400" /> 터치하여 뒤집고 뜻 보기
                </div>
              </div>

              {/* Back side of Card (Korean Meaning & Detail) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-slate-900 border border-slate-950 rounded-3xl shadow-xl flex flex-col items-center justify-between p-6 overflow-hidden rotate-y-180"
                style={{ zIndex: isFlipped ? 2 : 0 }}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-3 py-1 rounded-full font-black">
                    정답 확인
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(currentItem.id);
                    }}
                    className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all ${
                      bookmarks.has(currentItem.id) 
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' 
                        : 'bg-slate-800 text-slate-400 border border-slate-750'
                    }`}
                  >
                    <Star size={15} fill={bookmarks.has(currentItem.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="text-center px-4 max-w-full">
                  <h3 className="text-lg sm:text-xl font-black text-emerald-400 border-b border-slate-800 pb-2.5 inline-block mb-3.5 select-all leading-tight">
                    {currentItem.kor}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold bg-slate-800 p-3.5 rounded-2xl border border-slate-750 max-h-[120px] overflow-y-auto select-all">
                    {currentItem.description}
                  </p>
                </div>

                <div className="text-[10px] text-indigo-400 font-extrabold bg-indigo-950/30 px-3 py-1.5 rounded-full border border-indigo-900/30">
                  다시 터치하여 앞면 기구명 보기
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stepper Controllers */}
          <div className="flex items-center justify-between gap-4 px-2">
            <button
              id="prevFlashcardBtn"
              onClick={handlePrev}
              className="w-12 h-12 bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 rounded-full transition-all shadow-sm flex items-center justify-center active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-xs font-black text-slate-500 bg-slate-100 border border-slate-150 px-5 py-2.5 rounded-full font-mono">
              {currentIndex + 1} <span className="opacity-40">/</span> {items.length}
            </span>

            <button
              id="nextFlashcardBtn"
              onClick={handleNext}
              className="w-12 h-12 bg-indigo-600 text-white border border-indigo-700 hover:bg-indigo-700 rounded-full transition-all shadow-md flex items-center justify-center active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

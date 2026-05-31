import React, { useState } from 'react';
import { VocabItem } from '../types';
import { CHAPTERS_WITH_INSTRUMENTS, VOCAB_DATA } from '../data/vocabData';
import { Search, Eye, EyeOff, Star } from 'lucide-react';

interface StudyTabProps {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}

export default function StudyTab({ bookmarks, toggleBookmark }: StudyTabProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hideKorean, setHideKorean] = useState<boolean>(false);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleCardClick = (id: string) => {
    const updated = new Set(flippedCards);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setFlippedCards(updated);
  };

  const filteredItems = VOCAB_DATA.filter((item) => {
    const matchesChapter = selectedChapter === 'all' || item.chapterId === selectedChapter;
    const matchesSearch =
      item.eng.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kor.includes(searchQuery) ||
      (item.description && item.description.includes(searchQuery));
    return matchesChapter && matchesSearch;
  });

  return (
    <div id="studyTabContent" className="max-w-5xl mx-auto px-4 py-4 md:py-8">
      {/* Search and Helper Toggle bar */}
      <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-100 shadow-sm mb-5 flex flex-col md:flex-row md:items-center justify-between gap-3.5">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            id="searchInput"
            placeholder="기구 영어명, 한글 의미 또는 설명을 검색하세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50/70 pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200/80 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white transition-all text-slate-800 font-semibold placeholder:text-slate-400"
          />
        </div>

        {/* Self-Test Configuration */}
        <div className="flex items-center">
          <button
            id="toggleHideKoreanBtn"
            onClick={() => setHideKorean(!hideKorean)}
            className={`w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all border ${
              hideKorean
                ? 'bg-rose-50 border-rose-200/80 text-rose-600 shadow-sm'
                : 'bg-white border-slate-200/80 text-slate-600 hover:border-indigo-200 hover:text-indigo-600'
            }`}
          >
            {hideKorean ? (
              <>
                <EyeOff size={14} /> 한글 의미 가림막 활성
              </>
            ) : (
              <>
                <Eye size={14} /> 자가 진단 (뜻 가려보기)
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Study Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start">
        {/* Left Column: Chapters selection tab */}
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm lg:sticky lg:top-20 max-h-[80vh] overflow-y-auto">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-wider px-2.5 mb-2.5 flex items-center justify-between">
            <span>진료 과목명 (챕터)</span>
            <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold text-[9px]">
              {CHAPTERS_WITH_INSTRUMENTS.length} 과목
            </span>
          </h2>
          {/* Scrollable container on mobile, vertical list on desktop. Optimized for thumb swiping with hidden scrollbars */}
          <div className="flex flex-row overflow-x-auto lg:flex-col gap-1.5 pb-2.5 lg:pb-0 scrollbar-none snap-x snap-mandatory">
            <button
              onClick={() => setSelectedChapter('all')}
              className={`snap-start px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal ${
                selectedChapter === 'all'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                  : 'text-slate-600 bg-slate-50 lg:bg-transparent hover:bg-slate-100/70 border border-slate-150 lg:border-none'
              }`}
            >
              <span>🏛️ 전체 챕터 통합 기구</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${selectedChapter === 'all' ? 'bg-indigo-700 text-white' : 'bg-slate-200/80 text-slate-600'}`}>
                {VOCAB_DATA.length}
              </span>
            </button>
            {CHAPTERS_WITH_INSTRUMENTS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapter(ch.id)}
                className={`snap-start px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal ${
                  selectedChapter === ch.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                    : 'text-slate-600 bg-slate-50 lg:bg-transparent hover:bg-slate-100/70 border border-slate-150 lg:border-none'
                }`}
              >
                <span className="truncate max-w-[130px] lg:max-w-none">🩺 {ch.name}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold flex-shrink-0 ${selectedChapter === ch.id ? 'bg-indigo-700 text-white' : 'bg-slate-250/80 text-slate-600'}`}>
                  {ch.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Grid and detail cards */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-[11px] font-bold text-slate-400">
              검색된 치과 보존/기구: <span className="text-indigo-600 font-extrabold">{filteredItems.length}</span>개
            </p>
            {hideKorean && (
              <p className="text-[10px] font-bold text-rose-500 bg-rose-50/70 px-2 py-0.5 rounded border border-rose-100">
                ⚠️ 카드를 누르면 뜻을 확인할 수 있습니다.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
            {filteredItems.length === 0 ? (
              <div className="col-span-full bg-white rounded-2xl py-14 px-6 text-center border border-slate-100 shadow-sm">
                <span className="text-3xl text-slate-300 block mb-3">🔍</span>
                <h3 className="text-xs font-black text-slate-700 mt-2">일치하는 기구가 없습니다</h3>
                <p className="text-[11px] text-slate-400 mt-1.5 max-w-xs mx-auto leading-relaxed">검색어를 다른 단어로 변경하거나 다른 진료 과목을 탭해 보세요.</p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const isBookmarked = bookmarks.has(item.id);
                const isFlipped = flippedCards.has(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    className={`bg-white rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                      isBookmarked 
                        ? 'border-amber-200 shadow-md shadow-amber-500/5 bg-amber-50/10' 
                        : 'border-slate-100 shadow-[0_2px_12px_rgb(0,0,0,0.02)]'
                    } ${isFlipped ? 'scale-[0.99] bg-slate-50/50' : 'hover:scale-[1.01] hover:shadow-md'}`}
                  >
                    {/* Top Action Buttons (Optimized touch size for mobile thumb) */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10" onClick={(e) => e.stopPropagation()}>
                      {/* Bookmark Star */}
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all border ${
                          isBookmarked
                            ? 'bg-amber-50 border-amber-200 text-amber-500 shadow-inner'
                            : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-amber-500 hover:bg-amber-50 active:scale-95'
                        }`}
                        title="단어 책마크"
                      >
                        <Star size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                    </div>

                    {/* Word Body */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="bg-indigo-50/60 text-indigo-700 text-[10px] px-2.5 py-0.5 rounded-full font-extrabold border border-indigo-100/40">
                          {item.chapterName}
                        </span>
                      </div>

                      {/* English Entry */}
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-800 font-mono tracking-tight select-all leading-tight">
                        {item.eng}
                      </h3>
                      <p className="text-xs text-indigo-500 font-semibold select-all mt-0.5">
                        {item.pron}
                      </p>

                      {/* Korean with hidden testing option */}
                      {(!hideKorean || isFlipped) ? (
                        <div className="mt-4 pt-3.5 border-t border-slate-105/50 animate-fadeIn">
                          <h4 className="text-xs sm:text-sm font-black text-slate-900 bg-indigo-50/50 inline-block px-1.5 py-0.5 rounded text-indigo-950 border-l-3 border-indigo-500">
                            {item.kor}
                          </h4>
                          <p className="text-xs text-slate-500 mt-2.5 leading-relaxed bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 font-medium whitespace-pre-line">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div className="mt-4 pt-3.5 border-t border-slate-105/50 flex items-center justify-between text-xs text-rose-500 font-bold bg-rose-50/45 p-2.5 rounded-xl border border-rose-100/50">
                          <span>⚠️ 가려진 상태 (카드를 터치하여 확인)</span>
                          <Eye size={12} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

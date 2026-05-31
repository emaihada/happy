import React, { useState } from 'react';
import { VocabItem } from '../types';
import { CHAPTERS_WITH_INSTRUMENTS, VOCAB_DATA } from '../data/vocabData';
import { Search, Eye, EyeOff, Volume2, Star } from 'lucide-react';

interface StudyTabProps {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}

export default function StudyTab({ bookmarks, toggleBookmark }: StudyTabProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hideKorean, setHideKorean] = useState<boolean>(false);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  // Handle voice synthesis accent
  const speakEnglish = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

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
    <div id="studyTabContent" className="max-w-5xl mx-auto px-4 py-6">
      {/* Search and Helper Toggle bar */}
      <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            id="searchInput"
            placeholder="찾고 싶은 영어 단어 또는 한글 의미를 입력하세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800 font-medium"
          />
        </div>

        {/* Self-Test Configuration */}
        <div className="flex items-center gap-3">
          <button
            id="toggleHideKoreanBtn"
            onClick={() => setHideKorean(!hideKorean)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              hideKorean
                ? 'bg-rose-50 border-rose-200 text-rose-600 shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {hideKorean ? (
              <>
                <EyeOff size={15} /> 한글 의미 숨김 켜짐
              </>
            ) : (
              <>
                <Eye size={15} /> 뜻 가려보기 (자가 테스트)
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Study Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Column: Chapters selection tab */}
        <div className="bg-white p-3 rounded-2xl border-2 border-slate-100 shadow-sm lg:sticky lg:top-24 max-h-[75vh] overflow-y-auto">
          <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest px-3 mb-2 flex items-center justify-between">
            <span>진료 과목 / 챕터</span>
            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[10px]">
              총 {CHAPTERS_WITH_INSTRUMENTS.length}개
            </span>
          </h2>
          <div className="flex flex-row overflow-x-auto lg:flex-col gap-1 pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedChapter('all')}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 whitespace-nowrap lg:whitespace-normal ${
                selectedChapter === 'all'
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-100'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>🏛️ 전체 챕터 기구 모아보기</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedChapter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {VOCAB_DATA.length}
              </span>
            </button>
            {CHAPTERS_WITH_INSTRUMENTS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapter(ch.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 whitespace-nowrap lg:whitespace-normal ${
                  selectedChapter === ch.id
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="truncate max-w-[150px] lg:max-w-none">🩺 {ch.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full flex-shrink-0 ${selectedChapter === ch.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {ch.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Grid and detail cards */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold text-slate-500">
              학습 대상 기구 및 도구: <span className="text-indigo-600 font-bold">{filteredItems.length}</span>개
            </p>
            {hideKorean && (
              <p className="text-[10pt] font-semibold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">
                * 카드를 클릭하면 한글 의미와 설명이 표시됩니다.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.length === 0 ? (
              <div className="col-span-full bg-white rounded-2xl py-12 px-4 text-center border-2 border-dashed border-slate-200">
                <span className="text-4xl">🔍</span>
                <h3 className="text-sm font-bold text-slate-700 mt-2">일치하는 기구가 없습니다</h3>
                <p className="text-xs text-slate-400 mt-1">검색어를 지우거나 다른 챕터를 선택해 보세요.</p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const isBookmarked = bookmarks.has(item.id);
                const isFlipped = flippedCards.has(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    className={`bg-white rounded-2xl border-2 transition-all duration-300 relative cursor-pointer hover:shadow-md ${
                      isBookmarked ? 'border-amber-200 bg-amber-50/10' : 'border-slate-100'
                    } ${isFlipped ? 'shadow-inner' : 'shadow-sm'}`}
                  >
                    {/* Top action block */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10" onClick={(e) => e.stopPropagation()}>
                      {/* TTS Speak */}
                      <button
                        onClick={() => speakEnglish(item.eng)}
                        className="p-1.5 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 transition-all"
                        title="원어민 발음 듣기"
                      >
                        <Volume2 size={15} />
                      </button>
                      {/* Bookmark Star */}
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={`p-1.5 rounded-lg transition-all ${
                          isBookmarked
                            ? 'bg-amber-100 text-amber-600'
                            : 'bg-slate-50 text-slate-400 hover:text-amber-500 hover:bg-amber-50'
                        }`}
                        title="단어 책마크"
                      >
                        <Star size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                    </div>

                    {/* Word Body */}
                    <div className="p-4 pt-5">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="bg-indigo-50 text-indigo-700 text-[9px] px-2 py-0.5 rounded-full font-bold">
                          {item.chapterName}
                        </span>
                      </div>

                      {/* English Entry */}
                      <h3 className="text-[15px] font-bold text-slate-800 font-mono tracking-tight select-all">
                        {item.eng}
                      </h3>
                      <p className="text-[11px] text-indigo-500 font-medium select-all mt-0.5">
                        {item.pron}
                      </p>

                      {/* Korean with hidden testing option */}
                      {(!hideKorean || isFlipped) ? (
                        <div className="mt-3 pt-3 border-t border-slate-100 animate-fadeIn">
                          <h4 className="text-xs font-bold text-slate-800 bg-indigo-50/50 inline-block px-1.5 py-0.5 rounded text-indigo-900 border-l-2 border-indigo-500">
                            {item.kor}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-2 leading-relaxed bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-rose-500 font-bold bg-rose-50/30 p-2 rounded-lg">
                          <span>⚠️ 가려짐 (클릭해서 확인하세요)</span>
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

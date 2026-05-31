import React, { useState } from 'react';
import { VocabItem } from '../types';
import { VOCAB_DATA } from '../data/vocabData';
import { Trash2, Star, Eye, Layers, Bookmark } from 'lucide-react';

interface BookmarksTabProps {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}

export default function BookmarksTab({ bookmarks, toggleBookmark }: BookmarksTabProps) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const markedItems = VOCAB_DATA.filter((item) => bookmarks.has(item.id));

  const handleCardClick = (id: string) => {
    const updated = new Set(flippedCards);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setFlippedCards(updated);
  };

  return (
    <div id="bookmarksTabContent" className="max-w-4xl mx-auto px-4 py-4 md:py-8 pb-16">
      {/* Overview Card with high-contrast, modern styling */}
      <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6 rounded-2xl border border-indigo-950/20 shadow-md mb-6 relative overflow-hidden">
        <div className="absolute right-[-20px] top-[-20px] text-white/5 pointer-events-none select-none">
          <Bookmark size={140} />
        </div>
        <h2 className="text-sm sm:text-[15px] font-black tracking-tight flex items-center gap-2">
          <Bookmark size={15} className="text-amber-400 fill-amber-400" /> 나만의 체크 오답 단어장
        </h2>
        <p className="text-[11px] text-slate-300 opacity-90 mt-1.5 leading-relaxed max-w-xl font-medium">
          기억하기 어렵거나 자주 오답으로 마주하는 기구들을 별도로 마킹해둔 보관소입니다. 시험 직전 5분 동안 리마인드해보세요!
        </p>
      </div>

      {markedItems.length === 0 ? (
        // Empty state with high-fidelity components
        <div className="bg-white rounded-2xl border border-slate-100 py-14 px-6 text-center shadow-sm">
          <span className="text-3xl text-slate-300 block mb-3">📌</span>
          <h3 className="text-xs font-black text-slate-700">체크된 단어가 없습니다</h3>
          <p className="text-[11px] text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
            목록학습이나 플래시카드 학습 중에 헤갈리는 단어들의 <strong className="text-amber-500 font-extrabold">★ 책마킹</strong> 버튼을 탭하여 이곳에 추가해보세요.
          </p>
        </div>
      ) : (
        // Bookmarked items list with premium cards
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {markedItems.map((item) => {
            const isFlipped = flippedCards.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="bg-white rounded-2xl border border-amber-200/40 bg-amber-50/5 p-4.5 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:shadow-md transition-all relative cursor-pointer"
              >
                {/* Action buttons inside card */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-rose-50 border border-rose-100 text-rose-500 hover:bg-rose-100 transition-all active:scale-95"
                    title="단어장 해제"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                {/* Card body */}
                <div>
                  <span className="bg-amber-100/60 text-amber-900 border border-amber-200/35 text-[9px] px-2.5 py-0.5 rounded-full font-extrabold inline-block mb-2">
                    {item.chapterName}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-800 font-mono tracking-tight leading-tight select-all pr-12">
                    {item.eng}
                  </h3>
                  <p className="text-xs text-indigo-500 font-semibold mt-0.5 select-all">{item.pron}</p>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 select-all">
                    <h4 className="text-xs sm:text-xs font-black text-rose-950 bg-rose-50 inline-block px-1.5 py-0.5 rounded border border-rose-100">
                      {item.kor}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 font-medium whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

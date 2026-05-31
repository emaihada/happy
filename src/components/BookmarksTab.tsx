import React, { useState } from 'react';
import { VocabItem } from '../types';
import { VOCAB_DATA } from '../data/vocabData';
import { Trash2, Volume2, Star, Eye, Layers } from 'lucide-react';

interface BookmarksTabProps {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}

export default function BookmarksTab({ bookmarks, toggleBookmark }: BookmarksTabProps) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const markedItems = VOCAB_DATA.filter((item) => bookmarks.has(item.id));

  // Voice Speak
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

  return (
    <div id="bookmarksTabContent" className="max-w-4xl mx-auto px-4 py-8">
      {/* Overview Card */}
      <div className="bg-gradient-to-r from-rose-500 to-amber-500 text-white p-6 rounded-3xl shadow-xl mb-6">
        <h2 className="text-lg font-extrabold tracking-tight flex items-center gap-2">
          📌 나만의 체크 단어장
        </h2>
        <p className="text-xs opacity-90 mt-1 leading-relaxed max-w-xl font-medium">
          어려웠거나 다시 확인하고 싶은 기구 단어들의 모음집입니다. 체크해둔 단어만 골라서 집중적으로 시험하고 외울 수 있습니다.
        </p>
      </div>

      {markedItems.length === 0 ? (
        // Empty state
        <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 py-16 px-4 text-center">
          <span className="text-5xl mb-4 block">📌</span>
          <h3 className="text-sm font-bold text-slate-700">체크된 단어가 없습니다</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
            목록학습이나 플래시카드 화면에서 기억이 나지 않는 단어들을 <span className="text-yellow-500 font-bold">★ 별표</span> 클릭하여 추가해보세요!
          </p>
        </div>
      ) : (
        // Bookmarked items list
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {markedItems.map((item) => {
            const isFlipped = flippedCards.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="bg-white rounded-2xl border-2 border-amber-100 bg-amber-50/5 p-4 shadow-sm hover:shadow-md transition-all relative cursor-pointer"
              >
                {/* Action buttons inside card */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => speakEnglish(item.eng)}
                    className="p-1.5 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 transition-all"
                    title="발음 듣기"
                  >
                    <Volume2 size={15} />
                  </button>
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className="p-1.5 rounded-lg bg-rose-50 text-rose-500 hover:bg-rose-100 transition-all"
                    title="단어장 해제"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                {/* Card body */}
                <div>
                  <span className="bg-amber-100 text-amber-800 text-[9px] px-2 py-0.5 rounded-full font-bold inline-block mb-2">
                    {item.chapterName}
                  </span>
                  <h3 className="text-sm md:text-base font-black text-slate-800 font-mono tracking-tight">
                    {item.eng}
                  </h3>
                  <p className="text-xs text-indigo-500 font-semibold mt-0.5">{item.pron}</p>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-800 bg-amber-100/50 inline-block px-1.5 py-0.5 rounded text-amber-900">
                      {item.kor}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
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

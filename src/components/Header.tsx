import { BookOpen, Award, Layers, ClipboardList, Bookmark } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: any) => void;
  bookmarksCount: number;
}

export default function Header({ currentTab, setCurrentTab, bookmarksCount }: HeaderProps) {
  return (
    <header id="appHeader" className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-row items-center justify-between gap-4">
        {/* Title Block */}
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md shadow-indigo-100 flex items-center justify-center">
            <Award size={24} className="animate-pulse" />
          </div>
          <div>
            <h1 className="text-[15px] sm:text-base font-black text-slate-800 tracking-tight flex items-center flex-wrap gap-1.5 leading-none">
              치위생 임상 기구 단어장
              <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-bold border border-indigo-100">
                InstruVocab
              </span>
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 leading-none hidden sm:block">치위생 임상 기구 및 핵심 정형화 전문 용어 자가 학습 가이드</p>
          </div>
        </div>

        {/* Stats Grid - Hidden on mobile, shown on md and larger */}
        <div className="hidden md:flex items-center gap-3">
          {/* Navigation Control inside header */}
          <div className="bg-slate-100/80 p-1 rounded-xl flex items-center gap-1">
            <button
              id="studyTabBtn"
              onClick={() => setCurrentTab('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                currentTab === 'list'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              <BookOpen size={14} /> 목록학습
            </button>
            <button
              id="flashcardTabBtn"
              onClick={() => setCurrentTab('flashcard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                currentTab === 'flashcard'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              <Layers size={14} /> 플래시카드
            </button>
            <button
              id="quizTabBtn"
              onClick={() => setCurrentTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                currentTab === 'quiz'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              <ClipboardList size={14} /> 마스터퀴즈
            </button>
            <button
              id="bookmarksTabBtn"
              onClick={() => setCurrentTab('bookmarks')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 relative ${
                currentTab === 'bookmarks'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              <Bookmark size={14} /> 체크 단어장
              {bookmarksCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-bounce">
                  {bookmarksCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

import { BookOpen, CheckSquare, Award } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: any) => void;
  bookmarksCount: number;
}

export default function Header({ currentTab, setCurrentTab, bookmarksCount }: HeaderProps) {
  return (
    <header id="appHeader" className="bg-white border-b-2 border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title Block */}
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-100 flex items-center justify-center">
            <Award size={28} className="animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
              치의학 기구 · 도구 단어장
              <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-semibold border border-indigo-100">
                Dental Instruments
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-medium">임상 현장과 시험에 필수적인 치과 기구를 완벽하게 마스터하세요!</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Navigation Control inside header */}
          <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1">
            <button
              id="studyTabBtn"
              onClick={() => setCurrentTab('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTab === 'list'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              📖 목록학습
            </button>
            <button
              id="flashcardTabBtn"
              onClick={() => setCurrentTab('flashcard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTab === 'flashcard'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              🃏 플래시카드
            </button>
            <button
              id="quizTabBtn"
              onClick={() => setCurrentTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTab === 'quiz'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              📝 퀴즈풀기
            </button>
            <button
              id="bookmarksTabBtn"
              onClick={() => setCurrentTab('bookmarks')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all relative ${
                currentTab === 'bookmarks'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              📌 체크 단어장
              {bookmarksCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-bounce">
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

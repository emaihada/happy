import React, { useState, useEffect } from 'react';
import { VocabItem } from '../types';
import { VOCAB_DATA } from '../data/vocabData';
import { Check, X, Award, RotateCcw, HelpCircle, Star } from 'lucide-react';

interface QuizTabProps {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}

export default function QuizTab({ bookmarks, toggleBookmark }: QuizTabProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [quizPool, setQuizPool] = useState<VocabItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [quizSize, setQuizSize] = useState<number | 'all'>(10);
  const [quizType, setQuizType] = useState<'multiple-choice' | 'typing'>('multiple-choice');

  // Question state
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [typingSubmitted, setTypingSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  // Review states
  const [wrongAnswers, setWrongAnswers] = useState<{ item: VocabItem; userAnswer: string }[]>([]);

  // Unique chapters helper
  const chapters = Array.from(
    new Set(VOCAB_DATA.map((i) => JSON.stringify({ id: i.chapterId, name: i.chapterName })))
  ).map((str) => JSON.parse(str) as { id: string; name: string });

  // Filtered vocabulary count based on selected chapter
  const currentChapterItemsCount = selectedChapter === 'all'
    ? VOCAB_DATA.length
    : VOCAB_DATA.filter((i) => i.chapterId === selectedChapter).length;

  const handleStartQuiz = () => {
    let filtered = VOCAB_DATA;
    if (selectedChapter !== 'all') {
      filtered = VOCAB_DATA.filter((item) => item.chapterId === selectedChapter);
    }
    
    // Shuffle the filtered pool
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const poolSize = quizSize === 'all' ? shuffled.length : Math.min(quizSize, shuffled.length);
    const pool = shuffled.slice(0, poolSize);
    
    setQuizPool(pool);
    setCurrentIndex(0);
    setScore(0);
    setQuizStarted(true);
    setCompleted(false);
    setWrongAnswers([]);
    resetAnswers();
  };


  const resetAnswers = () => {
    setSelectedOption(null);
    setTypedAnswer('');
    setTypingSubmitted(false);
  };

  useEffect(() => {
    if (quizPool.length > 0 && currentIndex < quizPool.length) {
      const current = quizPool[currentIndex];
      if (quizType === 'multiple-choice') {
        const others = VOCAB_DATA.filter((i) => i.kor !== current.kor)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((i) => i.kor);
        const deck = [...others, current.kor].sort(() => Math.random() - 0.5);
        setOptions(deck);
      }
    }
  }, [quizPool, currentIndex, quizType]);

  const handleOptionSelect = (option: string) => {
    if (selectedOption !== null) return; // Prevent double submit
    const current = quizPool[currentIndex];
    setSelectedOption(option);
    const correct = option === current.kor;
    setIsCorrect(correct);
    if (correct) {
      setScore((s) => s + 1);
    } else {
      setWrongAnswers((prev) => [...prev, { item: current, userAnswer: option }]);
    }
    setTimeout(() => {
      advanceQuestion();
    }, 1500);
  };

  const handleTypingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typingSubmitted) return;
    const current = quizPool[currentIndex];
    const user = typedAnswer.trim().toLowerCase();
    const target = current.eng.trim().toLowerCase();
    const correct = user === target;

    setTypingSubmitted(true);
    setIsCorrect(correct);
    if (correct) {
      setScore((s) => s + 1);
    } else {
      setWrongAnswers((prev) => [...prev, { item: current, userAnswer: typedAnswer }]);
    }

    setTimeout(() => {
      advanceQuestion();
    }, 2000);
  };

  const advanceQuestion = () => {
    if (currentIndex + 1 < quizPool.length) {
      resetAnswers();
      setCurrentIndex((p) => p + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div id="quizTabContent" className="max-w-xl mx-auto px-4 py-4 md:py-8 pb-16">
      {!quizStarted ? (
        // Quiz config panel
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-5 sm:p-6 text-center">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-100/50 shadow-sm">
            <Award size={22} className="text-indigo-600" />
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-800 mb-1">치위생 보존과/보철과 기구 마스터 퀴즈</h2>
          <p className="text-xs text-slate-400 mb-5 max-w-sm mx-auto leading-relaxed">
            무작위로 제시되는 다지선다 또는 영문 기입 테스트로 기구 지식을 가볍게 점검해보세요.
          </p>

          <div className="text-left space-y-4 max-w-sm mx-auto mb-6 bg-slate-50/70 p-4 rounded-xl border border-slate-150/40">
            {/* Choose Chapter */}
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2">테스트 단원(진료과목) 선택</label>
              <select
                id="quizChapterSelect"
                value={selectedChapter}
                onChange={(e) => {
                  setSelectedChapter(e.target.value);
                  setQuizSize(10); // reset to default number when chapter changes
                }}
                className="w-full bg-white text-slate-700 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:outline-none transition-all"
              >
                <option value="all">🌐 전체 단원 통합 무작위 시험</option>
                {chapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    🩺 {ch.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Choose Quiz Type */}
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2">테스트 출제 방식</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="choiceQuizTypeBtn"
                  onClick={() => setQuizType('multiple-choice')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all border ${
                    quizType === 'multiple-choice'
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-md shadow-indigo-100'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  🎯 4지선다 기구선택
                </button>
                <button
                  id="typingQuizTypeBtn"
                  onClick={() => setQuizType('typing')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all border ${
                    quizType === 'typing'
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-md shadow-indigo-100'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  ⌨️ 영문 철자기입형
                </button>
              </div>
            </div>

            {/* Choose Q magnitude */}
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2 flex justify-between items-center">
                <span>문항 개수</span>
                <span className="text-[9px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full font-bold">
                  최대 {currentChapterItemsCount}문항 사용가능
                </span>
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {[5, 10, 15, 20].map((size) => {
                  const isDisabled = currentChapterItemsCount < size;
                  return (
                    <button
                      key={size}
                      disabled={isDisabled}
                      onClick={() => setQuizSize(size)}
                      className={`py-2 rounded-xl text-xs font-extrabold transition-all border ${
                        isDisabled
                          ? 'opacity-30 cursor-not-allowed bg-slate-150 text-slate-300 border-slate-200'
                          : quizSize === size
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-200'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
                <button
                  onClick={() => setQuizSize('all')}
                  className={`py-2 rounded-xl text-xs font-extrabold transition-all border ${
                    quizSize === 'all'
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-200'
                  }`}
                >
                  ALL
                </button>
              </div>
            </div>
          </div>

          <button
            id="startQuizBtn"
            onClick={handleStartQuiz}
            className="w-full bg-indigo-600 text-white py-3.5 rounded-2xl text-xs font-black hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 tracking-wide transition-all active:scale-95"
          >
            🚀 {selectedChapter === 'all' ? '과목 통합' : '선택 과목'} 퀴즈 격파 시작 ({quizSize === 'all' ? `${currentChapterItemsCount}` : `${quizSize}`}문제)
          </button>
        </div>
      ) : completed ? (
        // Summary Report panel
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgb(0,0,0,0.04)] p-5 sm:p-6">
          <div className="text-center mb-5">
            <span className="text-3xl">🎉</span>
            <h2 className="text-base sm:text-lg font-black text-slate-900 mt-2">퀴즈를 무사히 격파했습니다!</h2>
            <p className="text-xs text-slate-400 font-medium mt-1">틀렸던 임상 기구들을 복기하며 한 번 더 숙지해 보세요.</p>
          </div>

          {/* Statistics Box */}
          <div className="grid grid-cols-3 gap-3 text-center mb-6">
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3">
              <span className="text-[10px] font-black text-emerald-700 block mb-0.5">정답 문항</span>
              <span className="font-mono text-lg font-black text-emerald-800">{score}</span>
            </div>
            <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3">
              <span className="text-[10px] font-black text-rose-700 block mb-0.5">틀린 문제</span>
              <span className="font-mono text-lg font-black text-rose-800">{quizPool.length - score}</span>
            </div>
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-3">
              <span className="text-[10px] font-black text-indigo-700 block mb-0.5 font-bold">정체 정답률</span>
              <span className="font-mono text-lg font-black text-indigo-800">
                {Math.round((score / quizPool.length) * 100)}%
              </span>
            </div>
          </div>

          {/* Wrong answers review with Bookmark checkboxes inside each card */}
          {wrongAnswers.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3.5 px-0.5">
                <h3 className="text-xs font-black text-slate-400">🚨 체크 집중 오답 분석</h3>
                <span className="text-[10px] text-indigo-500 font-bold">* 여기서 바로 우측 단어장에 별표 가능</span>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {wrongAnswers.map((w, idx) => {
                  const isBookmarked = bookmarks.has(w.item.id);
                  return (
                    <div key={idx} className="bg-slate-50 border border-slate-150/40 rounded-xl p-3 text-left flex items-center justify-between gap-3 relative hover:shadow-sm transition-all duration-150">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1 text-[9px]">
                          <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-black border border-indigo-100/30">
                            {w.item.chapterName}
                          </span>
                        </div>
                        <p className="font-mono text-xs font-black text-slate-800 truncate">{w.item.eng}</p>
                        <div className="flex items-center gap-3 mt-2 text-[11px] flex-wrap font-semibold">
                          <span className="text-rose-500 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded leading-none">오답: {w.userAnswer || '(공란)'}</span>
                          <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded leading-none">정답: {quizType === 'multiple-choice' ? w.item.kor : w.item.eng}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleBookmark(w.item.id)}
                        className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all border ${
                          isBookmarked
                            ? 'bg-amber-50 border-amber-200 text-amber-500 shadow-inner'
                            : 'bg-white border-slate-200 text-slate-400 hover:text-amber-500'
                        }`}
                        title="단어 책마크 토글"
                      >
                        <Star size={14} fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button
              id="quizRetryBtn"
              onClick={handleStartQuiz}
              className="flex-1 bg-indigo-600 text-white rounded-xl py-3 text-xs font-black hover:bg-indigo-750 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} /> 다시 풀기
            </button>
            <button
              id="quizResetConfigBtn"
              onClick={() => setQuizStarted(false)}
              className="flex-1 bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-1.5/50 rounded-xl py-3 text-xs font-black transition-all"
            >
              설정 변경
            </button>
          </div>
        </div>
      ) : (
        // Active Quiz progress
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgb(0,0,0,0.03)] p-5 sm:p-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4 overflow-hidden">
            <div
              id="quizProgressBar"
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / quizPool.length) * 100}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between mb-5 px-0.5">
            <span className="text-xs font-black text-slate-400">
              문제 {currentIndex + 1} <span className="opacity-40">/</span> {quizPool.length}
            </span>
            <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">맞춘 개수: {score}개</span>
          </div>

          {/* Question area */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-5 text-center">
            {quizType === 'multiple-choice' ? (
              // Multiple Choice: English vocabulary word is the question, guess the meaning
              <div>
                <span className="text-[10px] uppercase font-black text-indigo-500 tracking-wider">알맞은 의미 교정 선택</span>
                <h3 className="text-lg sm:text-xl font-mono font-black tracking-tight text-slate-800 select-none mt-1.5 mb-1.5">
                  {quizPool[currentIndex].eng}
                </h3>
                <p className="text-xs text-slate-450 font-bold bg-slate-200/50 inline-block px-2 py-0.5 rounded-md font-mono">{quizPool[currentIndex].pron}</p>
              </div>
            ) : (
              // Typing: The Korean meanings and usage description is the question, guess the English word
              <div>
                <span className="text-[10px] uppercase font-black text-rose-500 tracking-wider">기구 영어 철자 입력형</span>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-800 select-none mt-2 mb-2">
                  {quizPool[currentIndex].kor}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold bg-white p-2.5 rounded-xl border border-slate-150/40 text-left">
                  {quizPool[currentIndex].description}
                </p>
              </div>
            )}
          </div>

          {/* Multiple choice options rendering */}
          {quizType === 'multiple-choice' && (
            <div className="grid grid-cols-1 gap-2 mb-2" id="quizOptionsContainer">
              {options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrectAns = option === quizPool[currentIndex].kor;

                let btnStyle = 'border-slate-105 bg-slate-50/50 hover:border-indigo-300 text-slate-700 active:scale-98';
                if (selectedOption !== null) {
                  if (isSelected) {
                    btnStyle = isCorrectAns
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800 scale-100 ring-2 ring-emerald-100'
                      : 'bg-rose-50 border-rose-500 text-rose-800 scale-100 ring-2 ring-rose-100';
                  } else if (isCorrectAns) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-100';
                  } else {
                    btnStyle = 'opacity-40 border-slate-100 text-slate-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left py-3 px-4 rounded-xl border text-xs sm:text-xs font-black transition-all relative flex items-center justify-between ${btnStyle} min-h-[48px]`}
                  >
                    <span>{idx + 1}. {option}</span>
                    {selectedOption !== null && isCorrectAns && <Check size={16} className="text-emerald-600" />}
                    {selectedOption !== null && isSelected && !isCorrectAns && <X size={16} className="text-rose-600" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* Typing entry rendering */}
          {quizType === 'typing' && (
            <form onSubmit={handleTypingSubmit} className="space-y-4 mb-2" id="quizTypingForm">
              <div className="relative">
                <input
                  type="text"
                  id="typedAnswerInput"
                  disabled={typingSubmitted}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  placeholder="영어 정답 기구명을 정확하게 입력..."
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  className={`w-full bg-slate-50/70 px-4 py-3 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-mono font-extrabold border ${
                    typingSubmitted
                      ? isCorrect
                        ? 'border-emerald-500 bg-emerald-50/50 text-emerald-800'
                        : 'border-rose-500 bg-rose-50/50 text-rose-800'
                      : 'border-slate-200 text-slate-800'
                  }`}
                />
                {typingSubmitted && (
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                    {isCorrect ? (
                      <Check size={18} className="text-emerald-600" />
                    ) : (
                      <X size={18} className="text-rose-600" />
                    )}
                  </span>
                )}
              </div>

              {typingSubmitted && (
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-150/40 text-left animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-slate-400 font-extrabold pb-1 uppercase">정답 해설 지침</span>
                  </div>
                  <p className="text-xs font-black text-emerald-600 font-mono mt-0.5">{quizPool[currentIndex].eng}</p>
                  <p className="text-[10px] text-slate-500 mt-1 font-semibold">{quizPool[currentIndex].pron}</p>
                </div>
              )}

              {!typingSubmitted ? (
                <button
                  type="submit"
                  id="submitTypingAnswerBtn"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl text-xs font-black transition-all active:scale-95"
                >
                  제출 및 정답확인 (Submit)
                </button>
              ) : (
                <div className="text-center text-[10px] text-indigo-500 font-black flex items-center justify-center gap-1.5 bg-indigo-50/40 p-2 rounded-xl border border-indigo-100/30">
                  <HelpCircle size={12} className="animate-spin text-indigo-600" /> 다음 문항으로 롤링되고 있습니다...
                </div>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  );
}

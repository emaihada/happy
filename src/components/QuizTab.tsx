import React, { useState, useEffect } from 'react';
import { VocabItem } from '../types';
import { VOCAB_DATA } from '../data/vocabData';
import { Check, X, Award, RotateCcw, Volume2, HelpCircle, Star } from 'lucide-react';

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

  // Sound speak
  const speakEnglish = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

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
    <div id="quizTabContent" className="max-w-xl mx-auto px-4 py-8">
      {!quizStarted ? (
        // Quiz config panel
        <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-6 text-center">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-100 shadow-sm text-2xl">
            ✍️
          </div>
          <h2 className="text-[17px] font-extrabold text-slate-800 mb-2">치의학 기구 마스터 퀴즈</h2>
          <p className="text-xs text-slate-400 mb-6 font-medium leading-relaxed">
            랜덤하게 출제되는 기구 이름과 의미를 맞추며 실력을 검증해 보세요!
          </p>

          <div className="text-left space-y-4 max-w-sm mx-auto mb-8 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
            {/* Choose Chapter */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2">테스트 단원(챕터) 선택</label>
              <select
                id="quizChapterSelect"
                value={selectedChapter}
                onChange={(e) => {
                  setSelectedChapter(e.target.value);
                  setQuizSize(10); // reset to default number when chapter changes
                }}
                className="w-full bg-white text-slate-700 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">🌐 전체 단원 무작위 통합 테스트</option>
                {chapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    🩺 {ch.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Choose Quiz Type */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2">테스트 방식 선택</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="choiceQuizTypeBtn"
                  onClick={() => setQuizType('multiple-choice')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                    quizType === 'multiple-choice'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  🎯 4지선다 선택형
                </button>
                <button
                  id="typingQuizTypeBtn"
                  onClick={() => setQuizType('typing')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                    quizType === 'typing'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  ⌨️ 영문 철자기입형
                </button>
              </div>
            </div>

            {/* Choose Q magnitude */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 flex justify-between items-center">
                <span>문항 수 설정</span>
                <span className="text-[10px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold">
                  최대 {currentChapterItemsCount}문제 가용
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
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        isDisabled
                          ? 'opacity-30 cursor-not-allowed bg-slate-100 text-slate-300 border-slate-200'
                          : quizSize === size
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
                <button
                  onClick={() => setQuizSize('all')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    quizSize === 'all'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
                  }`}
                >
                  모두풀기
                </button>
              </div>
            </div>
          </div>

          <button
            id="startQuizBtn"
            onClick={handleStartQuiz}
            className="w-full bg-indigo-600 text-white py-3.5 rounded-2xl text-xs font-black hover:bg-indigo-700 shadow-lg shadow-indigo-100 tracking-wide transition-all"
          >
            🔥 {selectedChapter === 'all' ? '전체 챕터 통합' : '선택 챕터'} 퀴즈 시작하기 ({quizSize === 'all' ? `${currentChapterItemsCount}문항` : `${quizSize}문항`})
          </button>
        </div>
      ) : completed ? (
        // Summary Report panel
        <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-6">
          <div className="text-center mb-6">
            <span className="text-4xl">🏆</span>
            <h2 className="text-[17px] font-extrabold text-indigo-900 mt-2">퀴즈를 모두 완료했습니다!</h2>
            <p className="text-xs text-slate-400 font-medium">당신의 뛰어난 지적 도전에 갈채를 보냅니다.</p>
          </div>

          {/* Statistics Box */}
          <div className="grid grid-cols-3 gap-3 text-center mb-6">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3">
              <span className="text-xs font-bold text-emerald-700 block mb-0.5">정답</span>
              <span className="font-mono text-xl font-black text-emerald-800">{score}</span>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-3">
              <span className="text-xs font-bold text-rose-700 block mb-0.5">오답</span>
              <span className="font-mono text-xl font-black text-rose-800">{quizPool.length - score}</span>
            </div>
            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-3">
              <span className="text-xs font-bold text-violet-700 block mb-0.5">정답률</span>
              <span className="font-mono text-xl font-black text-violet-800">
                {Math.round((score / quizPool.length) * 100)}%
              </span>
            </div>
          </div>

          {/* Wrong answers review */}
          {wrongAnswers.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-extrabold text-slate-500">오답 다시 보고 체크하기</h3>
                <span className="text-[10px] text-slate-400 font-medium">* 여기서 바로 단어장을 북마크할 수 있습니다</span>
              </div>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {wrongAnswers.map((w, idx) => {
                  const isBookmarked = bookmarks.has(w.item.id);
                  return (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left flex items-center justify-between gap-3 relative hover:shadow-sm transition-all duration-150">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1 text-[9px]">
                          <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">
                            {w.item.chapterName}
                          </span>
                        </div>
                        <p className="font-mono text-xs font-bold text-indigo-900 truncate">{w.item.eng}</p>
                        <div className="flex items-center gap-2 mt-1.5 text-[11px] flex-wrap">
                          <span className="text-rose-500 font-bold">오답: {w.userAnswer || '(공란)'}</span>
                          <span className="text-emerald-600 font-bold">정답: {quizType === 'multiple-choice' ? w.item.kor : w.item.eng}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleBookmark(w.item.id)}
                        className={`p-2 rounded-lg transition-all flex-shrink-0 ${
                          isBookmarked
                            ? 'bg-amber-100 text-amber-600'
                            : 'bg-white border border-slate-200 text-slate-400 hover:text-amber-500 hover:bg-amber-50'
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
              className="flex-1 bg-indigo-600 text-white rounded-2xl py-3 text-xs font-black hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} /> 다시 풀기
            </button>
            <button
              id="quizResetConfigBtn"
              onClick={() => setQuizStarted(false)}
              className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-2xl py-3 text-xs font-bold transition-all"
            >
              설정 화면으로
            </button>
          </div>
        </div>
      ) : (
        // Active Quiz progress
        <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-xl p-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
            <div
              id="quizProgressBar"
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / quizPool.length) * 100}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-400">
              문제 {currentIndex + 1} / {quizPool.length}
            </span>
            <span className="text-xs font-black text-indigo-600">성적: {score}점</span>
          </div>

          {/* Question area */}
          <div className="bg-indigo-50/30 rounded-2xl p-5 border border-indigo-50/50 mb-6 text-center">
            {quizType === 'multiple-choice' ? (
              // Multiple Choice: English vocabulary word is the question, guess the meaning
              <div>
                <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">의미를 고르세요</span>
                <h3 className="text-xl font-bold font-mono tracking-tight text-slate-800 select-none mt-1 mb-2">
                  {quizPool[currentIndex].eng}
                </h3>
                <p className="text-xs text-slate-400">{quizPool[currentIndex].pron}</p>
              </div>
            ) : (
              // Typing: The Korean meanings and usage description is the question, guess the English word
              <div>
                <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">영여 기구명을 쓰세요</span>
                <h3 className="text-lg font-bold tracking-tight text-indigo-900 select-none mt-2 mb-2">
                  {quizPool[currentIndex].kor}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold bg-white pr-2 pl-2 pt-1 pb-1 rounded border border-indigo-50">
                  {quizPool[currentIndex].description}
                </p>
              </div>
            )}
          </div>

          {/* Multiple choice options rendering */}
          {quizType === 'multiple-choice' && (
            <div className="grid grid-cols-1 gap-2 mb-4" id="quizOptionsContainer">
              {options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrectAns = option === quizPool[currentIndex].kor;

                let btnStyle = 'border-slate-100 hover:border-indigo-100 hover:bg-slate-50 text-slate-700';
                if (selectedOption !== null) {
                  if (isSelected) {
                    btnStyle = isCorrectAns
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-rose-50 border-rose-500 text-rose-700';
                  } else if (isCorrectAns) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-700';
                  } else {
                    btnStyle = 'opacity-50 border-slate-100 text-slate-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left py-3 px-4 rounded-xl border-2 text-xs font-bold transition-all relative flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{idx + 1}. {option}</span>
                    {selectedOption !== null && isCorrectAns && <Check size={16} className="text-emerald-500" />}
                    {selectedOption !== null && isSelected && !isCorrectAns && <X size={16} className="text-rose-500" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* Typing entry rendering */}
          {quizType === 'typing' && (
            <form onSubmit={handleTypingSubmit} className="space-y-4 mb-4" id="quizTypingForm">
              <div className="relative">
                <input
                  type="text"
                  id="typedAnswerInput"
                  disabled={typingSubmitted}
                  placeholder="정답인 영어 기구명을 정확히 입력하세요..."
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  className={`w-full bg-slate-50 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono font-bold border ${
                    typingSubmitted
                      ? isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                        : 'border-rose-500 bg-rose-50 text-rose-800'
                      : 'border-slate-200 text-slate-800'
                  }`}
                />
                {typingSubmitted && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isCorrect ? (
                      <Check size={20} className="text-emerald-500" />
                    ) : (
                      <X size={20} className="text-rose-500" />
                    )}
                  </span>
                )}
              </div>

              {typingSubmitted && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-left animate-fadeIn">
                  <p className="text-[11px] text-slate-400 font-bold">정답 확인</p>
                  <p className="text-xs font-bold text-emerald-600 font-mono mt-0.5">{quizPool[currentIndex].eng}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{quizPool[currentIndex].pron}</p>
                </div>
              )}

              {!typingSubmitted ? (
                <button
                  type="submit"
                  id="submitTypingAnswerBtn"
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all"
                >
                  🔧 제출하기 (Submit)
                </button>
              ) : (
                <div className="text-center text-[11px] text-indigo-500 font-semibold italic flex items-center justify-center gap-1.5">
                  <HelpCircle size={14} className="animate-spin" /> 다음 문제로 넘어가고 있습니다...
                </div>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  );
}

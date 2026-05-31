export interface VocabItem {
  id: string;
  eng: string;
  pron: string;
  kor: string;
  sub?: string;
  chapterId: string;
  chapterName: string;
  description: string;
}

export type StudyMode = 'list' | 'flashcard' | 'quiz' | 'bookmarks';
export type QuizType = 'multiple-choice' | 'matching' | 'typing';

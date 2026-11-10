import { useState, useEffect, useRef } from 'react';
import { Question, Letter } from '../data/quiz';
import { Header } from './Header';
import { Option } from './Option';

interface QuizProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: Letter;
  onAnswer: (letter: Letter) => void;
  onBack: () => void;
}

const KEY_TO_LETTER: Record<string, Letter> = {
  a: 'A',
  A: 'A',
  '1': 'A',
  b: 'B',
  B: 'B',
  '2': 'B',
  c: 'C',
  C: 'C',
  '3': 'C',
  d: 'D',
  D: 'D',
  '4': 'D',
  e: 'E',
  E: 'E',
  '5': 'E',
};

export const Quiz: React.FC<QuizProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onBack,
}) => {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(
    selectedAnswer || null
  );
  const [isAdvancing, setIsAdvancing] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync selected answer when question changes
  useEffect(() => {
    setSelectedLetter(selectedAnswer || null);
    setIsAdvancing(false);
  }, [currentIndex, selectedAnswer]);

  // Clean up any pending timer
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSelect = (letter: Letter) => {
    if (isAdvancing) return;

    setSelectedLetter(letter);
    setIsAdvancing(true);

    timerRef.current = setTimeout(() => {
      onAnswer(letter);
    }, 250);
  };

  // Keyboard navigation: A-E / 1-5 select, ArrowLeft / Backspace back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is inside an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0 && !isAdvancing) {
          e.preventDefault();
          onBack();
        }
        return;
      }

      const letter = KEY_TO_LETTER[e.key];
      if (letter && !isAdvancing) {
        e.preventDefault();
        handleSelect(letter);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isAdvancing, onBack]);

  const canGoBack = currentIndex > 0;

  return (
    <div className="screen-enter quiz-screen">
      <Header currentIndex={currentIndex} totalQuestions={totalQuestions} />

      <main>
        {/* Question Panel with slanted right edge motif */}
        <section
          className="question-panel"
          aria-labelledby={`q-${question.id}-heading`}
        >
          <div className="question-number-tag">
            CÂU HỎI {question.id} TRÊN {totalQuestions}
          </div>
          <h2 id={`q-${question.id}-heading`} className="question-title">
            {question.question}
          </h2>
        </section>

        {/* Options Radiogroup */}
        <div
          className="options-list"
          role="radiogroup"
          aria-labelledby={`q-${question.id}-heading`}
        >
          {question.options.map((opt) => (
            <Option
              key={opt.letter}
              letter={opt.letter}
              text={opt.text}
              isSelected={selectedLetter === opt.letter}
              isDisabled={isAdvancing}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Bottom Navigation */}
        <footer className="quiz-nav">
          {canGoBack ? (
            <button
              type="button"
              className="btn-back"
              onClick={onBack}
              disabled={isAdvancing}
              aria-label="Quay lại câu hỏi trước"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Quay lại</span>
            </button>
          ) : (
            <div />
          )}

          <span className="quiz-hint" aria-hidden="true">
            Phím tắt: A–E / 1–5 {canGoBack ? '• ← Quay lại' : ''}
          </span>
        </footer>
      </main>
    </div>
  );
};

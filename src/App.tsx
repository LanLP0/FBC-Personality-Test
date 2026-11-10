import { useState } from 'react';
import { QUESTIONS, Letter } from './data/quiz';
import { getScoreResult } from './lib/score';
import { Start } from './components/Start';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';

type Screen = 'start' | 'quiz' | 'result';

export const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('start');
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Letter[]>([]);

  const handleStart = () => {
    setIndex(0);
    setAnswers([]);
    setScreen('quiz');
  };

  const handleAnswer = (letter: Letter) => {
    const updatedAnswers = [...answers.slice(0, index), letter];
    setAnswers(updatedAnswers);

    if (index < QUESTIONS.length - 1) {
      setIndex(index + 1);
    } else {
      setScreen('result');
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleRetake = () => {
    setScreen('start');
    setIndex(0);
    setAnswers([]);
  };

  const scoreResult = getScoreResult(answers);

  return (
    <div className="app-container">
      {screen === 'start' && <Start onStart={handleStart} />}

      {screen === 'quiz' && (
        <Quiz
          question={QUESTIONS[index]}
          currentIndex={index}
          totalQuestions={QUESTIONS.length}
          selectedAnswer={answers[index]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}

      {screen === 'result' && (
        <Result scoreResult={scoreResult} onRetake={handleRetake} />
      )}
    </div>
  );
};

export default App;

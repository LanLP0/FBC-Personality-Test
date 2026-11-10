import fbcLogo from '../assets/FBC_logo.png';

interface HeaderProps {
  currentIndex?: number;
  totalQuestions?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentIndex,
  totalQuestions = 5,
}) => {
  const isQuiz = typeof currentIndex === 'number';
  const progressPercent = isQuiz
    ? Math.round(((currentIndex + 1) / totalQuestions) * 100)
    : 0;

  return (
    <header className="app-header">
      <img
        src={fbcLogo}
        alt="FBC Logo"
        className="fbc-logo-img"
      />

      {isQuiz && (
        <div
          className="quiz-progress-wrap"
          aria-label={`Tiến độ làm bài: Câu ${currentIndex + 1} trên ${totalQuestions}`}
        >
          <span className="quiz-progress-text">
            Câu {currentIndex + 1}/{totalQuestions}
          </span>
          <div
            className="quiz-progress-bar-track"
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalQuestions}
          >
            <div
              className="quiz-progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

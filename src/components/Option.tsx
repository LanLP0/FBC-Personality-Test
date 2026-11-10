import { Letter } from '../data/quiz';

interface OptionProps {
  letter: Letter;
  text: string;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: (letter: Letter) => void;
}

export const Option: React.FC<OptionProps> = ({
  letter,
  text,
  isSelected,
  isDisabled,
  onSelect,
}) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      disabled={isDisabled}
      className={`option-btn ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(letter)}
    >
      <span className="option-marker">{letter}</span>
      <span className="option-text">{text}</span>
    </button>
  );
};

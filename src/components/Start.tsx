import { Header } from './Header';

interface StartProps {
  onStart: () => void;
}

export const Start: React.FC<StartProps> = ({ onStart }) => {
  return (
    <div className="screen-enter start-screen">
      <Header />

      <span className="start-badge">First Class Career Fit Test</span>

      <h1 className="start-title">Bộ câu hỏi First Class Security Check</h1>

      <p className="start-desc">
        Khám phá trạm dừng sự nghiệp và tấm vé Boarding Pass First Class dành riêng cho bạn thông qua 5 câu hỏi tình huống thực tế.
      </p>

      <div className="start-rules">
        <div className="start-rules-title">
          <span>Quy chế kiểm tra an ninh (Security Rules):</span>
        </div>
        <ul className="start-rules-list">
          <li>Gồm 5 câu hỏi nhanh, mỗi câu chọn 1 đáp án phù hợp nhất.</li>
          <li>Có thể quay lại câu trước bằng nút Quay lại hoặc phím mũi tên trái (←).</li>
          <li>Phím tắt tiện lợi: Bấm phím A–E hoặc 1–5 để chọn đáp án.</li>
        </ul>
      </div>

      <button
        type="button"
        className="btn-primary"
        onClick={onStart}
        autoFocus
      >
        <span>Bắt đầu kiểm tra</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
};

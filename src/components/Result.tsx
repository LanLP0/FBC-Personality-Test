import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { TRACKS, Letter } from '../data/quiz';
import { ScoreResult } from '../lib/score';
import { Header } from './Header';
import { BoardingPass } from './BoardingPass';

interface ResultProps {
  scoreResult: ScoreResult;
  onRetake: () => void;
}

export const Result: React.FC<ResultProps> = ({ scoreResult, onRetake }) => {
  const track = TRACKS[scoreResult.trackId];
  const passRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportError, setExportError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!passRef.current || isExporting) return;

    try {
      setIsExporting(true);
      setExportError(null);

      const dataUrl = await toPng(passRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#FFFFFF',
        style: {
          margin: '0',
          boxShadow: 'none',
          '--notch-bg': '#FFFFFF',
          '--notch-border': '#D1D5DB',
        } as any,
      });

      const link = document.createElement('a');
      link.download = `First-Class-Boarding-Pass-${track.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export boarding pass as image:', err);
      setExportError('Không thể tạo file ảnh. Vui lòng thử lại sau.');
    } finally {
      setIsExporting(false);
    }
  };

  const letterText = scoreResult.isTie
    ? 'E hoặc chọn đều'
    : (scoreResult.winnerLetter as Letter);

  return (
    <div className="screen-enter result-screen">
      <Header />

      {/* Result Copy Banner */}
      <section className="result-lead-banner">
        <span className="start-badge">First Class Career Fit Test</span>
        <h1 className="result-lead-text">
          Nếu hầu hết câu trả lời là <strong>{letterText}</strong> thì bạn là…{' '}
          <span className="result-lead-track">{track.name}</span>
        </h1>
      </section>

      {/* Boarding Pass Ticket */}
      <BoardingPass
        ref={passRef}
        track={track}
        gateCode={scoreResult.isTie ? 'E1' : `${scoreResult.winnerLetter}1`}
      />

      {/* Below Card: Track info & 3-item skillset */}
      <section className="result-details-box">
        <h2 className="result-track-title">
          <span>{track.name}</span>
          <span className="result-track-badge">FIRST CLASS</span>
        </h2>

        <div className="result-skillset-label">Bộ kỹ năng cốt lõi (Core Skillset)</div>
        <ul className="result-skillset-list">
          {track.skillset.map((skill, index) => (
            <li key={index} className="result-skillset-item">
              <span className="result-skillset-bullet" aria-hidden="true" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>

      {exportError && (
        <div style={{ color: '#FFA4A4', fontSize: '0.85rem', marginBottom: '16px' }}>
          {exportError}
        </div>
      )}

      {/* Action Buttons */}
      <div className="result-actions">
        <button
          type="button"
          className="btn-primary"
          onClick={handleDownload}
          disabled={isExporting}
        >
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>{isExporting ? 'Đang tạo vé…' : 'Tải vé (Save Pass)'}</span>
        </button>

        <button
          type="button"
          className="btn-secondary"
          onClick={onRetake}
        >
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
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          <span>Làm lại (Retake)</span>
        </button>
      </div>
    </div>
  );
};

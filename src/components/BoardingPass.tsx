import { forwardRef } from 'react';
import { TrackInfo } from '../data/quiz';

interface BoardingPassProps {
  track: TrackInfo;
  gateCode?: string;
}

function generateBarcodeBars(code: string, totalWidth = 360) {
  const bars: Array<{ x: number; width: number }> = [];
  let currentX = 8;
  const endX = totalWidth - 8;

  let seed = 0;
  for (let i = 0; i < code.length; i++) {
    seed = (seed * 31 + code.charCodeAt(i)) >>> 0;
  }

  // Start guard bars
  bars.push({ x: currentX, width: 2 });
  currentX += 3;
  bars.push({ x: currentX, width: 1.5 });
  currentX += 3;

  // Middle bars
  let isBar = true;
  while (currentX < endX - 8) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const unit = (seed % 3) + 1;
    if (isBar) {
      const w = Math.min(unit, endX - 8 - currentX);
      if (w > 0) {
        bars.push({ x: currentX, width: w });
      }
      currentX += w;
    } else {
      currentX += unit + 0.5;
    }
    isBar = !isBar;
  }

  // End guard bars
  bars.push({ x: endX - 5, width: 1.5 });
  bars.push({ x: endX - 2, width: 2 });

  return bars;
}

export const BoardingPass = forwardRef<HTMLDivElement, BoardingPassProps>(
  ({ track, gateCode = 'A1' }, ref) => {
    const barcodeCode = `FBC-${track.id.toUpperCase()}-2026-CHECK`;
    const barcodeBars = generateBarcodeBars(barcodeCode, 360);

    return (
      <div className="boarding-pass-card" ref={ref}>
        {/* Navy Header Strip */}
        <div className="pass-header">
          <div className="pass-header-title">
            <svg
              className="pass-plane-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <span>BOARDING PASS</span>
          </div>
          <div className="pass-header-meta">FIRST CLASS</div>
        </div>

        {/* Pass Body */}
        <div className="pass-body">
          <div className="pass-label">DESTINATION</div>
          <h2 className="pass-destination-name">{track.destination}</h2>
          <p className="pass-tagline">{track.tagline}</p>

          <div className="pass-grid">
            <div className="pass-grid-item">
              <span className="pass-label">PASSENGER</span>
              <span className="pass-grid-value">FUTURE LEADER</span>
            </div>
            <div className="pass-grid-item">
              <span className="pass-label">GATE</span>
              <span className="pass-grid-value">GATE {gateCode}</span>
            </div>
            <div className="pass-grid-item">
              <span className="pass-label">SEAT / CLASS</span>
              <span className="pass-grid-value">01A • FIRST</span>
            </div>
          </div>
        </div>

        {/* Perforation Line with Side Notches */}
        <div className="pass-perforation" aria-hidden="true">
          <div className="pass-notch-left" />
          <div className="pass-perforation-line" />
          <div className="pass-notch-right" />
        </div>

        {/* Pass Footer Section with Barcode */}
        <div className="pass-footer-section">
          <div className="pass-barcode-container" aria-hidden="true">
            <svg
              className="pass-barcode-svg"
              viewBox="0 0 360 40"
              preserveAspectRatio="none"
            >
              <rect width="100%" height="100%" fill="#FFFFFF" />
              {barcodeBars.map((bar, i) => (
                <rect
                  key={i}
                  x={bar.x}
                  y="0"
                  width={bar.width}
                  height="40"
                  fill="#111827"
                />
              ))}
            </svg>
            <span className="pass-barcode-code">{barcodeCode}</span>
          </div>

          <div className="pass-footer-strip">
            <span>FBC SECURITY CHECK</span>
            <span>VERIFIED PASS</span>
          </div>
        </div>
      </div>
    );
  }
);

BoardingPass.displayName = 'BoardingPass';

# First Class Security Check — Digital Spec

A 5-question career-fit quiz (Vietnamese, by FBC). Answers are tallied by letter; the most frequent letter decides which **Boarding Pass** the player receives.

## 1. Stack

- Vite + React + TypeScript, single page, no router (state machine: `start → quiz → result`)
- Plain CSS with variables (no UI library)
- Static build, no backend, no persistence
- Vite `base: './'` so it works under any GitHub Pages path

## 2. Game Logic

1. Player answers Q1–Q5, one option (A–E) each. Answers are final once selected; Back is allowed before the last answer.
2. Count answers per track using the letter → track map below.
3. Highest count wins.
4. **Tie for highest (including an even spread such as A-B-C-D-E) → Entrepreneurship.** (Poster rule: "E hoặc chọn đều".)
5. Retake resets all state.

```ts
type Letter = 'A' | 'B' | 'C' | 'D' | 'E';
const LETTER_TO_TRACK: Record<Letter, TrackId> = {
  A: 'consulting', B: 'marketing', C: 'operations', D: 'finance', E: 'entrepreneurship',
};
```

Store each option as `{ letter, text }` and resolve the track through one lookup, so the mapping can be changed in a single place.

## 3. Content

All copy is Vietnamese and taken verbatim from the poster.

### Questions

**Q1. Khi giải quyết một vấn đề phức tạp, thứ bạn lấy ra đầu tiên từ "balô" của mình là gì?**
- A. Khả năng phân tích con số, mô hình hóa dữ liệu và tìm ra logic cốt lõi.
- B. Sự nhạy bén với thị trường, tâm lý con người và khả năng kể chuyện truyền cảm hứng.
- C. Khả năng nhìn tổng quan, hệ thống hóa quy trình và tối ưu vận hành.
- D. Tinh thần dám chịu rủi ro, linh hoạt xoay chuyển và tạo ra sản phẩm từ con số 0.
- E. Tư duy chiến lược, khả năng bóc tách vấn đề lớn thành các phần nhỏ để đưa ra giải pháp.

**Q2. Môi trường làm việc lý tưởng giúp bạn thăng hoa nhất là gì?**
- A. Môi trường tốc độ cao, đa dạng bài toán từ nhiều ngành nghề khác nhau, liên tục đổi mới.
- B. Môi trường sáng tạo, sôi động, nơi ý tưởng được tự do thử nghiệm và kết nối với khách hàng.
- C. Môi trường chuẩn hóa, rõ ràng về mặt quy trình, ưu tiên sự chính xác và hiệu quả cao.
- D. Môi trường tài chính, tập trung vào số liệu, giá trị thương vụ và đo lường rủi ro.
- E. Môi trường tự chủ hoàn toàn, được tự ra quyết định và chịu trách nhiệm cho tầm nhìn của chính mình.

**Q3. Khi một dự án rơi vào khủng hoảng hoặc bế tắc, phản ứng tự nhiên của bạn là gì?**
- A. Nhìn vào bảng số liệu, báo cáo tài chính hoặc các chỉ số để tìm ra lỗ hổng.
- B. Đổi góc nhìn marketing, tìm cách thay đổi thông điệp hoặc tiếp cận lại tệp khách hàng.
- C. Rà soát lại toàn bộ quy trình vận hành để tìm điểm nghẽn (bottleneck) và khắc phục ngay.
- D. Nhìn lại mô hình kinh doanh tổng thể, nhanh chóng pivots (xoay hướng) hoặc thử nghiệm hướng đi mới.
- E. Thu thập dữ liệu, tham vấn các góc nhìn khác nhau để đưa ra đề xuất chiến lược tối ưu nhất.

**Q4. Cảm giác thành công nhất đối với bạn trong công việc là khi nào?**
- A. Đưa ra được giải pháp chiến lược giúp giải quyết bài toán hóc chuẩn xác cho tổ chức.
- B. Thấy chiến dịch/sản phẩm của mình chạm tới cảm xúc của hàng nghìn khách hàng.
- C. Tối ưu hóa được nguồn lực, đưa một bộ máy cồng kềnh vận hành trơn tru và tiết kiệm chi phí.
- D. Tối đa hóa lợi nhuận, chốt được thương vụ lớn hoặc đưa ra dự báo tài chính chính xác.
- E. Xây dựng được một sản phẩm/doanh nghiệp từ hư không và thấy nó lớn lên từng ngày.

**Q5. Nếu được chọn tham gia một khóa đào tạo First Class ngắn hạn, bạn muốn nâng cấp kỹ năng nào nhất?**
- A. Tư duy chiến lược & Giải quyết vấn đề (Strategic Thinking & Problem Solving).
- B. Nghiên cứu hành vi người tiêu dùng & Sáng tạo nội dung (Consumer Insight & Branding).
- C. Quản trị tài chính & Phân tích đầu tư (Financial Analysis & Valuation).
- D. Quản trị chuỗi cung ứng & Tối ưu hóa quy trình (Operations & Supply Chain Management).
- E. Xây dựng mô hình kinh doanh & Gọi vốn đầu tư (Business Modeling & Pitching).

### Results (Boarding Passes)

| Letter | Track | Destination | Tagline | Skillset |
|---|---|---|---|---|
| A | Consulting (Tư vấn chiến lược) | CONSULTING HUB | Trạm dừng của những nhà giải mã chiến lược | Tư duy logic · Giải quyết vấn đề · Phân tích cấu trúc bài toán |
| B | Marketing & Branding | CREATIVE TERMINAL | Điểm đến của những người tạo xu hướng | Thấu hiểu tâm lý khách hàng · Sáng tạo · Truyền thông & kể chuyện |
| C | Operations & Supply Chain (Vận hành) | OPERATIONS CENTER | Trạm điều hành thế giới thực | Tư duy hệ thống · Tối ưu hóa quy trình · Quản lý nguồn lực |
| D | Finance & Investment (Tài chính) | FINANCIAL CAPITAL | Trạm trung chuyển của những dòng vốn | Phân tích định lượng · Mô hình tài chính · Quản trị rủi ro |
| E / tie | Entrepreneurship (Khởi nghiệp) | VENTURE ISLAND | Điểm đến của những nhà kiến tạo | Tinh thần tự chủ · Linh hoạt · Khả năng nhìn ra cơ hội kinh doanh |

Result copy pattern: "Nếu hầu hết câu trả lời là {letter} thì bạn là… {Track}".

## 4. Screens

**Start** — FBC logo, title "Bộ câu hỏi First Class Security Check", one-line intro, primary button "Bắt đầu" (Start).

**Quiz** — one question per screen.
- Header: logo, progress "Câu 1/5" with a thin flat progress bar
- Question in a light panel, with the poster's slanted right edge (`clip-path` parallelogram) as the only decorative motif
- Five full-width option rows: letter in a square marker + text; selecting advances after ~250 ms
- Back link on Q2–Q5
- Keyboard: `A`–`E` / `1`–`5` select, `←` back

**Result** — a boarding pass card:
- Navy header strip with plane icon + "BOARDING PASS"
- Body: "DESTINATION", destination name, tagline
- Dashed perforation line; decorative barcode (CSS repeating lines); FBC footer strip
- Below the card: track name, skillset as a 3-item list, buttons "Làm lại" (Retake) and optionally "Tải vé" (save pass as PNG via `html-to-image`)
- Pass appears with a short fade/slide-in (≤300 ms); respect `prefers-reduced-motion`

## 5. Visual Design

- **Palette** (flat, no gradients): navy `#0B2A63` (page), deep indigo `#1B1A5E` (headings/strips), off-white `#F1F3F2` (panels), accent dark red `#8B1A1A` (letters/highlights), neutral gray `#5B6270` (secondary text)
- **Type**: one geometric sans (Lexend or Inter), weights 400/600/700; uppercase small caps only for pass labels
- **Shape**: border-radius 0–2 px everywhere; 1 px solid borders; hairline shadows at most
- **Layout**: max-width 720 px centered, generous whitespace, mobile-first (≥360 px), buttons ≥44 px tall
- Optional page background: the poster's airplane photo at low opacity as a solid-tinted image, not a gradient; omit if no asset is available
- Accessibility: semantic buttons/radiogroup, visible focus ring, contrast ≥ 4.5:1, `lang="vi"`

## 6. Structure

```
├─ index.html
├─ vite.config.ts            # base: './'
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx                # screen state machine
│  ├─ data/quiz.ts           # questions, tracks, LETTER_TO_TRACK
│  ├─ lib/score.ts           # tally + tie rule (unit-tested)
│  ├─ components/            # Start, Quiz, Option, BoardingPass, Result
│  └─ styles.css             # CSS variables + components
└─ .github/workflows/deploy.yml
```

State: `{ screen, index, answers: Letter[] }`. `score(answers)` returns a `TrackId`.

## 7. Deployment (GitHub Pages)

Repo Settings → Pages → Source: **GitHub Actions**. Push to `main` deploys automatically.

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm test --if-present
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 8. Acceptance Criteria

- All 5 questions and 5 results match the poster text
- Majority letter → correct pass; any tie for highest (incl. A-B-C-D-E) → Venture Island
- Works on mobile and desktop, keyboard-only playable
- `git push` to `main` produces a live site with no manual steps

## 9. Open Issues in the Source Poster

The letter→track rule does not always match the option content. Spec follows the poster's letter rule as written; fix by editing `LETTER_TO_TRACK` or per-option `track` overrides if the owner confirms.

- **Q1**: D (risk-taking, build from zero) scores Finance; E (strategic thinking) scores Entrepreneurship. Content suggests D ↔ E swapped.
- **Q3**: A (financial reports) scores Consulting; D (pivot) scores Finance; E (gather data, strategic proposal) scores Entrepreneurship. Content suggests A→Finance, D→Entrepreneurship, E→Consulting.
- **Q5**: C (Financial Analysis) scores Operations; D (Operations & Supply Chain) scores Finance. Content suggests C ↔ D swapped.
- "Chọn đều" (even spread) is not defined precisely; this spec treats any top-count tie as Entrepreneurship.

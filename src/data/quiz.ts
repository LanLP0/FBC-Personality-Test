export type Letter = 'A' | 'B' | 'C' | 'D' | 'E';

export type TrackId =
  | 'consulting'
  | 'marketing'
  | 'operations'
  | 'finance'
  | 'entrepreneurship';

export const LETTER_TO_TRACK: Record<Letter, TrackId> = {
  A: 'consulting',
  B: 'marketing',
  C: 'operations',
  D: 'finance',
  E: 'entrepreneurship',
};

export interface TrackInfo {
  id: TrackId;
  defaultLetter: Letter;
  name: string;
  destination: string;
  tagline: string;
  skillset: [string, string, string];
}

export const TRACKS: Record<TrackId, TrackInfo> = {
  consulting: {
    id: 'consulting',
    defaultLetter: 'A',
    name: 'Consulting (Tư vấn chiến lược)',
    destination: 'CONSULTING HUB',
    tagline: 'Trạm dừng của những nhà giải mã chiến lược',
    skillset: [
      'Tư duy logic',
      'Giải quyết vấn đề',
      'Phân tích cấu trúc bài toán',
    ],
  },
  marketing: {
    id: 'marketing',
    defaultLetter: 'B',
    name: 'Marketing & Branding',
    destination: 'CREATIVE TERMINAL',
    tagline: 'Điểm đến của những người tạo xu hướng',
    skillset: [
      'Thấu hiểu tâm lý khách hàng',
      'Sáng tạo',
      'Truyền thông & kể chuyện',
    ],
  },
  operations: {
    id: 'operations',
    defaultLetter: 'C',
    name: 'Operations & Supply Chain (Vận hành)',
    destination: 'OPERATIONS CENTER',
    tagline: 'Trạm điều hành thế giới thực',
    skillset: [
      'Tư duy hệ thống',
      'Tối ưu hóa quy trình',
      'Quản lý nguồn lực',
    ],
  },
  finance: {
    id: 'finance',
    defaultLetter: 'D',
    name: 'Finance & Investment (Tài chính)',
    destination: 'FINANCIAL CAPITAL',
    tagline: 'Trạm trung chuyển của những dòng vốn',
    skillset: [
      'Phân tích định lượng',
      'Mô hình tài chính',
      'Quản trị rủi ro',
    ],
  },
  entrepreneurship: {
    id: 'entrepreneurship',
    defaultLetter: 'E',
    name: 'Entrepreneurship (Khởi nghiệp)',
    destination: 'VENTURE ISLAND',
    tagline: 'Điểm đến của những nhà kiến tạo',
    skillset: [
      'Tinh thần tự chủ',
      'Linh hoạt',
      'Khả năng nhìn ra cơ hội kinh doanh',
    ],
  },
};

export interface Option {
  letter: Letter;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Khi giải quyết một vấn đề phức tạp, thứ bạn lấy ra đầu tiên từ "balô" của mình là gì?',
    options: [
      {
        letter: 'A',
        text: 'Khả năng phân tích con số, mô hình hóa dữ liệu và tìm ra logic cốt lõi.',
      },
      {
        letter: 'B',
        text: 'Sự nhạy bén với thị trường, tâm lý con người và khả năng kể chuyện truyền cảm hứng.',
      },
      {
        letter: 'C',
        text: 'Khả năng nhìn tổng quan, hệ thống hóa quy trình và tối ưu vận hành.',
      },
      {
        letter: 'D',
        text: 'Tinh thần dám chịu rủi ro, linh hoạt xoay chuyển và tạo ra sản phẩm từ con số 0.',
      },
      {
        letter: 'E',
        text: 'Tư duy chiến lược, khả năng bóc tách vấn đề lớn thành các phần nhỏ để đưa ra giải pháp.',
      },
    ],
  },
  {
    id: 2,
    question: 'Môi trường làm việc lý tưởng giúp bạn thăng hoa nhất là gì?',
    options: [
      {
        letter: 'A',
        text: 'Môi trường tốc độ cao, đa dạng bài toán từ nhiều ngành nghề khác nhau, liên tục đổi mới.',
      },
      {
        letter: 'B',
        text: 'Môi trường sáng tạo, sôi động, nơi ý tưởng được tự do thử nghiệm và kết nối với khách hàng.',
      },
      {
        letter: 'C',
        text: 'Môi trường chuẩn hóa, rõ ràng về mặt quy trình, ưu tiên sự chính xác và hiệu quả cao.',
      },
      {
        letter: 'D',
        text: 'Môi trường tài chính, tập trung vào số liệu, giá trị thương vụ và đo lường rủi ro.',
      },
      {
        letter: 'E',
        text: 'Môi trường tự chủ hoàn toàn, được tự ra quyết định và chịu trách nhiệm cho tầm nhìn của chính mình.',
      },
    ],
  },
  {
    id: 3,
    question: 'Khi một dự án rơi vào khủng hoảng hoặc bế tắc, phản ứng tự nhiên của bạn là gì?',
    options: [
      {
        letter: 'A',
        text: 'Nhìn vào bảng số liệu, báo cáo tài chính hoặc các chỉ số để tìm ra lỗ hổng.',
      },
      {
        letter: 'B',
        text: 'Đổi góc nhìn marketing, tìm cách thay đổi thông điệp hoặc tiếp cận lại tệp khách hàng.',
      },
      {
        letter: 'C',
        text: 'Rà soát lại toàn bộ quy trình vận hành để tìm điểm nghẽn (bottleneck) và khắc phục ngay.',
      },
      {
        letter: 'D',
        text: 'Nhìn lại mô hình kinh doanh tổng thể, nhanh chóng pivots (xoay hướng) hoặc thử nghiệm hướng đi mới.',
      },
      {
        letter: 'E',
        text: 'Thu thập dữ liệu, tham vấn các góc nhìn khác nhau để đưa ra đề xuất chiến lược tối ưu nhất.',
      },
    ],
  },
  {
    id: 4,
    question: 'Cảm giác thành công nhất đối với bạn trong công việc là khi nào?',
    options: [
      {
        letter: 'A',
        text: 'Đưa ra được giải pháp chiến lược giúp giải quyết bài toán hóc chuẩn xác cho tổ chức.',
      },
      {
        letter: 'B',
        text: 'Thấy chiến dịch/sản phẩm của mình chạm tới cảm xúc của hàng nghìn khách hàng.',
      },
      {
        letter: 'C',
        text: 'Tối ưu hóa được nguồn lực, đưa một bộ máy cồng kềnh vận hành trơn tru và tiết kiệm chi phí.',
      },
      {
        letter: 'D',
        text: 'Tối đa hóa lợi nhuận, chốt được thương vụ lớn hoặc đưa ra dự báo tài chính chính xác.',
      },
      {
        letter: 'E',
        text: 'Xây dựng được một sản phẩm/doanh nghiệp từ hư không và thấy nó lớn lên từng ngày.',
      },
    ],
  },
  {
    id: 5,
    question: 'Nếu được chọn tham gia một khóa đào tạo First Class ngắn hạn, bạn muốn nâng cấp kỹ năng nào nhất?',
    options: [
      {
        letter: 'A',
        text: 'Tư duy chiến lược & Giải quyết vấn đề (Strategic Thinking & Problem Solving).',
      },
      {
        letter: 'B',
        text: 'Nghiên cứu hành vi người tiêu dùng & Sáng tạo nội dung (Consumer Insight & Branding).',
      },
      {
        letter: 'C',
        text: 'Quản trị tài chính & Phân tích đầu tư (Financial Analysis & Valuation).',
      },
      {
        letter: 'D',
        text: 'Quản trị chuỗi cung ứng & Tối ưu hóa quy trình (Operations & Supply Chain Management).',
      },
      {
        letter: 'E',
        text: 'Xây dựng mô hình kinh doanh & Gọi vốn đầu tư (Business Modeling & Pitching).',
      },
    ],
  },
];

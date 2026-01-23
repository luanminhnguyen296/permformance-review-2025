
import { SlideContent, ContributionData } from './types';

export const COLORS = {
  bg: '#020617',
  brandPrimary: '#004683', // Deep blue from BrancherX
  brandSecondary: '#91D0EE', // Light blue from folder icon
  primary: '#6d28d9', 
  secondary: '#38bdf8',
  accent: '#22d3ee',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444'
};

export const CONTRIBUTION_DATA: ContributionData[] = [
  { name: 'Trading Desk', value: 30, color: '#38bdf8' },
  { name: 'PingX', value: 15, color: '#6d28d9' },
  { name: 'PageX', value: 30, color: '#22d3ee' },
  { name: 'BuzzX', value: 8, color: '#10b981' },
  { name: 'AdminX', value: 75, color: '#004683' },
];

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    title: 'PERFORMANCE REVIEW 2025',
    subtitle: 'Nguyễn Minh Luân – Full-stack Developer',
    type: 'cover',
    content: [
      'Nhóm Sản phẩm Công nghệ(Tech Team)',
      'Sản phẩm tham gia: Trading Desk, PingX, PageX, BuzzX & AdminX',
      'Thời gian: 2024 – 2025'
    ]
  },
  {
    id: 2,
    title: 'Vai trò & Giá trị cốt lõi',
    type: 'grid',
    content: [
      'Full-stack Developer: Tham gia phát triển sản phẩm chiến lược & dự án khách hàng.',
      'Technical Execution: Đảm bảo chất lượng code, hiệu suất & tiến độ bàn giao.',
      'Agency Adaptability: Linh hoạt thích ứng công nghệ theo yêu cầu đa dạng của Client.',
      'Road to Senior: Nâng cao tư duy hệ thống & giải pháp kỹ thuật chuyên sâu.'
    ]
  },
  {
    id: 3,
    title: 'Sản phẩm tham gia phát triển',
    type: 'ecosystem',
    content: [
      'Trading Desk – Quản lý & tối ưu quảng cáo',
      'PingX – Tư vấn & chốt đơn đa kênh',
      'PageX – Quản lý & tối ưu content',
      'BuzzX – Quản lý & phân tích comment',
      'AdminX – Core quản trị & phân quyền'
    ]
  },
  {
    id: 4,
    title: 'Phạm vi đóng góp tổng thể',
    type: 'grid',
    content: [
      'Tham gia phát triển 5 sản phẩm chủ lực.',
      'Core system development & architecture.',
      'Data modeling & high-performance reporting.',
      'Quy trình mở rộng & định hướng kỹ thuật dài hạn.'
    ]
  },
  {
    id: 5,
    title: 'Trading Desk (30%)',
    type: 'comparison',
    content: [
      'Hiện tại: Xây dựng tool setup quảng cáo tập trung Facebook, Transparent Ads setup, report Tiktok và Google ads.',
      `Tầm nhìn: Tích hợp setup quảng cáo TikTok & Google Ads, kết hợp AI đề xuất tự động tối ưu chiến dịch và ngân sách.`
    ]
  },
  {
    id: 6,
    title: 'PingX (18%)',
    type: 'comparison',
    content: [
      'Hiện tại: Quản lý Tag, tích hợp pages vào ui chat, tích hợp phân quyền version 1',
      'Tầm nhìn: AI Chatbot thông minh - Tự động tư vấn ngữ cảnh & chốt đơn.'
    ]
  },
  {
    id: 7,
    title: 'PageX (30%)',
    type: 'comparison',
    content: [
      'Hiện tại: Sync post từ Facebook, Tiktok, đăng bài tự động theo lịch. Tích hợp lịch đăng bài',
      'Tầm nhìn: AI Content Engine - Tự động tạo nội dung & media hiệu suất cao.'
    ]
  },
  {
    id: 8,
    title: 'BuzzX (8%)',
    type: 'comparison',
    content: [
      'Hiện tại: Tích hợp sync post Tiktok, Facebook. Thêm filter và chỉ số insight cho post, report page, phân quyền version 2',
      'Tầm nhìn: Tự động hóa comment - Trả lời thông minh & ẩn tiêu cực.'
    ]
  },
  {
    id: 9,
    title: 'AdminX (75%) – Nền tảng cốt lõi',
    type: 'comparison',
    // type: 'hub-spoke',
    content: [
      // 'Hiện tại: Quản lý: User, Permission, Client, Role.',
      'Hiện tại: Hoàn thành các modules chính Auth, User, Permission, Client, Role.',
      'Tầm nhìn: Bổ sung thêm các modules Payment, Invoice, Package Prices, Dashboard Admin, Tích hợp AI để phân tích',
      // 'Core quản trị system cho toàn bộ hệ sinh thái.',
      // 'Quản lý: User, Permission, Client, Role.',
      // 'Giúp công ty scale nhanh, kiểm soát chặt, mở rộng dễ.'
    ]
  },
  {
    id: 10,
    title: 'Tỷ lệ & mức độ đóng góp',
    type: 'chart',
    content: [
      'Trọng tâm vào core system & nền tảng dài hạn.'
    ]
  },
  {
    id: 11,
    title: 'Tác động đến kinh doanh',
    type: 'grid',
    content: [
      'Scale khách hàng nhanh chóng.',
      'Ra mắt sản phẩm mới (Time-to-market) ngắn.',
      'Giảm chi phí vận hành thủ công.',
      'Sẵn sàng hạ tầng cho kỷ nguyên AI.'
    ]
  },
  {
    id: 12,
    title: 'Điểm mạnh nổi bật',
    type: 'grid',
    content: [
      'Mid-level Solid: Code clean, tuân thủ pattern, dễ bảo trì.',
      'Agency Mindset: Thích nghi nhanh, multitasking tốt, "can-do" attitude.',
      'Technical Depth: Hiểu sâu về luồng dữ liệu & logic nghiệp vụ.',
      'Senior-ready: Chủ động giải quyết vấn đề (Problem Solving).'
    ]
  },
  {
    id: 13,
    title: 'Thách thức & bài học',
    type: 'comparison',
    content: [
      'Thách thức: Business thay đổi liên tục, deadline gấp (đặc thù Agency).',
      'Bài học: Quản lý thời gian, prioritize task & giao tiếp team hiệu quả.'
    ]
  },
  {
    id: 14,
    title: 'Định hướng đóng góp 2026',
    type: 'roadmap',
    content: [
      'Tech Proficiency: Master Tech stack, tối ưu sâu performance.',
      'Mentorship: Hướng dẫn Junior, tham gia Code Review tích cực.',
      'Mục tiêu: Đạt level Senior Full-stack Developer.'
    ]
  },
  {
    id: 15,
    title: 'Kết luận & đề xuất',
    type: 'standard',
    content: [
      '2025: Đảm bảo chất lượng sản phẩm & cam kết tiến độ phát triển.',
      '2026: Nâng cao chất lượng kỹ thuật - Tối ưu hiệu năng & chi phí vận hành.',
      'R&D: Nghiên cứu & tích hợp các module AI vào nền tảng cốt lõi.',
      'Đề xuất: Đào tạo chuyên sâu về AI Marketing (MarTech) để nâng cao nghiệp vụ.'
    ]
  }
];

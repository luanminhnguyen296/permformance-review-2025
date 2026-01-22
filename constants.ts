
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
    subtitle: 'Henry – Full-stack Developer',
    type: 'cover',
    content: [
      'Nhóm Sản phẩm Công nghệ',
      'Hệ sinh thái: Trading Desk, PingX, PageX, BuzzX, AdminX',
      'Thời gian: 2024 – 2025'
    ]
  },
  {
    id: 2,
    title: 'Vai trò & Giá trị cốt lõi',
    type: 'grid',
    content: [
      'Full-stack Developer tham gia xây dựng sản phẩm chiến lược nội bộ.',
      'Chủ động công nghệ - Xây nền tảng kỹ thuật vững chắc.',
      'Giảm phụ thuộc bên thứ 3 - Tối ưu hóa chi phí & kiểm soát.',
      'Sẵn sàng mở rộng AI & Automation cho tương lai.'
    ]
  },
  {
    id: 3,
    title: 'Tổng quan hệ sinh thái sản phẩm',
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
      'Hiện tại: Setup & theo dõi quảng cáo tập trung, giảm rủi ro BM nội bộ.',
      'Tầm nhìn: AI Ads Optimization Platform - Tự động tạo & kiểm soát ngân sách.'
    ]
  },
  {
    id: 6,
    title: 'PingX (15%)',
    type: 'comparison',
    content: [
      'Hiện tại: Quản lý hội thoại đa nền tảng, hỗ trợ bán hàng & CSKH.',
      'Tầm nhìn: AI Chatbot thông minh - Tự động tư vấn ngữ cảnh & chốt đơn.'
    ]
  },
  {
    id: 7,
    title: 'PageX (30%)',
    type: 'comparison',
    content: [
      'Hiện tại: Quản lý & đăng bài đa kênh tập trung, theo dõi content.',
      'Tầm nhìn: AI Content Engine - Tự động tạo nội dung & media hiệu suất cao.'
    ]
  },
  {
    id: 8,
    title: 'BuzzX (8%)',
    type: 'comparison',
    content: [
      'Hiện tại: Quản lý comment tập trung, giảm rủi ro khủng hoảng.',
      'Tầm nhìn: Tự động hóa comment - Trả lời thông minh & ẩn tiêu cực.'
    ]
  },
  {
    id: 9,
    title: 'AdminX (75%) – Nền tảng cốt lõi',
    type: 'hub-spoke',
    content: [
      'Core quản trị cho toàn bộ hệ sinh thái.',
      'Quản lý: User, Permission, Client, Billing.',
      'Giúp công ty scale nhanh, kiểm soát chặt, mở rộng dễ.'
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
      'Tư duy product & business nhạy bén.',
      'Hiểu sâu nghiệp vụ ads & commerce.',
      'Xây dựng hệ thống scalable.',
      'Định hướng AI-First mindset.'
    ]
  },
  {
    id: 13,
    title: 'Thách thức & bài học',
    type: 'comparison',
    content: [
      'Thách thức: Hệ sinh thái phức tạp & thị trường biến động nhanh.',
      'Bài học: Cân bằng giữa Speed (tốc độ) & Sustainability (bền vững).'
    ]
  },
  {
    id: 14,
    title: 'Định hướng đóng góp 2026',
    type: 'roadmap',
    content: [
      'Key Developer cho Core Infrastructure.',
      'Product Roadmap & AI Strategy contributor.',
      'Mục tiêu: Senior / Tech Lead position.'
    ]
  },
  {
    id: 15,
    title: 'Kết luận & đề xuất',
    type: 'standard',
    content: [
      '2025: Xây nền tảng & sản phẩm chiến lược.',
      '2026: Đẩy mạnh AI & thương mại hóa.',
      'Đề xuất: Lộ trình phát triển Senior rõ ràng.'
    ]
  }
];

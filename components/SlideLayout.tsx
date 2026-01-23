
import React from 'react';
import { SlideContent } from '../types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Shield, Brain, Users, Layout, Rocket, Target, CheckCircle2,
  ChevronRight, ArrowRight, TrendingUp, Settings, MessageSquare, 
  Bell, FileText, Globe, MousePointer2, Plus,  Zap, Scale, Layers,Code2,Database,
  Activity, Gauge, Workflow,Cpu,Server
} from 'lucide-react';

import { CONTRIBUTION_DATA, COLORS, SLIDES } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

// Dữ liệu cho biểu đồ Radar ở trang Thách thức
const radarData = [
  { subject: 'Speed', A: 95, fullMark: 100 },
  { subject: 'Stability', A: 85, fullMark: 100 },
  { subject: 'Complexity', A: 90, fullMark: 100 },
  { subject: 'Innovation', A: 88, fullMark: 100 },
  { subject: 'Security', A: 92, fullMark: 100 },
  { subject: 'Scalability', A: 80, fullMark: 100 },
];

// --- LOGO & UI MOCKUP COMPONENTS ---

const BrancherXLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img src="static/images/logo-brancherx.png" alt="BrancherX" className="h-auto w-64 object-contain" />
  </div>
);

// Mockup cho AdminX - Phân quyền
const AdminXMockup = () => (
  <div className="w-full h-full bg-[#f1f5f9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-1 flex flex-col gap-4 overflow-y-auto">
        <img 
        src="static/images/apps/adminx_1.png" 
        alt="AdminX Dashboard" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>
  </div>
);

// Mockup cho PingX - Hội thoại
const PingXMockup = () => (
  <div className="w-full h-full bg-[#f1f5f9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto">
      <img 
        src="static/images/apps/pingx.png" 
        alt="PingX Conversations" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>
  </div>
);

// Mockup cho PageX - Content
const PageXMockup = () => (
  <div className="w-full h-full bg-[#f1f5f9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto">
      <img 
        src="static/images/apps/pagex.png" 
        alt="PageX Content" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>
  </div>
);

// Mockup cho BuzzXXMockup - Content
const BuzzXXMockup = () => (
  <div className="w-full h-full bg-[#f1f5f9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto">
      <img 
        src="static/images/apps/buzzx.png" 
        alt="BuzzX Comments" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>
  </div>
);

// Mockup cho Trading Desk - Campaign
const TradingDeskMockup = () => (
  <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto">
      <img 
        src="static/images/apps/tradingdesk.png" 
        alt="Trading Desk Campaigns" 
        className="w-full h-full object-cover rounded transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>  
  </div>
);

const AppLogo: React.FC<{ type: string; size?: number; className?: string }> = ({ type, size, className }) => {
  const normalizedType = type.toLowerCase().replace(/\s/g, '');
  if (normalizedType.includes('admin')) return <div className="text-amber-500"><Settings size={size} /></div>;
  if (normalizedType.includes('ping')) return <div className="text-sky-500"><MessageSquare size={size} /></div>;
  if (normalizedType.includes('page')) return <div className="text-indigo-500"><FileText size={size} /></div>;
  if (normalizedType.includes('buzz')) return <div className="text-emerald-500"><Bell size={size} /></div>;
  if (normalizedType.includes('trading') || normalizedType.includes('all')) return <div className="text-blue-600"><TrendingUp size={size} /></div>;
  return <Rocket size={size} className={className} />;
};

const ContributionGauge = ({ value }: { value: number }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-6 mb-2 p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
         <svg className="w-full h-full transform -rotate-90">
           <circle cx="48" cy="48" r={radius} stroke="#1e293b" strokeWidth="8" fill="transparent" />
           <motion.circle 
             cx="48" cy="48" r={radius} 
             stroke="#38bdf8" 
             strokeWidth="8" 
             fill="transparent"
             strokeDasharray={circumference}
             initial={{ strokeDashoffset: circumference }}
             animate={{ strokeDashoffset }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
             strokeLinecap="round"
           />
         </svg>
         <div className="absolute inset-0 flex flex-col items-center justify-center">
           <span className="text-2xl font-black text-white">{value}%</span>
         </div>
      </div>
      <div>
         <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Impact Level</div>
         <div className="text-xl text-sky-400 font-bold">Mức độ đóng góp</div>
         <div className="text-sm text-slate-500 mt-1">Dựa trên khối lượng công việc & độ phức tạp</div>
      </div>
    </motion.div>
  );
};

interface SlideLayoutProps {
  slide: SlideContent;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ slide }) => {
  const renderVisual = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden"
          >
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#004683] rounded-full blur-[150px]"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#91D0EE] rounded-full blur-[150px]"></div>
             <div className="grid grid-cols-24 gap-1 h-full w-full opacity-5">
               {Array.from({ length: 576 }).map((_, i) => (
                 <div key={i} className="border-[0.2px] border-slate-500"></div>
               ))}
             </div>
          </motion.div>
        );
      
      case 'chart':
        return (
          <div className="w-full h-full flex flex-col justify-center mt-8">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {CONTRIBUTION_DATA.map((item, i) => {
                const radius = 80;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (item.value / 100) * circumference;
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <div className="relative w-56 h-56 flex items-center justify-center group">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-opacity-20 rounded-full blur-xl transition-all duration-500 group-hover:bg-opacity-40" style={{ backgroundColor: item.color + '40' }}></div>
                      
                      <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                        {/* Track */}
                        <circle 
                          cx="112" cy="112" r={radius} 
                          stroke="#1e293b" 
                          strokeWidth="20" 
                          fill="transparent" 
                          className="opacity-50"
                        />
                        {/* Progress */}
                        <motion.circle 
                          cx="112" cy="112" r={radius} 
                          stroke={item.color} 
                          strokeWidth="20" 
                          fill="transparent" 
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 + 0.8 }}
                          strokeLinecap="round"
                        />
                      </svg>
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.2 + 1.5, type: "spring" }}
                          className="text-5xl font-black text-white tracking-tight"
                        >
                          {item.value}%
                        </motion.span>
                      </div>
                    </div>
                    
                    <div className="text-center relative">
                       <div className="absolute -inset-2 bg-slate-800/50 blur-md rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <h3 className="text-xl font-bold text-slate-200 mb-2">{item.name}</h3>
                       <div className="h-1.5 w-16 rounded-full mx-auto" style={{ backgroundColor: item.color }}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-center mt-12 text-slate-400 text-sm italic"
            >
              {/* * Dựa trên phân bổ thời gian & độ phức tạp kỹ thuật */}
            </motion.div>
          </div>
        );

      case 'ecosystem':
        const ecosystemItems = [
          { label: 'Trading Desk', type: 'trading', x: 50, y: 0 },
          { label: 'PingX', type: 'ping', x: 90, y: 25 },
          { label: 'PageX', type: 'page', x: 90, y: 75 },
          { label: 'BuzzX', type: 'buzz', x: 50, y: 100 },
          { label: 'AdminX', type: 'admin', x: 10, y: 50 },
        ];

        return (
          <div className="relative h-[420px] flex items-center justify-center mt-4">
            <div className="relative w-full max-w-4xl h-full">
              {/* Lines Layer - Rendered first to be behind */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {ecosystemItems.map((item, i) => (
                  <motion.line 
                    key={i}
                    x1="50%" 
                    y1="50%" 
                    x2={`${item.x}%`} 
                    y2={`${item.y}%`} 
                    stroke="#0ea5e9" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              {/* Central Hub */}
              <motion.div 
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                className="absolute left-1/2 top-1/2 w-52 h-52 bg-gradient-to-br from-[#004683] to-[#1e1b4b] rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(0,70,131,0.4)] border-2 border-sky-400 z-10 p-6"
              >
                <span className="text-xs uppercase tracking-widest opacity-80 mb-1 text-sky-200 font-bold">BRANCHER.X</span>
                <span className="text-xl font-black text-white leading-tight">Omni Channel SettingX</span>
              </motion.div>
              
              {/* App Nodes */}
              {ecosystemItems.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                  animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 1.2 + (i * 0.1) 
                  }}
                  className="absolute flex flex-col items-center group z-20"
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                >
                   <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-sky-500 transition-colors shadow-xl relative z-20">
                     <AppLogo type={item.type} size={40} />
                   </div>
                   <div className="mt-3 px-4 py-1.5 bg-slate-900/90 rounded-full border border-slate-700 relative z-20 backdrop-blur-sm whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-200">{item.label}</span>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'hub-spoke':
        return (
          <motion.div variants={containerVariants} className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12">
            <div className="w-full md:w-1/2 order-2 md:order-1 space-y-4">
               <motion.h3 variants={itemVariants} className="text-2xl font-bold text-sky-400 mb-6 flex items-center gap-2">
                 <Shield size={24} /> AdminX Infrastructure
               </motion.h3>
                {[
                  { label: 'User Management', icon: <Users size={20}/> },
                  { label: 'Permission Control', icon: <Shield size={20}/> },
                  { label: 'Client Entities', icon: <Layout size={20}/> },
                  { label: 'Billing & Finance', icon: <TrendingUp size={20}/> }
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-sky-500/50 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-500">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                  </motion.div>
                ))}
            </div>
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
              <motion.div variants={itemVariants} className="w-full">
                <AdminXMockup />
              </motion.div>
            </div>
          </motion.div>
        );

      case 'comparison':
        const getMockup = (title: string) => {
          if (title.includes('Trading')) return <TradingDeskMockup />;
          if (title.includes('Ping')) return <PingXMockup />;
          if (title.includes('Page')) return <PageXMockup />;
          if (title.includes('Buzz')) return <BuzzXXMockup />; // Buzz uses similar feed style
          if (title.includes('Thách thức')) return <ChallengeMockup />;
          if (title.includes('AdminX')) return <AdminXMockup />;
          return null;
        };
        
        return (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
               <motion.div variants={containerVariants} className="space-y-6 h-full flex flex-col justify-center">
                  <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl border-l-4 border-l-sky-500 group hover:bg-slate-800/60 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400">
                        <Rocket size={20} />
                      </div>
                      <h3 className="text-xl font-bold">Giá trị hiện tại</h3>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">{slide.content[0].split(': ')[1]}</p>
                  </motion.div>
                  <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl border-l-4 border-l-indigo-500 group hover:bg-slate-800/60 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                        <Brain size={20} />
                      </div>
                      <h3 className="text-xl font-bold">Tầm nhìn AI</h3>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">{slide.content[1].split(': ')[1]}</p>
                  </motion.div>
               </motion.div>
               <motion.div 
                  initial={{ x: 100, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative"
                >
                  <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative bg-slate-900">
                  <div className="absolute top-2 left-2 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white font-bold border border-white/10 uppercase tracking-widest">
                    {slide.title.includes('Thách thức') ? 'STRATEGIC EQUILIBRIUM' : 'Live Interface Screenshot'}
                  </div>
                  {getMockup(slide.title)}
               </div>
               </motion.div>
            </div>
          </div>
        );

      case 'roadmap':
        return (
          <motion.div variants={containerVariants} className="flex flex-col space-y-12">
            <div className="relative flex justify-between">
              <div className="absolute top-8 left-0 right-0 h-1 bg-slate-800 -z-0"></div>
              {[
                { label: '2024: Foundation', color: 'bg-slate-700', icon: <Settings /> },
                { label: '2025: Scale-up', color: 'bg-sky-700', icon: <TrendingUp /> },
                { label: '2026: AI Strategic', color: 'bg-indigo-700', icon: <Brain /> },
                { label: 'Future: Project Lead', color: 'bg-[#004683]', icon: <Target /> }
              ].map((step, i) => (
                <motion.div variants={itemVariants} key={i} className="flex flex-col items-center w-1/4 z-10">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center border-4 border-slate-900 shadow-xl mb-4 transition-transform hover:scale-110 cursor-pointer`}>
                    {step.icon}
                  </div>
                  <span className="text-center font-bold text-slate-300 text-sm px-2">{step.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="bg-sky-950/20 border border-sky-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-sky-400">
                <ChevronRight /> Roadmap Detail
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.content.map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 size={18} className="text-sky-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        );

      case 'grid':
        if (slide.id === 2 || slide.id === 4) {
          return (
            <div className="flex flex-col md:flex-row gap-12 mt-12 items-center">
              <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                {slide.content.map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl flex items-center gap-5 group hover:border-sky-500/50 transition-all">
                    <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400 group-hover:bg-[#004683] group-hover:text-white transition-all">
                      {i === 0 ? <Target size={24} /> : i === 1 ? <Rocket size={24} /> : i === 2 ? <Shield size={24} /> : <Brain size={24} />}
                    </div>
                    <div className="flex items-center h-full"> 
                      <h4 className="text-lg font-bold text-white">{item.split(' - ')[0]}</h4>
                      {/* <p className="text-slate-400 leading-relaxed text-sm">{item.split(' - ')[1] || item}</p> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/2 aspect-square">
              {slide.id === 2 ? <CoreValuesMockup /> : <ContributionScopeMockup />}
              </div>
            </div>
          );
        }
        return (
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slide.content.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start gap-5 group hover:border-sky-500/50 transition-all">
                <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400 group-hover:bg-[#004683] group-hover:text-white transition-all">
                   {i === 0 ? <Target size={24} /> : i === 1 ? <Rocket size={24} /> : i === 2 ? <Shield size={24} /> : <Brain size={24} />}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.split(' - ')[0].split(': ')[0]}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.split(' - ')[1] || item.split(': ')[1] || item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return (
          <motion.div variants={containerVariants} className="space-y-6 mt-12">
            {slide.content.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-center gap-4 text-xl p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                   <CheckCircle2 size={18} />
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        );
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-full w-full flex flex-col relative overflow-hidden p-12 md:p-16"
    >
      {/* Background Decor */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 0.1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none"
      >
        <div className="text-[14rem] font-black leading-none text-sky-900 select-none">
          {slide.id.toString().padStart(2, '0')}
        </div>
      </motion.div>

      {/* Slide Header */}
      <motion.div variants={itemVariants} className="relative z-10 mb-0">
        {slide.type === 'cover' ? (
          <div className="flex flex-col h-full justify-center space-y-10 mt-10">
            <BrancherXLogo className="h-20 mb-4" />
            <motion.div variants={containerVariants} className="space-y-4">
               <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-sky-400 leading-none">
                {slide.title}
              </motion.h1>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-sky-400 opacity-90">
                {slide.subtitle}
              </motion.h2>
            </motion.div>
            <motion.div variants={containerVariants} className="flex flex-wrap gap-4 pt-10">
              {slide.content.map((line, i) => (
                <motion.div key={i} variants={itemVariants} className="px-6 py-3 rounded-xl bg-[#004683]/30 border border-sky-900/50 backdrop-blur-md text-sky-100 font-semibold text-lg shadow-lg">
                  {line}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-2">
                <AppLogo type={slide.title} size={48} />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500" style={{lineHeight: 1.3}}>
                  {slide.title}
                </h2>
              </div>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: 128 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 bg-gradient-to-r from-[#004683] to-transparent rounded-full"
              ></motion.div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Slide Visuals */}
      <div className="relative z-10 flex-1 flex flex-col justify-center min-h-0">
        {slide.type !== 'cover' && renderVisual()}
      </div>

      {/* Slide Footer / Branding */}
      <div className="invisible relative z-10 mt-auto flex justify-between items-end border-t border-slate-800/50 pt-8 shrink-0">
        <div className="flex items-center gap-4 opacity-80">
          <div className="relative w-10 h-10">
            <div className="absolute top-0 left-0 w-8 h-10 bg-[#91D0EE] rounded-sm transform skew-x-[-12deg] opacity-80"></div>
            <div className="absolute top-0 left-2 w-8 h-10 bg-[#004683] rounded-sm transform skew-x-[-12deg]"></div>
          </div>
          <div className="text-sm">
            <p className="font-black text-[#91D0EE] tracking-tighter text-base">BRANCHER.X</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Henry Review • MarTech 2025</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
           <p className="text-sm font-bold text-sky-400">Full-stack Developer</p>
           <p className="text-[10px] opacity-40 font-mono tracking-widest uppercase">
            Confidential Internal Review
          </p>
        </div>
      </div>


      {/* Background Elements */}
      {slide.type !== 'cover' && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.1 }} 
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-[#004683] rounded-full blur-[180px]"></div>
          <div className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-[#91D0EE] rounded-full blur-[150px]"></div>
        </motion.div>
      )}
    </motion.div>
  );
};
// Mockup mới cho Thách thức & Bài học - Trực quan hơn về sự cân bằng
const ChallengeMockup = () => (
  <div className="w-full h-full bg-[#020617] rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col p-6 relative">
    {/* Header của Dashboard ảo */}
    <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
      <div className="flex items-center gap-2">
        <Activity className="text-sky-400" size={18} />
        <span className="text-xs font-black tracking-widest text-slate-300">STRATEGIC IMPACT MONITOR</span>
      </div>
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-[10px] text-emerald-500 font-bold uppercase">System Balanced</span>
      </div>
    </div>

    <div className="flex-1 grid grid-cols-5 gap-4">
      {/* Biểu đồ Radar thể hiện sự cân bằng đa chiều */}
      <div className="col-span-3 bg-slate-900/30 rounded-2xl border border-slate-800 p-2 relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Performance Radar</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
            <Radar
              name="Performance"
              dataKey="A"
              stroke="#38bdf8"
              fill="#38bdf8"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Cột chỉ số chi tiết */}
      <div className="col-span-2 flex flex-col gap-3">
        {/* Chỉ số Speed vs Sustainability */}
        <div className="flex-1 bg-slate-900/30 rounded-xl border border-slate-800 p-4 flex flex-col justify-center">
           <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-sky-400 uppercase">Velocity</span>
              <Zap size={14} className="text-yellow-400" />
           </div>
           <div className="text-2xl font-black text-white">94.2<span className="text-xs opacity-40">%</span></div>
           <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[94%] h-full bg-sky-500 shadow-[0_0_10px_#38bdf8]"></div>
           </div>
        </div>

        <div className="flex-1 bg-slate-900/30 rounded-xl border border-slate-800 p-4 flex flex-col justify-center">
           <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-indigo-400 uppercase">Sustainability</span>
              <Shield size={14} className="text-emerald-400" />
           </div>
           <div className="text-2xl font-black text-white">88.7<span className="text-xs opacity-40">%</span></div>
           <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[88%] h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
           </div>
        </div>
      </div>
    </div>

    {/* Footer: Ecosystem Complexity Visualization */}
    <div className="mt-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-800 rounded-lg">
           <Workflow size={16} className="text-sky-400" />
        </div>
        <div>
           <div className="text-[10px] font-bold text-slate-500 uppercase">Ecosystem Complexity</div>
           <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-1.5 w-6 bg-sky-500 rounded-full"></div>
              ))}
           </div>
        </div>
      </div>
      <div className="text-right">
         <span className="text-[10px] font-black text-sky-400">OPTIMIZED</span>
      </div>
    </div>
  </div>
);

// Mockup minh họa cho Vai trò & Giá trị cốt lõi (Slide 2)
const CoreValuesMockup = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-sky-500 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Central Core */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="z-20 w-40 h-40 rounded-[2rem] bg-slate-900 border-2 border-sky-500/50 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.2)]"
        >
          <div className="p-3 bg-sky-500/10 rounded-2xl mb-2 text-sky-400">
            <Cpu size={40} />
          </div>
          <span className="text-[10px] font-black tracking-widest text-sky-300 uppercase">Tech Hub</span>
          <span className="text-lg font-black text-white">HENRY</span>
        </motion.div>

        {/* Outer Floating Icons */}
        {[
          { icon: <Code2 size={24} />, x: -260, y: -160, label: 'Full-stack', delay: 0 },
          { icon: <Shield size={24} />, x: 260, y: -160, label: 'Security', delay: 0.2 },
          { icon: <Database size={24} />, x: -260, y: 160, label: 'Data', delay: 0.4 },
          { icon: <Brain size={24} />, x: 260, y: 160, label: 'AI Ready', delay: 0.6 },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              x: item.x, 
              y: item.y,
            }}
            transition={{ 
              type: "spring", stiffness: 200, damping: 20, delay: item.delay,
            }}
            className="absolute left-1/2 top-1/2 -ml-8 -mt-8 z-30 flex flex-col items-center"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shadow-xl backdrop-blur-md hover:border-sky-400 transition-colors"
            >
              {item.icon}
            </motion.div>
            <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter bg-slate-900/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-slate-800">{item.label}</span>
          </motion.div>
        ))}

        {/* Connecting Orbital Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border border-sky-500/20 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-80 h-80 border border-indigo-500/10 rounded-full"
        />
      </div>
    </div>
  );
};
// Mockup minh họa cho Vai trò & Giá trị cốt lõi (Slide 2)
const ContributionScopeMockup = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-sky-500 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Central Core */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="z-20 w-40 h-40 rounded-[2rem] bg-slate-900 border-2 border-sky-500/50 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.2)]"
        >
           <div className="p-3 bg-sky-500/10 rounded-xl mb-2 text-sky-400">
            <Server size={32} className="group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">CORE ARCH</span>
          <div className="flex gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse delay-150"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse delay-300"></div>
          </div>
        </motion.div>

        {/* Outer Floating Icons */}
        {[
          { icon: <Globe size={24} />, x: -260, y: -160, label: '5 Products', delay: 0 },
          { icon: <Code2 size={24} />, x: 260, y: -160, label: 'FrontEnd - BackEnd', delay: 0.2 },
          { icon: <Brain size={24} />, x: -260, y: 160, label: 'Core System', delay: 0.4 },
          { icon: <Database size={24} />, x: 260, y: 160, label: 'Data Modeling', delay: 0.6 },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              x: item.x, 
              y: item.y,
            }}
            transition={{ 
              type: "spring", stiffness: 200, damping: 20, delay: item.delay,
            }}
            className="absolute left-1/2 top-1/2 -ml-8 -mt-8 z-30 flex flex-col items-center"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shadow-xl backdrop-blur-md hover:border-sky-400 transition-colors"
            >
              {item.icon}
            </motion.div>
            <span className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter bg-slate-900/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-slate-800">{item.label}</span>
          </motion.div>
        ))}

        {/* Connecting Orbital Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border border-sky-500/20 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-80 h-80 border border-indigo-500/10 rounded-full"
        />
      </div>
    </div>
  );
};


export default SlideLayout;

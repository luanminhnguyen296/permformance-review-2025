
import React from 'react';
import { SlideContent } from '../types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { 
  Shield, Brain, Users, Layout, Rocket, Target, CheckCircle2,
  ChevronRight, ArrowRight, TrendingUp, Settings, MessageSquare, 
  Bell, FileText, Globe, MousePointer2, Plus
} from 'lucide-react';
import { CONTRIBUTION_DATA, COLORS } from '../constants';

// --- LOGO & UI MOCKUP COMPONENTS ---

const BrancherXLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img src="/static/images/logo-brancherx.png" alt="BrancherX" className="h-auto w-64 object-contain" />
  </div>
);

// Mockup cho AdminX - Phân quyền
const AdminXMockup = () => (
  <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex">
    <img 
      src="/static/images/apps/adminx_1.png" 
      alt="AdminX Dashboard" 
      className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
    />
  </div>
);

// Mockup cho PingX - Hội thoại
const PingXMockup = () => (
  <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex">
    <img 
        src="/static/images/apps/pingx.png" 
        alt="PingX Conversations" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.05] cursor-pointer" 
      />
  </div>
);

// Mockup cho PageX - Content
const PageXMockup = () => (
  <div className="w-full h-full bg-[#f1f5f9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
      <img 
        src="/static/images/apps/pagex.png" 
        alt="PageX Content" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>
  </div>
);

// Mockup cho BuzzXXMockup - Content
const BuzzXXMockup = () => (
  <div className="w-full h-full bg-[#f1f5f9] rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
      <img 
        src="/static/images/apps/buzzx.png" 
        alt="BuzzX Comments" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
      />
    </div>
  </div>
);

// Mockup cho Trading Desk - Campaign
const TradingDeskMockup = () => (
  <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
    <img 
      src="/static/images/apps/tradingdesk.png" 
      alt="Trading Desk Campaigns" 
      className="w-full h-full object-cover rounded transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
    />
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

interface SlideLayoutProps {
  slide: SlideContent;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ slide }) => {
  const renderVisual = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#004683] rounded-full blur-[150px]"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#91D0EE] rounded-full blur-[150px]"></div>
             <div className="grid grid-cols-24 gap-1 h-full w-full opacity-5">
               {Array.from({ length: 576 }).map((_, i) => (
                 <div key={i} className="border-[0.2px] border-slate-500"></div>
               ))}
             </div>
          </div>
        );
      
      case 'chart':
        return (
          <div className="w-full h-[400px] mt-8 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CONTRIBUTION_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {CONTRIBUTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'ecosystem':
        return (
          <div className="relative h-[400px] flex items-center justify-center mt-8">
            <div className="relative w-full max-w-2xl h-full">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-[#004683] to-[#1e1b4b] rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(0,70,131,0.4)] border-2 border-sky-400 z-10 p-6">
                <span className="text-xs uppercase tracking-widest opacity-80 mb-1 text-sky-200 font-bold">BRANCHER.X</span>
                <span className="text-xl font-black text-white leading-tight">ECOSYSTEM HUB</span>
              </div>
              
              {[
                { label: 'Trading Desk', type: 'trading', pos: 'top-0 left-1/2 -translate-x-1/2' },
                { label: 'PingX', type: 'ping', pos: 'top-1/4 right-0' },
                { label: 'PageX', type: 'page', pos: 'bottom-1/4 right-0' },
                { label: 'BuzzX', type: 'buzz', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
                { label: 'AdminX', type: 'admin', pos: 'top-1/2 left-0 -translate-y-1/2' },
              ].map((item, i) => (
                <div key={i} className={`absolute ${item.pos} flex flex-col items-center group transition-all duration-300 hover:scale-110`}>
                   <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-sky-500 transition-colors shadow-xl">
                     <AppLogo type={item.type} size={32} />
                   </div>
                   <span className="text-xs font-bold mt-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">{item.label}</span>
                </div>
              ))}

              <svg className="absolute inset-0 w-full h-full -z-0">
                <line x1="50%" y1="50%" x2="50%" y2="8%" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-30" />
                <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-30" />
                <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-30" />
                <line x1="50%" y1="50%" x2="50%" y2="92%" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-30" />
                <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-30" />
              </svg>
            </div>
          </div>
        );

      case 'hub-spoke':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12">
            <div className="w-full md:w-1/2 order-2 md:order-1 space-y-4">
               <h3 className="text-2xl font-bold text-sky-400 mb-6 flex items-center gap-2">
                 <Shield size={24} /> AdminX Infrastructure
               </h3>
                {[
                  { label: 'User Management', icon: <Users size={20}/> },
                  { label: 'Permission Control', icon: <Shield size={20}/> },
                  { label: 'Client Entities', icon: <Layout size={20}/> },
                  { label: 'Billing & Finance', icon: <TrendingUp size={20}/> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-sky-500/50 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-500">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                  </div>
                ))}
            </div>
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
              <div className="w-full">
                <AdminXMockup />
              </div>
            </div>
          </div>
        );

      case 'comparison':
        const getMockup = (title: string) => {
          if (title.includes('Trading')) return <TradingDeskMockup />;
          if (title.includes('Ping')) return <PingXMockup />;
          if (title.includes('Page')) return <PageXMockup />;
          if (title.includes('Buzz')) return <BuzzXXMockup />; // Buzz uses similar feed style
          return null;
        };

        return (
          <div className="flex flex-col gap-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
               <div className="space-y-6">
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-sky-500 group hover:bg-slate-800/60 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400">
                        <Rocket size={20} />
                      </div>
                      <h3 className="text-xl font-bold">Giá trị hiện tại</h3>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">{slide.content[0].split(': ')[1]}</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-indigo-500 group hover:bg-slate-800/60 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                        <Brain size={20} />
                      </div>
                      <h3 className="text-xl font-bold">Tầm nhìn AI</h3>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed">{slide.content[1].split(': ')[1]}</p>
                  </div>
               </div>
               <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative">
                  <div className="absolute top-2 left-2 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white font-bold border border-white/10 uppercase tracking-widest">Live Interface Screenshot</div>
                  {getMockup(slide.title)}
               </div>
            </div>
          </div>
        );

      case 'roadmap':
        return (
          <div className="mt-16 flex flex-col space-y-12">
            <div className="relative flex justify-between">
              <div className="absolute top-8 left-0 right-0 h-1 bg-slate-800 -z-0"></div>
              {[
                { label: '2024: Foundation', color: 'bg-slate-700', icon: <Settings /> },
                { label: '2025: Scale-up', color: 'bg-sky-700', icon: <TrendingUp /> },
                { label: '2026: AI Strategic', color: 'bg-indigo-700', icon: <Brain /> },
                { label: 'Future: Tech Lead', color: 'bg-[#004683]', icon: <Target /> }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center w-1/4 z-10">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center border-4 border-slate-900 shadow-xl mb-4 transition-transform hover:scale-110 cursor-pointer`}>
                    {step.icon}
                  </div>
                  <span className="text-center font-bold text-slate-300 text-sm px-2">{step.label}</span>
                </div>
              ))}
            </div>
            <div className="bg-sky-950/20 border border-sky-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-sky-400">
                <ChevronRight /> Roadmap Detail
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 size={18} className="text-sky-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {slide.content.map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-5 group hover:border-sky-500/50 transition-all">
                <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400 group-hover:bg-[#004683] group-hover:text-white transition-all">
                   {i === 0 ? <Target size={24} /> : i === 1 ? <Rocket size={24} /> : i === 2 ? <Shield size={24} /> : <Brain size={24} />}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.split(' - ')[0].split(': ')[0]}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.split(' - ')[1] || item.split(': ')[1] || item}</p>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="space-y-6 mt-12">
            {slide.content.map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-xl p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                   <CheckCircle2 size={18} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden p-12 md:p-16">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <div className="text-[14rem] font-black leading-none text-sky-900 select-none">
          {slide.id.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Slide Header */}
      <div className="relative z-10 mb-auto">
        {slide.type === 'cover' ? (
          <div className="flex flex-col h-full justify-center space-y-10 mt-10">
            <BrancherXLogo className="h-20 mb-4" />
            <div className="space-y-4">
               <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-sky-400 leading-none">
                {slide.title}
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-sky-400 opacity-90">
                {slide.subtitle}
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 pt-10">
              {slide.content.map((line, i) => (
                <div key={i} className="px-6 py-3 rounded-xl bg-[#004683]/30 border border-sky-900/50 backdrop-blur-md text-sky-100 font-semibold text-lg shadow-lg">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-2">
                <AppLogo type={slide.title} size={48} />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                  {slide.title}
                </h2>
              </div>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#004683] to-transparent rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      {/* Slide Visuals */}
      <div className="relative z-10 mb-auto">
        {slide.type !== 'cover' && renderVisual()}
      </div>

      {/* Slide Footer / Branding */}
      <div className="relative z-10 mt-auto flex justify-between items-end border-t border-slate-800/50 pt-8">
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
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-[#004683] rounded-full blur-[180px]"></div>
          <div className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-[#91D0EE] rounded-full blur-[150px]"></div>
        </div>
      )}
    </div>
  );
};

export default SlideLayout;

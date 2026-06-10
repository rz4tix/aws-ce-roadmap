import React from 'react';

interface DashboardProps {
  onStart: () => void;
}

export function Dashboard({ onStart }: DashboardProps) {
  return (
    <div className="space-y-8 h-full flex flex-col justify-center max-w-4xl mx-auto py-8">
      
      <div className="space-y-4">
        <div className="inline-block px-3 py-1.5 rounded bg-orange-500/20 border border-orange-500/50 text-orange-400 font-bold text-xs uppercase tracking-widest mb-2 shadow-sm">
          Intensive 6-Month Architect Training
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
          Zero to <span className="text-orange-500">AWS Engineer</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl font-medium">
          A rigorous 24-week curriculum designed to take you from basic Linux and networking concepts to deploying high-availability, production-grade cloud infrastructure via code.
        </p>
        
        <div className="pt-6">
          <button 
            onClick={onStart}
            className="bg-orange-500 hover:bg-orange-400 text-zinc-950 px-8 py-3 rounded-md text-sm font-black uppercase tracking-widest shadow-lg shadow-orange-500/20 transition-transform active:scale-95"
          >
            Start The Journey
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-4">
        <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 flex flex-col justify-center">
          <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div> The End Goal
          </h3>
          <ul className="space-y-4 text-xs md:text-sm text-zinc-300 font-medium">
            <li className="flex gap-3">
              <span className="text-orange-500 font-black">/</span>
              Design & deploy production-ready AWS architectures.
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 font-black">/</span>
              Manage infrastructure completely via Code (Terraform, CDK).
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 font-black">/</span>
              Build CI/CD pipelines & operate EKS/Kubernetes environments.
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 font-black">/</span>
              Be ready for the AWS Solutions Architect Associate (SAA-C03).
            </li>
          </ul>
        </div>

        <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 relative z-0 overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic select-none">W23</div>
          <h3 className="text-xs relative z-10 uppercase tracking-widest font-bold text-zinc-500 mb-4">Capstone Architecture Preview</h3>
          <div className="font-mono relative z-10 text-[10px] md:text-xs text-zinc-400 leading-relaxed border border-zinc-800 bg-zinc-900 inline-block p-4 rounded-xl shadow-inner">
            <span className="text-orange-500 font-bold border border-orange-500/30 bg-orange-500/10 px-1 rounded">Route53</span> → CloudFront → WAF → <span className="text-orange-500 font-bold border border-orange-500/30 bg-orange-500/10 px-1 rounded">ALB</span><br/>
            ↓<br/>
            <span className="text-white border border-zinc-700 bg-zinc-800 px-1 rounded inline-block my-1">ECS Fargate Cluster</span><br/>
            ↓<br/>
            <span className="text-orange-500 font-bold border border-zinc-700 bg-zinc-800 px-1 rounded">RDS Aurora Multi-AZ</span> + ElastiCache
          </div>
        </div>
      </div>
      
    </div>
  );
}

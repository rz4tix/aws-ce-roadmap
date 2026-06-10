import React from 'react';
import { Week } from '../types';

interface WeekDetailsProps {
  week: Week;
}

export function WeekDetails({ week }: WeekDetailsProps) {
  return (
    <div className="relative h-full font-sans">
      <div className="absolute top-0 right-0 opacity-[0.03] text-[12rem] font-black italic select-none hidden md:block -mt-10 mr-4">
        {week.id.toUpperCase()}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-start gap-3 mb-8">
          <div className="bg-orange-500 text-zinc-950 font-black px-3 py-1 rounded text-xl uppercase tracking-widest mb-1 shadow-md shadow-orange-500/20">
            {week.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{week.focus}</h2>
        </div>

        <div className="space-y-6">
          {/* Tasks List */}
          <div className="space-y-6 mt-8">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">Daily Objectives</h3>
            {week.tasks.map((task, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500 text-orange-500 flex items-center justify-center text-[10px] font-black">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  {idx < week.tasks.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800 mt-3 group-hover:bg-zinc-700 transition-colors"></div>
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-base font-bold text-white tracking-wide">{task.name}</span>
                    {task.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700 uppercase font-black tracking-widest shadow-sm">
                        [{tag}]
                      </span>
                    ))}
                    <span className="text-[9px] text-zinc-500 uppercase font-bold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">{task.hours} Hours</span>
                    {!task.freeTier && (
                       <span className="text-[9px] border border-red-500/50 bg-red-500/10 text-red-500 px-2 py-0.5 rounded uppercase font-black tracking-widest shadow-sm">
                         Costs Apply
                       </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-4">
            <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-5 shadow-inner">
              <h3 className="text-[10px] text-zinc-500 uppercase font-bold mb-3 tracking-widest">Weekly Project</h3>
              <p className="text-sm font-medium text-zinc-300 leading-relaxed">
                 <span className="text-orange-500 font-bold mr-2">&rsaquo;</span>
                 {week.miniProject}
              </p>
            </div>

            <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-5 shadow-inner flex flex-col justify-center">
               <h3 className="text-[10px] text-zinc-500 uppercase font-bold mb-3 tracking-widest">Recommended Reference</h3>
               <ul className="flex flex-wrap gap-2">
                 {week.resources.map((res, i) => (
                   <li key={i} className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 bg-zinc-800 border border-zinc-700 px-2.5 py-1 rounded">
                     {res}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

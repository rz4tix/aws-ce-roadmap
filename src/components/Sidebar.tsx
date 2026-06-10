import React from 'react';
import { Phase } from '../types';

interface SidebarProps {
  phases: Phase[];
  selectedWeekId: string | null;
  onSelectWeek: (id: string) => void;
}

export function Sidebar({ phases, selectedWeekId, onSelectWeek }: SidebarProps) {
  return (
    <>
      <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Curriculum Outline</h2>
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-6 w-full">
        {phases.map((phase) => (
          <div key={phase.id}>
            <div className="text-[10px] font-bold text-zinc-500 uppercase mb-2">
              {phase.title}
            </div>
            <div className="space-y-2">
              {phase.weeks.map((week) => {
                const isActive = selectedWeekId === week.id;
                return (
                  <button
                    key={week.id}
                    onClick={() => onSelectWeek(week.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all border ${
                      isActive 
                        ? 'bg-orange-500 text-zinc-950 font-bold border-orange-400 shadow-md' 
                        : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 border-zinc-700/50 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="text-[10px] uppercase font-bold opacity-80">{week.title}</span>
                      <span className="text-xs truncate">{week.focus}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

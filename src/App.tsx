/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { WeekDetails } from './components/WeekDetails';
import { curriculum } from './data';

export default function App() {
  const [selectedWeekId, setSelectedWeekId] = useState<string | null>(null);

  const selectedWeek = useMemo(() => {
    if (!selectedWeekId) return null;
    for (const phase of curriculum.phases) {
      const week = phase.weeks.find(w => w.id === selectedWeekId);
      if (week) return week;
    }
    return null;
  }, [selectedWeekId]);

  return (
    <div className="bg-zinc-950 text-zinc-100 p-4 md:p-6 w-full h-screen overflow-hidden font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_1fr] md:grid-rows-[auto_1fr] gap-4 h-full">
        
        {/* Header Section */}
        <div className="col-span-1 md:col-span-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-xl">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">AWS CLOUD ARCHITECT <span className="text-orange-500">24-WEEK ROADMAP</span></h1>
            <p className="text-zinc-400 text-sm mt-1 uppercase tracking-widest font-semibold">Junior to Production-Ready</p>
          </div>
          <div className="flex gap-4 items-center mt-4 md:mt-0">
            <button 
              onClick={() => setSelectedWeekId(null)} 
              className="text-xs text-zinc-500 hover:text-orange-500 font-bold uppercase tracking-widest transition-colors"
            >
              Overview
            </button>
            {selectedWeek && (
              <>
                <span className="text-zinc-700">/</span>
                <span className="text-xs text-zinc-950 bg-orange-500 px-2 py-1 rounded font-bold uppercase">{selectedWeek.title}</span>
              </>
            )}
            <div className="flex flex-col items-end ml-4 pl-4 border-l border-zinc-800 hidden lg:flex">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Total Duration</span>
              <span className="text-xs font-mono font-bold text-zinc-300 border border-zinc-700 bg-zinc-800 px-2 py-0.5 rounded">24 WEEKS</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg hidden md:flex flex-col overflow-hidden">
          <Sidebar 
            phases={curriculum.phases} 
            selectedWeekId={selectedWeekId} 
            onSelectWeek={setSelectedWeekId} 
          />
        </div>

        {/* Main Content Area */}
        <div className="col-span-1 md:col-span-9 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto custom-scrollbar w-full">
            {selectedWeek ? (
              <WeekDetails week={selectedWeek} />
            ) : (
              <Dashboard onStart={() => setSelectedWeekId('w1')} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

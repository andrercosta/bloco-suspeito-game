import React from 'react';
import { Timer } from 'lucide-react';

interface TurnCounterProps {
  count: number;
  onIncrement: () => void;
}

export function TurnCounter({ count, onIncrement }: TurnCounterProps) {
  return (
    <div className="card flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
      <div className="flex items-center gap-3">
        <Timer className="w-5 h-5 text-indigo-400" />
        <span className="text-slate-300">Turno atual:</span>
        <span className="text-2xl font-bold text-white">{count}</span>
      </div>
      <button onClick={onIncrement} className="btn-primary w-full sm:w-auto">
        Próximo turno
      </button>
    </div>
  );
}
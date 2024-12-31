import React from 'react';
import { GameItem } from '../types/game';

interface CheckListProps {
  title: string;
  items: GameItem[];
  onToggle: (id: string) => void;
}

export function CheckList({ title, items, onToggle }: CheckListProps) {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-3 cursor-pointer p-3 rounded-lg
                       transition-colors duration-200 hover:bg-white/5
                       touch-manipulation"
          >
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => onToggle(item.id)}
              className="h-5 w-5 rounded-md border-white/20 bg-white/10 
                         checked:bg-indigo-500 checked:border-0
                         focus:ring-offset-0 focus:ring-1 focus:ring-indigo-500
                         transition-all duration-200"
            />
            <span className={`text-base sm:text-sm ${
              item.isChecked 
                ? 'line-through text-slate-400' 
                : 'text-slate-200'
            }`}>
              {item.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
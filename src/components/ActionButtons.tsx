import React from 'react';
import { FileDown, RotateCcw } from 'lucide-react';

interface ActionButtonsProps {
  onExport: () => void;
  onReset: () => void;
}

export function ActionButtons({ onExport, onReset }: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <button onClick={onExport} className="btn-success">
        <FileDown className="w-4 h-4" />
        <span>Exportar</span>
      </button>
      <button onClick={onReset} className="btn-danger">
        <RotateCcw className="w-4 h-4" />
        <span>Limpar</span>
      </button>
    </div>
  );
}
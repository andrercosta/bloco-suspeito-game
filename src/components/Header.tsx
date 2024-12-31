import React from 'react';

export function Header() {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r 
                     from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Bloco de Anotações - Suspeito
      </h1>
      <p className="text-slate-400 text-base md:text-lg">
        Mantenha o registro das suas investigações
      </p>
    </div>
  );
}
import React from 'react';
import { Header } from './components/Header';
import { ActionButtons } from './components/ActionButtons';
import { CheckList } from './components/CheckList';
import { TurnCounter } from './components/TurnCounter';
import { useGameState } from './hooks/useGameState';

function App() {
  const { gameState, toggleItem, incrementTurn, resetGame } = useGameState();

  const handleExport = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [JSON.stringify(gameState, null, 2)],
      { type: 'text/json' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `clue-notes-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                    from-indigo-900 via-slate-900 to-black
                    py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <TurnCounter count={gameState.turnCount} onIncrement={incrementTurn} />
          <ActionButtons onExport={handleExport} onReset={resetGame} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <CheckList
            title="Suspeitos"
            items={gameState.suspects}
            onToggle={(id) => toggleItem('suspects', id)}
          />
          <CheckList
            title="Armas"
            items={gameState.weapons}
            onToggle={(id) => toggleItem('weapons', id)}
          />
          <CheckList
            title="Cômodos"
            items={gameState.rooms}
            onToggle={(id) => toggleItem('rooms', id)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
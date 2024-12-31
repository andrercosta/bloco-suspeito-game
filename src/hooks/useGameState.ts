import { useState, useEffect } from 'react';
import { GameState, initialGameState } from '../types/game';

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('clueGameState');
    return saved ? JSON.parse(saved) : initialGameState;
  });

  useEffect(() => {
    localStorage.setItem('clueGameState', JSON.stringify(gameState));
  }, [gameState]);

  const toggleItem = (category: keyof Omit<GameState, 'turnCount'>, id: string) => {
    setGameState(prev => ({
      ...prev,
      [category]: prev[category].map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      ),
    }));
  };

  const incrementTurn = () => {
    setGameState(prev => ({
      ...prev,
      turnCount: prev.turnCount + 1,
    }));
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  return {
    gameState,
    toggleItem,
    incrementTurn,
    resetGame,
  };
}
export interface GameItem {
  id: string;
  name: string;
  isChecked: boolean;
}

export interface GameState {
  suspects: GameItem[];
  weapons: GameItem[];
  rooms: GameItem[];
  turnCount: number;
}

export const initialGameState: GameState = {
  suspects: [
    { id: 'green', name: 'Motorista', isChecked: false },
    { id: 'white', name: 'Empregada', isChecked: false },
    { id: 'purple', name: 'Mordomo', isChecked: false },
    { id: 'black', name: 'Cozinheiro', isChecked: false },
    { id: 'red', name: 'Esposa', isChecked: false },
    { id: 'yellow', name: 'Jardineiro', isChecked: false },
    { id: 'blue', name: 'Vizinho', isChecked: false },
  ],
  weapons: [
    { id: 'revolver', name: 'Revolver', isChecked: false },
    { id: 'knife', name: 'Faca', isChecked: false },
    { id: 'pipe', name: 'Veneno', isChecked: false },
    { id: 'scissors', name: 'Tesoura de Ponta', isChecked: false },
    { id: 'wrench', name: 'Chave de Boca', isChecked: false },
    { id: 'lamp', name: 'Abajur', isChecked: false },
    { id: 'hammer', name: 'Martelo', isChecked: false },
  ],
  rooms: [
    { id: 'porch', name: 'Varanda', isChecked: false },
    { id: 'dining-room', name: 'Sala de Jantar', isChecked: false },
    { id: 'office', name: 'Escritório', isChecked: false },
    { id: 'library', name: 'Biblioteca', isChecked: false },
    { id: 'kitchen', name: 'Cozinha', isChecked: false },
    { id: 'room', name: 'Quarto', isChecked: false },
    { id: 'hall-central', name: 'Hall Central', isChecked: false},
    { id: 'bathroom', name: 'Banheiro', isChecked: false },
    { id: 'suite', name: 'Suite', isChecked: false },
    { id: 'staircase', name: 'Escadaria', isChecked: false },
  ],
  turnCount: 0,
}
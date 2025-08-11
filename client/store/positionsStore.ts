import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Position } from '../types';
import { positionsData } from '../data';

interface PositionsState {
  positions: Position[];
  getPosition: (id: string) => Position | undefined;
  updatePosition: (id: string, updates: Partial<Position>) => void;
  addPosition: (position: Omit<Position, 'id'>) => void;
  deletePosition: (id: string) => void;
  duplicatePosition: (id: string) => void;
}

export const usePositionsStore = create<PositionsState>()(
  devtools(
    persist(
      (set, get) => ({
        positions: positionsData,

        getPosition: (id: string) => {
          return get().positions.find(p => p.id === id);
        },

        updatePosition: (id: string, updates: Partial<Position>) => {
          set(
            (state) => ({
              positions: state.positions.map(p =>
                p.id === id 
                  ? { ...p, ...updates, lastUpdated: new Date().toLocaleDateString() }
                  : p
              )
            }),
            false,
            'updatePosition'
          );
        },

        addPosition: (position: Omit<Position, 'id'>) => {
          const newPosition: Position = {
            ...position,
            id: Date.now().toString(),
            createdDate: new Date().toLocaleDateString(),
            lastUpdated: new Date().toLocaleDateString()
          };
          
          set(
            (state) => ({
              positions: [newPosition, ...state.positions]
            }),
            false,
            'addPosition'
          );
        },

        deletePosition: (id: string) => {
          set(
            (state) => ({
              positions: state.positions.filter(p => p.id !== id)
            }),
            false,
            'deletePosition'
          );
        },

        duplicatePosition: (id: string) => {
          const position = get().getPosition(id);
          if (position) {
            const duplicatedPosition: Position = {
              ...position,
              id: Date.now().toString(),
              name: `${position.name} (Copy)`,
              status: 'created',
              createdDate: new Date().toLocaleDateString(),
              lastUpdated: new Date().toLocaleDateString()
            };
            
            set(
              (state) => ({
                positions: [duplicatedPosition, ...state.positions]
              }),
              false,
              'duplicatePosition'
            );
          }
        }
      }),
      {
        name: 'positions-storage',
        partialize: (state) => ({ positions: state.positions })
      }
    ),
    {
      name: 'positions-store'
    }
  )
);

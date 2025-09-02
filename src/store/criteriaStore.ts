import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Criteria } from '../types';
import { criteriaData } from '../data';

interface CriteriaState {
  criteria: Record<string, Criteria[]>;
  getCriteria: (positionId: string) => Criteria[];
  setCriteria: (positionId: string, criteria: Criteria[]) => void;
  addCriteria: (positionId: string, criteria: Omit<Criteria, 'id'>) => void;
  updateCriteria: (positionId: string, criteriaId: number, updates: Partial<Criteria>) => void;
  deleteCriteria: (positionId: string, criteriaId: number) => void;
}

export const useCriteriaStore = create<CriteriaState>()(
  devtools(
    persist(
      (set, get) => ({
        criteria: criteriaData,

        getCriteria: (positionId: string) => {
          return get().criteria[positionId] || [];
        },

        setCriteria: (positionId: string, criteria: Criteria[]) => {
          set(
            (state) => ({
              criteria: { ...state.criteria, [positionId]: criteria }
            }),
            false,
            'setCriteria'
          );
        },

        addCriteria: (positionId: string, criteria: Omit<Criteria, 'id'>) => {
          const currentCriteria = get().getCriteria(positionId);
          const newCriteria: Criteria = {
            ...criteria,
            id: Date.now(),
            createdDate: new Date().toLocaleDateString()
          };

          set(
            (state) => ({
              criteria: {
                ...state.criteria,
                [positionId]: [...currentCriteria, newCriteria]
              }
            }),
            false,
            'addCriteria'
          );
        },

        updateCriteria: (positionId: string, criteriaId: number, updates: Partial<Criteria>) => {
          const currentCriteria = get().getCriteria(positionId);
          const updatedCriteria = currentCriteria.map(c =>
            c.id === criteriaId ? { ...c, ...updates } : c
          );

          set(
            (state) => ({
              criteria: {
                ...state.criteria,
                [positionId]: updatedCriteria
              }
            }),
            false,
            'updateCriteria'
          );
        },

        deleteCriteria: (positionId: string, criteriaId: number) => {
          const currentCriteria = get().getCriteria(positionId);
          const filteredCriteria = currentCriteria.filter(c => c.id !== criteriaId);

          set(
            (state) => ({
              criteria: {
                ...state.criteria,
                [positionId]: filteredCriteria
              }
            }),
            false,
            'deleteCriteria'
          );
        }
      }),
      {
        name: 'criteria-storage',
        partialize: (state) => ({ criteria: state.criteria })
      }
    ),
    {
      name: 'criteria-store'
    }
  )
);

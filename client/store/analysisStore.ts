import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AnalysisSession } from '../types';
import { analysisData } from '../data';

interface AnalysisState {
  analysisSessions: Record<string, AnalysisSession>;
  getAnalysisSession: (positionId: string) => AnalysisSession | undefined;
  setAnalysisSession: (positionId: string, session: AnalysisSession) => void;
  deleteAnalysisSession: (positionId: string) => void;
  completeAnalysis: (positionId: string, session: AnalysisSession) => void;
}

export const useAnalysisStore = create<AnalysisState>()(
  devtools(
    persist(
      (set, get) => ({
        analysisSessions: analysisData,

        getAnalysisSession: (positionId: string) => {
          return get().analysisSessions[positionId];
        },

        setAnalysisSession: (positionId: string, session: AnalysisSession) => {
          set(
            (state) => ({
              analysisSessions: {
                ...state.analysisSessions,
                [positionId]: session
              }
            }),
            false,
            'setAnalysisSession'
          );
        },

        deleteAnalysisSession: (positionId: string) => {
          set(
            (state) => {
              const { [positionId]: deleted, ...remaining } = state.analysisSessions;
              return { analysisSessions: remaining };
            },
            false,
            'deleteAnalysisSession'
          );
        },

        completeAnalysis: (positionId: string, session: AnalysisSession) => {
          const completedSession: AnalysisSession = {
            ...session,
            completedDate: new Date().toLocaleDateString(),
            averageScore: Math.round(
              session.results.reduce((sum, result) => sum + result.score, 0) / session.results.length
            )
          };

          set(
            (state) => ({
              analysisSessions: {
                ...state.analysisSessions,
                [positionId]: completedSession
              }
            }),
            false,
            'completeAnalysis'
          );
        }
      }),
      {
        name: 'analysis-storage',
        partialize: (state) => ({ analysisSessions: state.analysisSessions })
      }
    ),
    {
      name: 'analysis-store'
    }
  )
);

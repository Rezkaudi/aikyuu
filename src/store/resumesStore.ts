import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Resume } from '../types';
import { resumesData } from '../data';

interface ResumesState {
  resumes: Record<string, Resume[]>;
  getResumes: (positionId: string) => Resume[];
  setResumes: (positionId: string, resumes: Resume[]) => void;
  addResume: (positionId: string, resume: Omit<Resume, 'id'>) => void;
  addMultipleResumes: (positionId: string, resumes: Omit<Resume, 'id'>[]) => void;
  deleteResume: (positionId: string, resumeId: number) => void;
  updateResume: (positionId: string, resumeId: number, updates: Partial<Resume>) => void;
}

export const useResumesStore = create<ResumesState>()(
  devtools(
    persist(
      (set, get) => ({
        resumes: resumesData,

        getResumes: (positionId: string) => {
          return get().resumes[positionId] || [];
        },

        setResumes: (positionId: string, resumes: Resume[]) => {
          set(
            (state) => ({
              resumes: { ...state.resumes, [positionId]: resumes }
            }),
            false,
            'setResumes'
          );
        },

        addResume: (positionId: string, resume: Omit<Resume, 'id'>) => {
          const currentResumes = get().getResumes(positionId);
          const newResume: Resume = {
            ...resume,
            id: Date.now(),
            uploadDate: 'Just now'
          };

          set(
            (state) => ({
              resumes: {
                ...state.resumes,
                [positionId]: [newResume, ...currentResumes]
              }
            }),
            false,
            'addResume'
          );
        },

        addMultipleResumes: (positionId: string, resumes: Omit<Resume, 'id'>[]) => {
          const currentResumes = get().getResumes(positionId);
          const newResumes: Resume[] = resumes.map((resume, index) => ({
            ...resume,
            id: Date.now() + index,
            uploadDate: 'Just now'
          }));

          set(
            (state) => ({
              resumes: {
                ...state.resumes,
                [positionId]: [...newResumes, ...currentResumes]
              }
            }),
            false,
            'addMultipleResumes'
          );
        },

        deleteResume: (positionId: string, resumeId: number) => {
          const currentResumes = get().getResumes(positionId);
          const filteredResumes = currentResumes.filter(r => r.id !== resumeId);

          set(
            (state) => ({
              resumes: {
                ...state.resumes,
                [positionId]: filteredResumes
              }
            }),
            false,
            'deleteResume'
          );
        },

        updateResume: (positionId: string, resumeId: number, updates: Partial<Resume>) => {
          const currentResumes = get().getResumes(positionId);
          const updatedResumes = currentResumes.map(r =>
            r.id === resumeId ? { ...r, ...updates } : r
          );

          set(
            (state) => ({
              resumes: {
                ...state.resumes,
                [positionId]: updatedResumes
              }
            }),
            false,
            'updateResume'
          );
        }
      }),
      {
        name: 'resumes-storage',
        partialize: (state) => ({ resumes: state.resumes })
      }
    ),
    {
      name: 'resumes-store'
    }
  )
);


// Export all Zustand stores
import { useAnalysisStore } from "./analysisStore";
import { useCriteriaStore } from "./criteriaStore";
import { usePositionsStore } from "./positionsStore";
import { useResumesStore } from "./resumesStore";
import { useUIStore } from "./uiStore";


// Combined hook for convenience
export const useAppStores = () => ({
  positions: usePositionsStore(),
  criteria: useCriteriaStore(),
  resumes: useResumesStore(),
  analysis: useAnalysisStore(),
  ui: useUIStore(),
});

// Selectors for better performance
export const usePositionById = (id: string) =>
  usePositionsStore((state) => state.getPosition(id));

export const useCriteriaByPosition = (positionId: string) =>
  useCriteriaStore((state) => state.getCriteria(positionId));

export const useResumesByPosition = (positionId: string) =>
  useResumesStore((state) => state.getResumes(positionId));

export const useAnalysisByPosition = (positionId: string) =>
  useAnalysisStore((state) => state.getAnalysisSession(positionId));

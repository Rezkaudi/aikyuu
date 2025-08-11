export { positionsData } from './positions';
export { criteriaData } from './criteria';
export { resumesData } from './resumes';
export { analysisData } from './analysis';

// Data utilities
export const getInitialAppData = () => {
  return {
    positions: positionsData,
    criteria: criteriaData,
    resumes: resumesData,
    analysisSessions: analysisData
  };
};

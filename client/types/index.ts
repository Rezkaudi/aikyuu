export interface Position {
  id: string;
  name: string;
  description: string;
  status: 'created' | 'in_progress' | 'completed';
  createdDate: string;
  lastUpdated: string;
}

export interface Criteria {
  id: number;
  name: string;
  description: string;
  createdDate: string;
  positionId: string;
}

export interface Resume {
  id: number;
  filename: string;
  size: string;
  uploadDate: string;
  positionId: string;
}

export interface CVAnalysisResult {
  id: number;
  candidateName: string;
  resumeId: number;
  positionId: string;
  score: number;
  criteriaResults: CriteriaResult[];
  analyzedDate: string;
}

export interface CriteriaResult {
  id: number;
  criteriaId: number;
  text: string;
  passed: boolean;
  confidence: number;
  name: string;
  description: string;
}

export interface AnalysisSession {
  positionId: string;
  results: CVAnalysisResult[];
  completedDate: string;
  totalCandidates: number;
  averageScore: number;
}

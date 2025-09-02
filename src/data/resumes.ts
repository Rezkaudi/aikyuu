import { Resume } from '../types';

export const resumesData: Record<string, Resume[]> = {
  '1': [
    { 
      id: 1, 
      filename: 'john_doe_cv.pdf', 
      size: '2.1 MB', 
      uploadDate: '2 hours ago', 
      positionId: '1' 
    },
    { 
      id: 2, 
      filename: 'jane_smith_cv.pdf', 
      size: '1.8 MB', 
      uploadDate: '1 day ago', 
      positionId: '1' 
    }
  ],
  '3': [
    { 
      id: 3, 
      filename: 'alice_johnson_cv.pdf', 
      size: '2.0 MB', 
      uploadDate: '3 days ago', 
      positionId: '3' 
    },
    { 
      id: 4, 
      filename: 'bob_wilson_cv.pdf', 
      size: '2.3 MB', 
      uploadDate: '4 days ago', 
      positionId: '3' 
    },
    { 
      id: 5, 
      filename: 'carol_brown_cv.pdf', 
      size: '1.9 MB', 
      uploadDate: '5 days ago', 
      positionId: '3' 
    }
  ],
  '4': [
    { 
      id: 6, 
      filename: 'david_miller_cv.pdf', 
      size: '2.2 MB', 
      uploadDate: '1 week ago', 
      positionId: '4' 
    },
    { 
      id: 7, 
      filename: 'eva_davis_cv.pdf', 
      size: '2.0 MB', 
      uploadDate: '1 week ago', 
      positionId: '4' 
    }
  ]
};

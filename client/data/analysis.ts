import { AnalysisSession } from '../types';

export const analysisData: Record<string, AnalysisSession> = {
  '1': {
    positionId: '1',
    completedDate: 'Jul 18, 2025',
    totalCandidates: 2,
    averageScore: 74,
    results: [
      {
        id: 101,
        candidateName: 'john doe',
        resumeId: 1,
        positionId: '1',
        score: 82,
        analyzedDate: 'Jul 18, 2025',
        criteriaResults: [
          {
            id: 101,
            criteriaId: 1,
            text: 'React experience minimum 3 years - 4 years of React development',
            passed: true,
            confidence: 0.95
          },
          {
            id: 102,
            criteriaId: 2,
            text: 'TypeScript proficiency required - Advanced TypeScript skills',
            passed: true,
            confidence: 0.92
          },
          {
            id: 103,
            criteriaId: 3,
            text: 'Experience with state management - Redux and Zustand experience',
            passed: true,
            confidence: 0.88
          },
          {
            id: 104,
            criteriaId: 4,
            text: 'CSS frameworks knowledge - Tailwind CSS and styled-components',
            passed: true,
            confidence: 0.85
          },
          {
            id: 105,
            criteriaId: 1,
            text: 'Component architecture - Well-structured React components',
            passed: true,
            confidence: 0.90
          },
          {
            id: 106,
            criteriaId: 2,
            text: 'Testing experience - Jest and React Testing Library',
            passed: false,
            confidence: 0.55
          },
          {
            id: 107,
            criteriaId: 3,
            text: 'Performance optimization - Code splitting and lazy loading',
            passed: true,
            confidence: 0.78
          },
          {
            id: 108,
            criteriaId: 4,
            text: 'Responsive design - Mobile-first approach',
            passed: true,
            confidence: 0.87
          }
        ]
      },
      {
        id: 102,
        candidateName: 'jane smith',
        resumeId: 2,
        positionId: '1',
        score: 66,
        analyzedDate: 'Jul 18, 2025',
        criteriaResults: [
          {
            id: 109,
            criteriaId: 1,
            text: 'React experience minimum 3 years - 2.5 years React development',
            passed: false,
            confidence: 0.65
          },
          {
            id: 110,
            criteriaId: 2,
            text: 'TypeScript proficiency required - Basic TypeScript knowledge',
            passed: false,
            confidence: 0.48
          },
          {
            id: 111,
            criteriaId: 3,
            text: 'Experience with state management - Context API experience',
            passed: true,
            confidence: 0.72
          },
          {
            id: 112,
            criteriaId: 4,
            text: 'CSS frameworks knowledge - Bootstrap and basic CSS',
            passed: true,
            confidence: 0.68
          },
          {
            id: 113,
            criteriaId: 1,
            text: 'Frontend tooling - Webpack and Vite configuration',
            passed: true,
            confidence: 0.82
          },
          {
            id: 114,
            criteriaId: 2,
            text: 'Code quality - ESLint and Prettier setup',
            passed: true,
            confidence: 0.75
          },
          {
            id: 115,
            criteriaId: 3,
            text: 'API integration - RESTful API consumption',
            passed: true,
            confidence: 0.89
          },
          {
            id: 116,
            criteriaId: 4,
            text: 'Version control - Git and GitHub workflows',
            passed: true,
            confidence: 0.91
          }
        ]
      }
    ]
  },
  '3': {
    positionId: '3',
    completedDate: 'Jul 17, 2025',
    totalCandidates: 3,
    averageScore: 67,
    results: [
      {
        id: 1,
        candidateName: 'alice johnson',
        resumeId: 3,
        positionId: '3',
        score: 85,
        analyzedDate: 'Jul 17, 2025',
        criteriaResults: [
          { 
            id: 1, 
            criteriaId: 5, 
            text: 'Product strategy experience - Strong background in B2B products', 
            passed: true, 
            confidence: 0.92 
          },
          { 
            id: 2, 
            criteriaId: 6, 
            text: 'User research background - Limited experience mentioned', 
            passed: false, 
            confidence: 0.65 
          },
          { 
            id: 3, 
            criteriaId: 7, 
            text: 'Agile methodology knowledge - Scrum master certification', 
            passed: true, 
            confidence: 0.95 
          },
          { 
            id: 4, 
            criteriaId: 8, 
            text: 'Stakeholder management skills - Multiple cross-functional projects', 
            passed: true, 
            confidence: 0.88 
          },
          { 
            id: 5, 
            criteriaId: 5, 
            text: 'Leadership experience - Team of 8 people', 
            passed: true, 
            confidence: 0.78 
          },
          { 
            id: 6, 
            criteriaId: 6, 
            text: 'Technical understanding - Working with engineering teams', 
            passed: true, 
            confidence: 0.82 
          },
          { 
            id: 7, 
            criteriaId: 7, 
            text: 'Data analysis skills - Proficient in analytics tools', 
            passed: false, 
            confidence: 0.45 
          },
          { 
            id: 8, 
            criteriaId: 8, 
            text: 'Communication skills - Excellent presentation abilities', 
            passed: true, 
            confidence: 0.91 
          },
          { 
            id: 9, 
            criteriaId: 5, 
            text: 'Strategic thinking - Demonstrated in case studies', 
            passed: true, 
            confidence: 0.89 
          }
        ]
      },
      {
        id: 2,
        candidateName: 'bob wilson',
        resumeId: 4,
        positionId: '3',
        score: 72,
        analyzedDate: 'Jul 17, 2025',
        criteriaResults: [
          { 
            id: 10, 
            criteriaId: 5, 
            text: 'Product strategy experience - 5 years in product management', 
            passed: true, 
            confidence: 0.87 
          },
          { 
            id: 11, 
            criteriaId: 6, 
            text: 'User research background - Extensive UX research experience', 
            passed: true, 
            confidence: 0.93 
          },
          { 
            id: 12, 
            criteriaId: 7, 
            text: 'Agile methodology knowledge - Kanban and Scrum experience', 
            passed: true, 
            confidence: 0.89 
          },
          { 
            id: 13, 
            criteriaId: 8, 
            text: 'Stakeholder management skills - C-level presentation experience', 
            passed: true, 
            confidence: 0.91 
          },
          { 
            id: 14, 
            criteriaId: 5, 
            text: 'Market analysis skills - Competitive intelligence background', 
            passed: false, 
            confidence: 0.58 
          },
          { 
            id: 15, 
            criteriaId: 6, 
            text: 'Technical documentation - API documentation experience', 
            passed: true, 
            confidence: 0.75 
          },
          { 
            id: 16, 
            criteriaId: 7, 
            text: 'Project management - PMP certification', 
            passed: false, 
            confidence: 0.42 
          },
          { 
            id: 17, 
            criteriaId: 8, 
            text: 'Customer interviews - Regular customer feedback sessions', 
            passed: true, 
            confidence: 0.86 
          },
          { 
            id: 18, 
            criteriaId: 5, 
            text: 'Roadmap planning - Multi-quarter planning experience', 
            passed: true, 
            confidence: 0.84 
          }
        ]
      },
      {
        id: 3,
        candidateName: 'carol brown',
        resumeId: 5,
        positionId: '3',
        score: 45,
        analyzedDate: 'Jul 17, 2025',
        criteriaResults: [
          { 
            id: 19, 
            criteriaId: 5, 
            text: 'Product strategy experience - Limited to junior roles', 
            passed: false, 
            confidence: 0.35 
          },
          { 
            id: 20, 
            criteriaId: 6, 
            text: 'User research background - Some survey experience', 
            passed: false, 
            confidence: 0.48 
          },
          { 
            id: 21, 
            criteriaId: 7, 
            text: 'Agile methodology knowledge - Basic understanding of Scrum', 
            passed: true, 
            confidence: 0.65 
          },
          { 
            id: 22, 
            criteriaId: 8, 
            text: 'Stakeholder management skills - Internal team coordination', 
            passed: false, 
            confidence: 0.52 
          },
          { 
            id: 23, 
            criteriaId: 5, 
            text: 'Analytical skills - Strong Excel and SQL skills', 
            passed: true, 
            confidence: 0.78 
          },
          { 
            id: 24, 
            criteriaId: 6, 
            text: 'Design thinking - Participated in design workshops', 
            passed: true, 
            confidence: 0.71 
          },
          { 
            id: 25, 
            criteriaId: 7, 
            text: 'Process improvement - Optimized internal workflows', 
            passed: false, 
            confidence: 0.39 
          },
          { 
            id: 26, 
            criteriaId: 8, 
            text: 'Documentation skills - Detailed requirement specifications', 
            passed: true, 
            confidence: 0.82 
          },
          { 
            id: 27, 
            criteriaId: 5, 
            text: 'Learning agility - Recent product management courses', 
            passed: true, 
            confidence: 0.69 
          }
        ]
      }
    ]
  },
  '4': {
    positionId: '4',
    completedDate: 'Jul 16, 2025',
    totalCandidates: 2,
    averageScore: 73,
    results: [
      {
        id: 4,
        candidateName: 'david miller',
        resumeId: 6,
        positionId: '4',
        score: 78,
        analyzedDate: 'Jul 16, 2025',
        criteriaResults: [
          { 
            id: 28, 
            criteriaId: 9, 
            text: 'Node.js experience required - 4 years backend development', 
            passed: true, 
            confidence: 0.91 
          },
          { 
            id: 29, 
            criteriaId: 10, 
            text: 'Database design skills - PostgreSQL and MongoDB expert', 
            passed: true, 
            confidence: 0.89 
          },
          { 
            id: 30, 
            criteriaId: 11, 
            text: 'API development experience - RESTful and GraphQL APIs', 
            passed: true, 
            confidence: 0.94 
          },
          { 
            id: 31, 
            criteriaId: 12, 
            text: 'Cloud infrastructure knowledge - AWS certified', 
            passed: true, 
            confidence: 0.87 
          },
          { 
            id: 32, 
            criteriaId: 9, 
            text: 'Microservices architecture - Designed scalable systems', 
            passed: false, 
            confidence: 0.56 
          },
          { 
            id: 33, 
            criteriaId: 10, 
            text: 'Performance optimization - Query optimization experience', 
            passed: true, 
            confidence: 0.83 
          },
          { 
            id: 34, 
            criteriaId: 11, 
            text: 'Testing methodologies - Unit and integration testing', 
            passed: false, 
            confidence: 0.47 
          },
          { 
            id: 35, 
            criteriaId: 12, 
            text: 'DevOps practices - CI/CD pipeline experience', 
            passed: true, 
            confidence: 0.79 
          },
          { 
            id: 36, 
            criteriaId: 9, 
            text: 'Security practices - OWASP security guidelines', 
            passed: true, 
            confidence: 0.81 
          }
        ]
      },
      {
        id: 5,
        candidateName: 'eva davis',
        resumeId: 7,
        positionId: '4',
        score: 68,
        analyzedDate: 'Jul 16, 2025',
        criteriaResults: [
          { 
            id: 37, 
            criteriaId: 9, 
            text: 'Node.js experience required - 3 years full-stack development', 
            passed: true, 
            confidence: 0.85 
          },
          { 
            id: 38, 
            criteriaId: 10, 
            text: 'Database design skills - MySQL and Redis experience', 
            passed: true, 
            confidence: 0.76 
          },
          { 
            id: 39, 
            criteriaId: 11, 
            text: 'API development experience - REST API development', 
            passed: true, 
            confidence: 0.82 
          },
          { 
            id: 40, 
            criteriaId: 12, 
            text: 'Cloud infrastructure knowledge - Google Cloud Platform', 
            passed: false, 
            confidence: 0.58 
          },
          { 
            id: 41, 
            criteriaId: 9, 
            text: 'Framework expertise - Express.js and Fastify', 
            passed: true, 
            confidence: 0.88 
          },
          { 
            id: 42, 
            criteriaId: 10, 
            text: 'Data modeling - E-commerce database design', 
            passed: false, 
            confidence: 0.51 
          },
          { 
            id: 43, 
            criteriaId: 11, 
            text: 'Documentation - OpenAPI specification experience', 
            passed: true, 
            confidence: 0.74 
          },
          { 
            id: 44, 
            criteriaId: 12, 
            text: 'Monitoring - Application performance monitoring', 
            passed: false, 
            confidence: 0.43 
          },
          { 
            id: 45, 
            criteriaId: 9, 
            text: 'Code quality - ESLint and code review practices', 
            passed: true, 
            confidence: 0.86 
          }
        ]
      }
    ]
  }
};

import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/ui/navbar';
import { usePositionsStore, useCriteriaStore, useAnalysisStore, useUIStore } from '../store';
import { CVAnalysisResult } from '../types';

const ToggleSwitch: React.FC<{
  isActive: boolean;
  label: string;
  onToggle?: () => void;
}> = ({ isActive, label, onToggle }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onToggle}
        className="relative w-16 h-9 bg-gray-300 rounded-full p-1 transition-colors hover:bg-gray-400"
      >
        <div className={`w-4 h-7 rounded-full transition-transform ${
          isActive ? 'bg-aikyuu-primary translate-x-0' : 'bg-gray-500 translate-x-0'
        }`} />
      </button>
      <span className="text-2xl font-montserrat font-bold text-aikyuu-dark">{label}</span>
    </div>
  );
};

const CriteriaCard: React.FC<{
  positionId: string;
  isVisible: boolean;
}> = ({ positionId, isVisible }) => {
  const { getCriteria } = useCriteriaStore();
  const criteria = getCriteria(positionId);

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-[0_0_20px_20px] p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-1">
          {criteria.slice(0, Math.ceil(criteria.length / 2)).map((criterion, index) => (
            <div key={criterion.id} className="bg-white rounded-[15px] h-16 flex items-center px-3">
              <div className="flex items-center gap-4 w-full">
                <div className="w-16 h-9 bg-gray-300 rounded-full p-1">
                  <div className="w-4 h-7 bg-aikyuu-primary rounded-full" />
                </div>
                <span className="text-lg text-gray-600 font-montserrat">{criterion.name}:</span>
                <span className="text-base font-montserrat font-bold text-aikyuu-dark flex-1">
                  {criterion.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-1">
          {criteria.slice(Math.ceil(criteria.length / 2)).map((criterion, index) => (
            <div key={criterion.id} className="bg-white rounded-[15px] h-16 flex items-center px-3">
              <div className="flex items-center gap-4 w-full">
                <div className="w-16 h-9 bg-gray-300 rounded-full p-1">
                  <div className="w-4 h-7 bg-aikyuu-primary rounded-full" />
                </div>
                <span className="text-lg text-gray-600 font-montserrat">{criterion.name}:</span>
                <span className="text-base font-montserrat font-bold text-aikyuu-dark flex-1">
                  {criterion.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnalysisCard: React.FC<{ result: CVAnalysisResult }> = ({ result }) => {
  const progressPercentage = result.score;

  return (
    <div className="flex flex-col items-center gap-9">
      {/* Progress Bar Header */}
      <div className="w-full max-w-[700px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-montserrat font-bold text-aikyuu-dark">{result.candidateName}</span>
          <span className="text-xl font-montserrat font-medium text-aikyuu-dark">Score: {result.score}%</span>
        </div>
        <div className="relative w-full h-1.5 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-aikyuu-primary rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-aikyuu-primary rounded-full"
            style={{ left: `${progressPercentage}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>

      {/* Analysis Header */}
      <div className="flex items-center gap-4">
        <ToggleSwitch isActive={true} label="Analysis cv" />
      </div>

      {/* Analysis Content */}
      <div className="w-full max-w-[727px] bg-white rounded-[40px] p-8">
        <div className="space-y-6">
          {result.criteriaResults.map((criteriaResult) => (
            <div key={criteriaResult.id} className="flex items-center gap-6">
              {/* Icon */}
              <div className="w-8 h-8 flex-shrink-0">
                {criteriaResult.passed ? (
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M14.9559 24.6864C14.7077 24.936 14.3692 25.0754 14.0174 25.0754C13.6656 25.0754 13.327 24.936 13.0788 24.6864L5.58348 17.1898C4.80548 16.4118 4.80548 15.1506 5.58348 14.374L6.52201 13.4355C7.30001 12.6575 8.55977 12.6575 9.33777 13.4355L14.0174 18.1151L26.6622 5.47022C27.4402 4.69222 28.7014 4.69222 29.478 5.47022L30.4165 6.40876C31.1945 7.18676 31.1945 8.44793 30.4165 9.22451L14.9559 24.6864Z" fill="#00EBBD"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M22.9015 15.479L28.3401 20.918C28.941 21.519 28.941 22.493 28.3401 23.093L27.615 23.818C27.0139 24.419 26.0397 24.419 25.4398 23.818L20.0014 18.379L14.5629 23.819C13.9619 24.42 12.9877 24.42 12.3878 23.819L11.6616 23.094C11.0607 22.493 11.0607 21.519 11.6616 20.919L17.1011 15.479L11.6627 10.041C11.0617 9.44 11.0617 8.465 11.6627 7.865L12.3878 7.14C12.9887 6.54 13.9629 6.54 14.5629 7.14L20.0014 12.579L25.4398 7.14C26.0409 6.54 27.0151 6.54 27.615 7.14L28.3401 7.865C28.941 8.467 28.941 9.441 28.3401 10.041L22.9015 15.479Z" fill="#FF4656"/>
                  </svg>
                )}
              </div>
              {/* Text */}
              <div className="flex-1">
                <span className="text-xl font-montserrat font-medium text-aikyuu-dark">
                  {criteriaResult.text}
                </span>
                <div className="text-sm text-gray-500 mt-1">
                  Confidence: {Math.round(criteriaResult.confidence * 100)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider lines */}
        <div className="space-y-6 mt-6">
          {Array.from({ length: Math.min(8, result.criteriaResults.length) }).map((_, i) => (
            <div key={i} className="w-full h-px bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AnalysisCompleted() {
  const { id } = useParams<{ id: string }>();
  const { getPosition } = usePositionsStore();
  const { getAnalysisSession } = useAnalysisStore();
  const { showCriteria, showAnalysis, setShowCriteria, setShowAnalysis } = useUIStore();

  const position = getPosition(id!);
  const analysisSession = getAnalysisSession(id!);

  if (!position) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-montserrat font-bold text-aikyuu-dark mb-4">Position Not Found</h1>
            <p className="text-lg font-montserrat text-gray-600 mb-8">The position you're looking for doesn't exist.</p>
            <Link
              to="/use-cases"
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors"
            >
              Back to Use Cases
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!analysisSession) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-montserrat font-bold text-aikyuu-dark mb-4">Analysis Not Completed</h1>
            <p className="text-lg font-montserrat text-gray-600 mb-8">This position hasn't been analyzed yet.</p>
            <Link
              to={`/position/${id}`}
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors"
            >
              Go to Position
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const exportDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target as Node)) {
        setShowExportDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExportCSV = () => {
    const csvHeaders = [
      'Candidate Name',
      'Overall Score (%)',
      'Criteria Name',
      'Criteria Description',
      'Passed',
      'Confidence (%)',
      'Result Text'
    ];

    const csvRows = [csvHeaders.join(',')];

    analysisSession.results.forEach(result => {
      result.criteriaResults.forEach(criteria => {
        const row = [
          `"${result.candidateName}"`,
          result.score.toString(),
          `"${criteria.name || 'N/A'}"`,
          `"${criteria.description || 'N/A'}"`,
          criteria.passed ? 'Yes' : 'No',
          Math.round(criteria.confidence * 100).toString(),
          `"${criteria.text.replace(/"/g, '""')}"`
        ];
        csvRows.push(row.join(','));
      });
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${position.name.replace(/[^a-zA-Z0-9]/g, '_')}_analysis_results.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setShowExportDropdown(false);
  };

  const handleExportExcel = () => {
    // Create a comprehensive Excel-style CSV with multiple sections
    const rows = [];

    // Header section
    rows.push(['Position Analysis Report']);
    rows.push(['']);
    rows.push(['Position Name:', position.name]);
    rows.push(['Completed Date:', analysisSession.completedDate]);
    rows.push(['Total Candidates:', analysisSession.totalCandidates.toString()]);
    rows.push(['Average Score:', `${analysisSession.averageScore}%`]);
    rows.push(['']);
    rows.push(['']);

    // Summary section
    rows.push(['Candidate Summary']);
    rows.push(['Candidate Name', 'Overall Score (%)', 'Total Criteria', 'Criteria Passed', 'Pass Rate (%)']);

    analysisSession.results.forEach(result => {
      const passedCount = result.criteriaResults.filter(c => c.passed).length;
      const totalCount = result.criteriaResults.length;
      const passRate = Math.round((passedCount / totalCount) * 100);

      rows.push([
        result.candidateName,
        result.score.toString(),
        totalCount.toString(),
        passedCount.toString(),
        `${passRate}%`
      ]);
    });

    rows.push(['']);
    rows.push(['']);

    // Detailed results section
    rows.push(['Detailed Criteria Results']);
    rows.push(['Candidate Name', 'Overall Score (%)', 'Criteria Name', 'Criteria Description', 'Status', 'Confidence (%)', 'Analysis Result']);

    analysisSession.results.forEach(result => {
      result.criteriaResults.forEach(criteria => {
        rows.push([
          result.candidateName,
          result.score.toString(),
          criteria.name || 'N/A',
          criteria.description || 'N/A',
          criteria.passed ? 'PASSED' : 'FAILED',
          `${Math.round(criteria.confidence * 100)}%`,
          criteria.text
        ]);
      });
    });

    // Convert to CSV format
    const csvContent = rows.map(row =>
      row.map(cell => `"${cell.toString().replace(/"/g, '""')}"`).join(',')
    ).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${position.name.replace(/[^a-zA-Z0-9]/g, '_')}_detailed_analysis.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setShowExportDropdown(false);
  };

  const handleExportJSON = () => {
    const exportData = {
      position: position.name,
      completedDate: analysisSession.completedDate,
      totalCandidates: analysisSession.totalCandidates,
      averageScore: analysisSession.averageScore,
      results: analysisSession.results.map(result => ({
        ...result,
        criteriaResults: result.criteriaResults.map(criteria => ({
          ...criteria,
          confidencePercentage: Math.round(criteria.confidence * 100)
        }))
      }))
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${position.name.replace(/[^a-zA-Z0-9]/g, '_')}_analysis_results.json`;
    link.click();
    URL.revokeObjectURL(url);
    setShowExportDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <Link
              to={`/position/${id}`}
              className="text-aikyuu-primary hover:text-aikyuu-dark transition-colors text-lg font-montserrat mb-2 inline-block"
            >
              ← Back to Position
            </Link>
            <h1 className="text-3xl font-montserrat font-medium text-aikyuu-dark">
              {position.name} - Analysis Results
            </h1>
            <p className="text-lg font-montserrat text-gray-600 mt-2">
              Completed on {analysisSession.completedDate} • {analysisSession.totalCandidates} candidates analyzed • Average score: {analysisSession.averageScore}%
            </p>
          </div>
          <div className="relative" ref={exportDropdownRef}>
            <button
              onClick={() => setShowExportDropdown(!showExportDropdown)}
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors flex items-center gap-2"
            >
              Export
              <svg
                className={`w-4 h-4 transition-transform ${showExportDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showExportDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-[10px] shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <button
                    onClick={handleExportCSV}
                    className="w-full text-left px-4 py-3 text-lg font-montserrat text-aikyuu-dark hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export as CSV
                  </button>
                  <button
                    onClick={handleExportExcel}
                    className="w-full text-left px-4 py-3 text-lg font-montserrat text-aikyuu-dark hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0V4a1 1 0 011-1h3m0 0l2 2l2-2M9 3h6l2 2v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
                    </svg>
                    Export as Excel
                  </button>
                  <button
                    onClick={handleExportJSON}
                    className="w-full text-left px-4 py-3 text-lg font-montserrat text-aikyuu-dark hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Export as JSON
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Criteria Section */}
        <div className="mb-16">
          <div className="mb-10">
            <ToggleSwitch
              isActive={showCriteria}
              label="Criteria"
              onToggle={() => setShowCriteria(!showCriteria)}
            />
          </div>
          <CriteriaCard positionId={id!} isVisible={showCriteria} />
        </div>

        {/* Analysis Results Section */}
        <div className="mb-10">
          <ToggleSwitch
            isActive={showAnalysis}
            label="Analysis cv"
            onToggle={() => setShowAnalysis(!showAnalysis)}
          />
        </div>

        {showAnalysis && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {analysisSession.results.map((result) => (
              <AnalysisCard key={result.id} result={result} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-aikyuu-dark py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-12 h-20 fill-aikyuu-primary" viewBox="0 0 53 87" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.7183 86.5C34.2121 86.3976 34.0062 86.0288 33.7227 85.7419C26.4361 78.3638 21.2602 69.1269 18.7447 59.012C18.4475 57.5946 17.8379 56.2633 16.9614 55.1175C16.0848 53.9716 14.9639 53.0408 13.6822 52.3944C10.4153 50.571 6.96267 49.0958 3.77671 47.088C-0.610738 44.3563 -0.587117 42.4372 3.81721 39.6918C7.19217 37.5816 10.9046 36.1269 14.2796 34.0372C15.7291 33.326 16.9471 32.2098 17.7895 30.8206C18.1528 29.9007 18.4252 28.9468 18.6029 27.9727C21.2408 17.8517 26.4229 8.59367 33.6451 1.09937C34.4382 0.279853 34.8432 0.320829 35.6127 1.09937C41.0126 6.54917 46.4317 11.9705 51.8699 17.3634C52.582 18.0463 52.7238 18.4697 51.9509 19.2688C51.9509 19.2688 47.8301 25.5381 45.7005 28.6284C44.3974 30.9007 42.5555 32.8089 40.341 34.1806C36.7906 36.1269 33.014 37.6226 29.5412 39.7533C28.1 40.6343 26.2742 41.5358 26.2539 43.3592C26.2337 45.2646 28.1203 46.166 29.6019 47.0675C32.8689 49.0753 36.4025 50.5505 39.8112 52.3124C42.3643 53.8013 44.4653 55.9696 45.8861 58.5817C47.9111 61.6345 52.0555 67.675 52.0555 67.675C52.7035 68.3579 52.6023 68.6994 52.015 69.2935C46.4733 74.7843 40.9721 80.3126 35.4541 85.8239C35.228 86.0698 34.9445 86.2917 34.7183 86.5Z"/>
            </svg>
            <h2 className="text-6xl font-poppins font-bold text-aikyuu-primary">Aikyuu</h2>
          </div>
          <p className="text-gray-200 font-poppins text-xl">
            Copyright © Resumate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

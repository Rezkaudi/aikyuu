import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
          Welcome to Aikyuu
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Your AI-powered recruitment platform for smarter hiring decisions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signin"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/use-cases"
            className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            View Use Cases
          </Link>
        </div>
      </div>
    </div>
  );
}
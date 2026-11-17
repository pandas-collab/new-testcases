import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { FileText, BookOpen, LogIn, Grid3X3 } from 'lucide-react';
import NXDUNELanding from './components/NXDUNELanding.jsx';
import LoginModal from './components/LoginModal.jsx';

const ReleaseNotes = () => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Release Notes</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <p className="text-slate-600">Release notes content coming soon...</p>
      </div>
    </div>
  </div>
);

const UserManual = () => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">User Manual</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <p className="text-slate-600">User manual content coming soon...</p>
      </div>
    </div>
  </div>
);

const Header = ({ onLoginClick }) => (
  <header className="px-4 sm:px-6 py-3 flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100">
    <Link to="/" className="flex items-center gap-2">
      <div className="flex items-center">
        <span className="text-xl font-bold text-slate-800 tracking-tight">NX</span>
        <span className="text-xl font-bold text-[#9d174d]">DUNE</span>
      </div>
      <span className="text-xs text-slate-500 ml-1 hidden sm:inline">A Bourntec Product</span>
    </Link>

    <div className="hidden md:flex items-center">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition text-sm">
        <Grid3X3 className="w-4 h-4 text-[#9d174d]" />
        <span>Explore</span>
      </button>
    </div>

    <div className="flex items-center gap-2">
      <Link
        to="/release-notes"
        className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#9d174d] text-[#9d174d] hover:bg-[#9d174d]/5 transition text-sm font-medium"
      >
        <FileText className="w-4 h-4" />
        Release Notes
      </Link>
      <Link
        to="/manual"
        className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#9d174d] text-[#9d174d] hover:bg-[#9d174d]/5 transition text-sm font-medium"
      >
        <BookOpen className="w-4 h-4" />
        User Manual
      </Link>
      <button
        onClick={onLoginClick}
        className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#9d174d] text-white hover:bg-[#831843] transition text-sm font-medium"
      >
        <LogIn className="w-4 h-4" />
        Login
      </button>
    </div>
  </header>
);

const AppRoutes = ({ onGetStarted }) => (
  <Routes>
    <Route path="/" element={<NXDUNELanding onGetStarted={onGetStarted} />} />
    <Route path="/release-notes" element={<ReleaseNotes />} />
    <Route path="/manual" element={<UserManual />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const App = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header onLoginClick={openLoginModal} />
        <AppRoutes onGetStarted={openLoginModal} />
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </div>
    </Router>
  );
};

export default App;

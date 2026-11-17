import { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, User, ArrowLeft, CheckCircle } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot' | 'reset-sent'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    if (mode === 'forgot') {
      setMode('reset-sent');
    } else {
      // For demo purposes, just close the modal
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    // Clear form fields when switching modes
    setPassword('');
    setConfirmPassword('');
    setShowPassword(false);
  };

  const getHeaderContent = () => {
    switch (mode) {
      case 'login':
        return { title: 'Welcome Back', subtitle: 'Sign in to your NX DUNE account' };
      case 'signup':
        return { title: 'Create Account', subtitle: 'Join NX DUNE today' };
      case 'forgot':
        return { title: 'Reset Password', subtitle: 'Enter your email to receive reset instructions' };
      case 'reset-sent':
        return { title: 'Check Your Email', subtitle: 'Password reset instructions sent' };
      default:
        return { title: 'Welcome Back', subtitle: 'Sign in to your NX DUNE account' };
    }
  };

  const { title, subtitle } = getHeaderContent();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-4 bg-[#fff7ed] rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#9d174d] to-[#c02669] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {(mode === 'signup' || mode === 'forgot' || mode === 'reset-sent') && (
                <button
                  type="button"
                  onClick={() => switchMode('login')}
                  className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Back to login"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
              )}
              <div>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="text-orange-100 text-sm mt-1">{subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Form content */}
        <div className="p-6">
          {mode === 'reset-sent' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-[#574c44] mb-2">
                We've sent password reset instructions to:
              </p>
              <p className="text-[#9d174d] font-semibold mb-6">{email}</p>
              <p className="text-[#78716c] text-sm mb-6">
                Please check your email and follow the link to reset your password.
              </p>
              <button
                type="button"
                onClick={() => switchMode('login')}
                className="text-[#9d174d] hover:text-[#c02669] font-semibold transition-colors"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field - only for signup */}
              {mode === 'signup' && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#78716c] mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#78716c]" />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-orange-200 rounded-xl text-[#574c44] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d] transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#78716c] mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#78716c]" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-orange-200 rounded-xl text-[#574c44] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password field - only for login and signup */}
              {mode !== 'forgot' && (
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#78716c] mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#78716c]" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-12 py-3 bg-white border border-orange-200 rounded-xl text-[#574c44] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d] transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-orange-100 rounded transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-[#78716c]" />
                      ) : (
                        <Eye className="w-5 h-5 text-[#78716c]" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm Password field - only for signup */}
              {mode === 'signup' && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-[#78716c] mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#78716c]" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-orange-200 rounded-xl text-[#574c44] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d] transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Forgot password link - only for login */}
              {mode === 'login' && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => switchMode('forgot')}
                    className="text-sm text-[#9d174d] hover:text-[#c02669] font-medium transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[#9d174d] hover:bg-[#831243] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#9d174d]/25 hover:shadow-[#9d174d]/40 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {mode === 'forgot' ? 'Sending...' : mode === 'signup' ? 'Creating account...' : 'Signing in...'}
                  </>
                ) : (
                  mode === 'forgot' ? 'Send Reset Instructions' : mode === 'signup' ? 'Create Account' : 'Sign In'
                )}
              </button>
            </form>
          )}

          {/* Footer links */}
          {mode === 'login' && (
            <div className="mt-6 text-center">
              <p className="text-[#78716c] text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchMode('signup')}
                  className="text-[#9d174d] hover:text-[#c02669] font-semibold transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          )}

          {mode === 'signup' && (
            <div className="mt-6 text-center">
              <p className="text-[#78716c] text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchMode('login')}
                  className="text-[#9d174d] hover:text-[#c02669] font-semibold transition-colors"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

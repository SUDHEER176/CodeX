import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  RotateCcw, 
  Sparkles, 
  Lock, 
  User, 
  LogOut,
  Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import CodeStreakLogo from './ui/CodeStreakLogo';
import { api } from '../services/api';

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'USA / Canada' },
  { code: '+44', country: 'UK', flag: '🇬🇧', name: 'UK' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
];

export default function AuthModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onAuthSuccess, 
  onLogout 
}) {
  const [step, setStep] = useState(1); // 1 = Phone input, 2 = OTP verification
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState(currentUser?.name || '');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [demoCode, setDemoCode] = useState('123456');

  const inputRefs = useRef([]);

  // Resend Timer Countdown
  useEffect(() => {
    let interval;
    if (step === 2 && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setErrorMsg('');
      if (!currentUser?.isAuthenticated) {
        setStep(1);
        setOtpDigits(['', '', '', '', '', '']);
      }
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanNumber = phoneNumber.replace(/\D/g, '');
    if (cleanNumber.length < 7) {
      setErrorMsg('Please enter a valid mobile number.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.sendOtp(cleanNumber, countryCode);
      if (res.success) {
        if (res.demoOtp) setDemoCode(res.demoOtp);
        setStep(2);
        setResendTimer(30);
        setCanResend(false);
        // Focus first OTP input
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
      } else {
        setErrorMsg(res.error || 'Failed to send OTP.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // OTP Input Handler (Auto focus shift)
  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const pasted = value.slice(0, 6).split('');
      const newDigits = [...otpDigits];
      pasted.forEach((char, i) => {
        if (i < 6) newDigits[i] = char;
      });
      setOtpDigits(newDigits);
      inputRefs.current[Math.min(pasted.length, 5)]?.focus();
      return;
    }

    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    // Auto forward
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e?.preventDefault();
    setErrorMsg('');

    const fullOtp = otpDigits.join('');
    if (fullOtp.length < 6) {
      setErrorMsg('Please enter all 6 digits of the verification code.');
      return;
    }

    const fullPhone = `${countryCode}${phoneNumber.replace(/\D/g, '')}`;
    setLoading(true);

    try {
      const res = await api.verifyOtp(fullPhone, fullOtp, userName);
      if (res.success && res.data) {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 }
        });
        if (onAuthSuccess) onAuthSuccess(res.data.user);
        onClose();
      } else {
        setErrorMsg(res.error || 'Invalid OTP. Try again.');
      }
    } catch (err) {
      setErrorMsg('Verification failed. Try demo code 123456.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setOtpDigits(['1', '2', '3', '4', '5', '6']);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md rounded-3xl bg-[#090d16] border border-white/15 p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#0066FF]/25 blur-[60px] rounded-full" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col items-center text-center space-y-2 mb-6">
            <CodeStreakLogo size={42} textSize="text-2xl" showText={true} />
            <p className="text-xs text-slate-400">
              {currentUser?.isAuthenticated 
                ? 'Your authenticated learning profile' 
                : 'Sign in with your mobile number to sync your streak'}
            </p>
          </div>

          {/* If already authenticated: Show Profile View */}
          {currentUser?.isAuthenticated ? (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#38bdf8] font-bold text-lg shadow-[0_0_15px_rgba(0,102,255,0.2)]">
                    {currentUser.name?.[0] || 'U'}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{currentUser.name || 'Alex Learner'}</h3>
                    <p className="text-xs text-slate-400 font-mono">{currentUser.phoneNumber || '+91 ••••• •••••'}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                  <div className="p-2 rounded-xl bg-black/40">
                    <span className="text-slate-500 text-[10px] block">Streak</span>
                    <strong className="text-white text-sm">{currentUser.streak || 7} Days</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-black/40">
                    <span className="text-slate-500 text-[10px] block">Role</span>
                    <strong className="text-white text-sm">SDE-1 Track</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  if (onLogout) onLogout();
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-sm font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            /* Authentication Flow */
            <div>
              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center gap-2">
                  <span>⚠️ {errorMsg}</span>
                </div>
              )}

              {/* STEP 1: MOBILE NUMBER INPUT */}
              {step === 1 && (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  
                  {/* Optional Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#ff6611]" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Learner"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>Mobile Number</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="px-3 py-2.5 rounded-xl bg-black/70 border border-white/15 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-[#0b0f17] text-white">
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        autoFocus
                        className="flex-1 px-4 py-2.5 rounded-xl bg-black/70 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052FF] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending OTP...
                      </span>
                    ) : (
                      <>
                        <span>Send Verification OTP</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Instant OTP login. No password required.</span>
                  </div>
                </form>
              )}

              {/* STEP 2: OTP VERIFICATION */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="text-center space-y-1">
                    <p className="text-xs text-slate-300">
                      Enter the 6-digit code sent to
                    </p>
                    <p className="text-sm font-bold text-white font-mono">
                      {countryCode} {phoneNumber}
                    </p>
                  </div>

                  {/* 6 Square OTP Input Boxes */}
                  <div className="flex justify-center gap-2 sm:gap-2.5">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        type="text"
                        maxLength={6}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        className="w-11 h-12 sm:w-12 sm:h-14 rounded-xl bg-black/80 border border-white/20 text-center text-xl font-bold text-white font-mono focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
                      />
                    ))}
                  </div>

                  {/* Demo Auto-Fill Shortcut Helper */}
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={handleFillDemo}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/25 text-[11px] font-bold text-[#38bdf8] hover:bg-[#0066FF]/20 transition-colors"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Auto-fill Demo OTP ({demoCode})</span>
                    </button>
                  </div>

                  {/* Verify Action Button */}
                  <button
                    onClick={handleVerifyOtp}
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052FF] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Verifying...
                      </span>
                    ) : (
                      <>
                        <span>Verify & Sign In</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Resend & Change Phone */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="hover:text-white transition-colors"
                    >
                      &larr; Change number
                    </button>

                    <button
                      type="button"
                      disabled={!canResend}
                      onClick={handleSendOtp}
                      className={`font-semibold ${canResend ? 'text-[#ff6611] hover:underline cursor-pointer' : 'text-slate-600 cursor-not-allowed'}`}
                    >
                      {canResend ? 'Resend OTP' : `Resend in ${resendTimer}s`}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

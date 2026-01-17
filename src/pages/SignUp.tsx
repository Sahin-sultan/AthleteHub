import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Mail, Lock, User, Chrome } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Check your email to confirm your account.');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || 'Signup failed');
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) setError(error.message);
    } catch (err: any) {
      setError(err?.message || 'Google signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#0f1720] px-4">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="login-card w-full relative overflow-visible"
      >
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          style={{ position: 'absolute', left: -36, top: -24, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.06), transparent 40%)', filter: 'blur(28px)', zIndex: 0 }}
        />
        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">Create Account</h1>
          <p className="text-sm text-foreground/70 mt-2">Join us and start your journey today.</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="input-with-icon">
            <span className="input-icon"><User size={18} /></span>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              aria-label="Full Name"
            />
          </div>

          <div className="input-with-icon">
            <span className="input-icon"><Mail size={18} /></span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email"
            />
          </div>

          <div className="input-with-icon">
            <span className="input-icon"><Lock size={18} /></span>
            <input
              type="password"
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              aria-label="Password"
            />
          </div>

          <div className="text-xs text-foreground/60">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-foreground/80 hover:text-foreground underline">Terms</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-foreground/80 hover:text-foreground underline">Privacy Policy</Link>.
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                className="text-sm text-red-400 error-animate"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
              >
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                className="text-sm text-green-400"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
              >
                {success}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-2">
            <motion.button
              type="submit"
              className="btn-gradient w-full text-center"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </motion.button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0a0f17] px-2 text-foreground/50">Or continue with</span>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 text-sm font-medium"
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.995 }}
          >
            <Chrome size={18} className="text-foreground/80" />
            <span>Continue with Google</span>
          </motion.button>

          <div className="text-center text-sm text-foreground/70 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-foreground/90 hover:text-foreground link-underline transition-colors">Login</Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

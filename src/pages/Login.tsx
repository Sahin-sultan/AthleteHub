import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Chrome } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) setError(error.message);
      else navigate('/');
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || 'Login failed');
    }
  };

  const handleGoogleLogin = async () => {
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
      setError(err?.message || 'Google login failed');
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
          style={{ position: 'absolute', right: -36, top: -24, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.06), transparent 40%)', filter: 'blur(28px)', zIndex: 0 }}
        />
        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">Login</h1>
          <p className="text-sm text-foreground/70 mt-2">Welcome back — please enter your details.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-foreground/70">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded" />
                <span>Remember me</span>
              </label>
            </div>
            <Link to="/forgot" className="text-sm text-foreground/80 hover:text-foreground link-underline">Forgot password?</Link>
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
          </AnimatePresence>

          <div className="pt-2">
            <motion.button
              type="submit"
              className="btn-gradient w-full text-center"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
            >
              {loading ? 'Signing in...' : 'Login'}
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
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 text-sm font-medium"
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.995 }}
          >
            <Chrome size={18} className="text-foreground/80" />
            <span>Continue with Google</span>
          </motion.button>

          <div className="text-center text-sm text-foreground/70 mt-2">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-foreground/90 hover:text-foreground link-underline transition-colors">Sign up</Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

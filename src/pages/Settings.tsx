import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Bell, Lock, Globe, Save } from 'lucide-react';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-foreground/70">Please log in to access settings.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0f1720] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
            <SettingsIcon size={32} className="text-accent" />
            Settings
          </h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Bell size={20} className="text-accent" />
                Notifications
              </h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <span>Email notifications</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span>Order updates</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span>Promotional emails</span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
            </div>

            {/* Security */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lock size={20} className="text-accent" />
                Security
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left px-4 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-colors">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe size={20} className="text-accent" />
                Preferences
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Language</label>
                  <select className="w-full px-4 py-2 bg-foreground/5 border border-border/50 rounded-lg">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Currency</label>
                  <select className="w-full px-4 py-2 bg-foreground/5 border border-border/50 rounded-lg">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <motion.button
              onClick={handleSave}
              className="w-full btn-gradient flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Save size={18} />
              {saved ? 'Settings Saved!' : 'Save Changes'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

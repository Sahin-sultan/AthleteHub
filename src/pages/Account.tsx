import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, Shield } from 'lucide-react';

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

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
        <p className="text-foreground/70">Please log in to view your account.</p>
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
          <h1 className="text-4xl font-bold mb-8 text-foreground">My Account</h1>

          <div className="grid gap-6">
            {/* Profile Card */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <User size={24} className="text-accent" />
                Profile Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-foreground/5 rounded-lg">
                  <Mail size={20} className="text-foreground/70" />
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-foreground/5 rounded-lg">
                  <User size={20} className="text-foreground/70" />
                  <div>
                    <p className="text-sm text-foreground/60">Name</p>
                    <p className="font-medium">{user.user_metadata?.name || 'Not set'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-foreground/5 rounded-lg">
                  <Calendar size={20} className="text-foreground/70" />
                  <div>
                    <p className="text-sm text-foreground/60">Member Since</p>
                    <p className="font-medium">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-foreground/5 rounded-lg">
                  <Shield size={20} className="text-foreground/70" />
                  <div>
                    <p className="text-sm text-foreground/60">Account Status</p>
                    <p className="font-medium text-green-400">Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Card */}
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Recent Orders</h2>
              <p className="text-foreground/60">No orders yet. Start shopping!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

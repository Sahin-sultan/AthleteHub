// Supabase client temporarily removed.
// The real client will be re-added when you provide Supabase credentials.
// Export a minimal stub so imports don't break while developing.

type StubResult = { data?: any; error?: { message: string } | null };

export const supabase = {
	auth: {
		signInWithPassword: async (_: { email?: string; password?: string }): Promise<StubResult> => ({ error: { message: 'Supabase not configured' } }),
		signUp: async (_: { email?: string; password?: string; options?: any }): Promise<StubResult> => ({ error: { message: 'Supabase not configured' } }),
		signInWithOtp: async (_: { email?: string }): Promise<StubResult> => ({ error: { message: 'Supabase not configured' } }),
		signInWithOAuth: async (_: { provider: string; options?: any }): Promise<StubResult> => ({ error: { message: 'Supabase not configured' } }),
		getUser: async (): Promise<StubResult> => ({ data: null, error: null }),
		onAuthStateChange: (_: any) => ({ data: { subscription: { unsubscribe: () => {} } } }),
	}
};

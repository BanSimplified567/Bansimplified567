// hooks/useLogout.ts
import { supabase } from '@/lib/supabase';
import { useNavigate } from '@tanstack/react-router';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Logout error:', error);
        alert('Logout failed. Please try again.');
        return;
      }

      // Redirect to root after successful logout
      navigate({ to: '/', replace: true });
    } catch (err) {
      console.error('Unexpected logout error:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return logout;
};

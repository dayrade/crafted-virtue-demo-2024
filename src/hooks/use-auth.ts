'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { User } from '../types/auth';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const user: User | null = session?.user ? {
    id: session.user.id || '',
    email: session.user.email || '',
    name: session.user.name || '',
    image: session.user.image || null,
    emailVerified: null, // Not available in session
    createdAt: new Date().toISOString(), // Placeholder
    updatedAt: new Date().toISOString(), // Placeholder
  } : null;

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.ok) {
        router.push('/dashboard');
        return { success: true };
      }

      throw new Error('Login failed');
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Auto-login after successful registration
      const loginResult = await login(email, password);
      return loginResult;
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut({ redirect: false });
      router.push('/');
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Logout failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const connectSocialAccount = async (provider: 'linkedin' | 'twitter') => {
    setIsLoading(true);
    try {
      const result = await signIn(provider, {
        redirect: false,
        callbackUrl: '/social-accounts',
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return { success: true };
    } catch (error) {
      console.error('Social connect error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Connection failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: {
    name?: string;
    bio?: string;
    company?: string;
    position?: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Profile update failed');
      }

      return { success: true, data: result.user };
    } catch (error) {
      console.error('Profile update error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Profile update failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Password change failed');
      }

      return { success: true };
    } catch (error) {
      console.error('Password change error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Password change failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isAuthenticated: !!session,
    isLoading: status === 'loading' || isLoading,
    login,
    register,
    logout,
    connectSocialAccount,
    updateProfile,
    changePassword,
  };
}
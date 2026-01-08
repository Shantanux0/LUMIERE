import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '@/lib/api';

export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    profileImage?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logout: () => void;
    updateProfile: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: async (email, password) => {
                try {
                    const response = await api.post<User>('/auth/login', { email, password });
                    set({ user: response.data, isAuthenticated: true });
                } catch (error) {
                    console.error('Login failed:', error);
                    throw error;
                }
            },
            register: async (email, password, firstName, lastName) => {
                try {
                    const response = await api.post<User>('/auth/register', {
                        email,
                        password,
                        firstName,
                        lastName
                    });
                    set({ user: response.data, isAuthenticated: true });
                } catch (error) {
                    console.error('Registration failed:', error);
                    throw error;
                }
            },
            logout: () => {
                set({ user: null, isAuthenticated: false });
            },
            updateProfile: (updates) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updates } : null,
                }));
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);

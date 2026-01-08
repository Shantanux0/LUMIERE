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
        (set, get) => ({
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
            updateProfile: async (updates) => {
                const currentUser = get().user;
                if (!currentUser) return;

                try {
                    const response = await api.put<User>(`/users/${currentUser.id}`, updates);
                    set((state) => ({
                        user: response.data,
                    }));
                } catch (error) {
                    console.error("Failed to update profile", error);
                    // Optimistic update fallback or error handling could be here
                    // For now, we update local state if API fails is NOT recommended, so we rely on API response
                }
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);

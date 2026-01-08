import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImage?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string, firstName?: string, lastName?: string) => void;
    logout: () => void;
    updateProfile: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (email, password, firstName, lastName) => {
                // Mock login - in production, this would call an API
                const user: User = {
                    id: Math.random().toString(36).substr(2, 9),
                    email,
                    firstName: firstName || email.split('@')[0],
                    lastName: lastName || 'User',
                };
                set({ user, isAuthenticated: true });
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

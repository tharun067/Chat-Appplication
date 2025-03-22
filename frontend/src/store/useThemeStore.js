import { create } from 'zustand';
export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chat-items") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chat-items", theme);
        set({ theme });
    },
}));
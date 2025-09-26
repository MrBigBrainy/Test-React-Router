import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create( persist((set) => ({
    theme: "light",
    toggleTheme: () => set((state: any) => ({...state, theme: state.theme === "light" ? "dark" : "light"}))
}), {name: "themeStorage"}))
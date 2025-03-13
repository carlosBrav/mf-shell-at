import { create } from 'zustand'

interface AppState {
  user: string
  setUser: (user: string) => void
  pokemonNameDetail: string
  setPokemonNameDetail: (value: string) => void
}

export const useAppStore = create<AppState>((set: any) => ({
  user: "",
  setUser: (user: string) => set({ user }),
  pokemonNameDetail: "",
  setPokemonNameDetail: (pokemonNameDetail: string) => set({pokemonNameDetail})
}))
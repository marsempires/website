import { Building } from '@/types'
import { create } from 'zustand'

interface LoadingState {
  loaded: boolean
  setLoaded: (loaded: boolean) => void
}

export const useLoading = create<LoadingState>()((set) => ({
  loaded: false,
  setLoaded: (loaded: boolean) => set({ loaded }),
}))

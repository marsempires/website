import { Building } from '@/types'
import { create } from 'zustand'

interface InformationPanelState {
  opening: boolean
  open: () => void
  close: () => void

  selected: Building | undefined
  setSelected: (building: Building | undefined) => void
}

export const useInformationPanel = create<InformationPanelState>()((set) => ({
  opening: false,
  open: () => set({ opening: true }),
  close: () => set({ opening: false }),

  selected: undefined,
  setSelected: (building: Building | undefined) => set({ selected: building }),
}))

import { StateCreator } from 'zustand';

export interface UIStore {
  isAccessModalOpen: boolean;
  openAccessModal: () => void;
  closeAccessModal: () => void;
}

export const createUISlice: StateCreator<UIStore> = (set) => ({
  isAccessModalOpen: false,
  openAccessModal: () => set({ isAccessModalOpen: true }),
  closeAccessModal: () => set({ isAccessModalOpen: false }),
});

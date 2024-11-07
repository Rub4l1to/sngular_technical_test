import { StateCreator } from 'zustand';

export interface UIStore {
  //* Access Modal
  isAccessModalOpen: boolean;
  openAccessModal: () => void;
  closeAccessModal: () => void;

  //* Details Modal
  isModalOpen: boolean;
  modalType: 'KPI' | 'DataViz' | 'Layout' | 'Storyboard' | 'Featured' | null;
  openModal: (
    type: 'KPI' | 'DataViz' | 'Layout' | 'Storyboard' | 'Featured'
  ) => void;
  closeModal: () => void;
}

export const createUISlice: StateCreator<UIStore> = (set) => ({
  //* Access Modal
  isAccessModalOpen: false,
  openAccessModal: () => set({ isAccessModalOpen: true }),
  closeAccessModal: () => set({ isAccessModalOpen: false }),

  //* Details Modal
  isModalOpen: false,
  modalType: null,
  openModal: (type) => set({ isModalOpen: true, modalType: type }),
  closeModal: () => set({ isModalOpen: false, modalType: null }),
});

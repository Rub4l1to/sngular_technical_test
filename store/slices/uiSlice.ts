import { StateCreator } from 'zustand';

//* Modal Types
import { ModalType } from '@/lib/modalRegistry';

export interface UIStore {
  //* Access Modal
  isAccessModalOpen: boolean;
  openAccessModal: () => void;
  closeAccessModal: () => void;

  //* Details Modal
  isModalOpen: boolean;
  modalType: ModalType;
  modalData: any;
  openModal: (type: ModalType, data?: any) => void;
  closeModal: () => void;
}

export const createUISlice: StateCreator<UIStore> = (set) => ({
  //* Access Modal
  isAccessModalOpen: false,
  openAccessModal: () => set({ isAccessModalOpen: true }),
  closeAccessModal: () => set({ isAccessModalOpen: false }),

  //* Details Modal
  isModalOpen: false,
  modalType: 'Featured',
  modalData: null,
  openModal: (type, data = null) =>
    set({ isModalOpen: true, modalType: type, modalData: data }),
  closeModal: () =>
    set({ isModalOpen: false, modalType: 'Featured', modalData: null }),
});

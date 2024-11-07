import { create } from 'zustand';
import { createLibrarySlice, LibraryState } from './librarySlice';
import { createUISlice, UIStore } from './uiSlice';

type AppState = LibraryState & UIStore;

const useStore = create<AppState>((set, get, api) => ({
  ...createLibrarySlice(set, get, api),
  ...createUISlice(set, get, api),
}));

export default useStore;

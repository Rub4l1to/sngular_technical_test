import { create, StoreApi } from 'zustand';
import { createLibrarySlice, LibraryState } from './librarySlice';

type AppState = LibraryState;

const useStore = create<AppState>((set, get, api) => ({
  ...createLibrarySlice(
    set as StoreApi<LibraryState>['setState'],
    get as StoreApi<LibraryState>['getState'],
    api as StoreApi<LibraryState>
  ),
}));

export default useStore;

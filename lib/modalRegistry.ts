import { FC } from 'react';

//* Components
import { LayoutModal } from '@/components';

//* Types
import { Item } from '@/store/slices/librarySlice';

export const MODAL_TYPES = {
  KPI: 'KPI',
  LAYOUTS: 'Layouts',
  STORYBOARDS: 'Storyboards',
  FEATURED: 'Featured',
  TRENDING: 'Trending',
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];

interface ModalComponentProps {
  item: Item;
}

export const modalComponents: Record<ModalType, FC<ModalComponentProps>> = {
  KPI: LayoutModal,
  Layouts: LayoutModal,
  Storyboards: LayoutModal,
  Featured: LayoutModal,
  Trending: LayoutModal,
};

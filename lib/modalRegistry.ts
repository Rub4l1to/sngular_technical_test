import { FC } from 'react';

import { LayoutModal } from '@/components';

export const MODAL_TYPES = {
  KPI: 'KPI',
  LAYOUTS: 'Layouts',
  STORYBOARDS: 'Storyboards',
  FEATURED: 'Featured',
  TRENDING: 'Trending',
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];

interface ModalComponentProps {
  item: {
    title: string;
    description: string;
    date: string;
  };
}

export const modalComponents: Record<ModalType, FC<ModalComponentProps>> = {
  KPI: LayoutModal,
  Layouts: LayoutModal,
  Storyboards: LayoutModal,
  Featured: LayoutModal,
  Trending: LayoutModal,
};

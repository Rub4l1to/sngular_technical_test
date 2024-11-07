import { FC } from 'react';

import {
  DataVizModal,
  KpiModal,
  LayoutModal,
  StoryboardModal,
} from '@/components';

export const MODAL_TYPES = {
  KPI: 'KPI',
  LAYOUTS: 'Layouts',
  STORYBOARDS: 'Storyboards',
  FEATURED: 'Featured',
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
  KPI: KpiModal,
  Layouts: LayoutModal,
  Storyboards: StoryboardModal,
  Featured: DataVizModal,
};

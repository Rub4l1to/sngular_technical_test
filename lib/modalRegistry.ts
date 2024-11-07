import { FC } from 'react';

import {
  DataVizModal,
  KpiModal,
  LayoutModal,
  StoryboardModal,
} from '@/components';

export const MODAL_TYPES = {
  KPI: 'KPI',
  LAYOUT: 'Layout',
  STORYBOARD: 'Storyboard',
  FEATURED: 'Featured',
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];

export const modalComponents: Record<ModalType, FC> = {
  [MODAL_TYPES.KPI]: KpiModal,
  [MODAL_TYPES.LAYOUT]: LayoutModal,
  [MODAL_TYPES.STORYBOARD]: StoryboardModal,
  [MODAL_TYPES.FEATURED]: DataVizModal,
};

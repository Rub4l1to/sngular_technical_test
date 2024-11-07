import { StateCreator } from 'zustand';

//* Modal Types
import { ModalType } from '@/lib/modalRegistry';

export interface Item {
  title: string;
  subtitle: string;
  type: ModalType;
  description: string;
  tags: string[];
  stats: {
    used: number;
    type: string;
    pages: number;
    lastUpdated: Date;
  };
  businessQuestions: string[];
}

export interface LibraryState {
  activeTab: ModalType;
  featuredItems: Item[];
  trendingItems: Item[];
  kpiItems: Item[];
  layoutItems: Item[];
  storyboardItems: Item[];
  favoriteItems: Item[];
  setActiveTab: (tab: ModalType) => void;
  getItemsForActiveTab: () => {
    title: string;
    description: string;
    items: Item[];
  };
  toggleFavorite: (item: Item) => void;
}

export const createLibrarySlice: StateCreator<LibraryState> = (set, get) => ({
  activeTab: 'Featured',
  featuredItems: [
    {
      title: 'Featured 1',
      type: 'Featured',
      subtitle: 'Descriptive name of the Layout',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 2485,
        type: 'Universal',
        pages: 6,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Featured 2',
      type: 'Featured',
      subtitle: 'Descriptive name of the Layout',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 1922,
        type: 'Universal',
        pages: 2,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Featured 3',
      type: 'Featured',
      subtitle: 'Descriptive name of the Layout',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 922,
        type: 'Universal',
        pages: 5,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Featured 4',
      subtitle: 'Descriptive name of the Layout',
      type: 'Featured',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 122,
        type: 'Universal',
        pages: 1,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
  ],
  trendingItems: [
    {
      title: 'Trending 1',
      subtitle: 'Descriptive name of the Layout',
      type: 'Trending',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Trending 2',
      subtitle: 'Descriptive name of the Layout',
      type: 'Trending',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Trending 3',
      subtitle: 'Descriptive name of the Layout',
      type: 'Trending',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Trending 4',
      subtitle: 'Descriptive name of the Layout',
      type: 'Trending',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
  ],
  kpiItems: [
    {
      title: 'KPI 1',
      subtitle: 'Descriptive name of the Layout',
      type: 'KPI',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'KPI 2',
      subtitle: 'Descriptive name of the Layout',
      type: 'KPI',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'KPI 3',
      subtitle: 'Descriptive name of the Layout',
      type: 'KPI',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'KPI 4',
      subtitle: 'Descriptive name of the Layout',
      type: 'KPI',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
  ],
  layoutItems: [
    {
      title: 'Layout 1',
      subtitle: 'Descriptive name of the Layout',
      type: 'Layouts',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Layout 2',
      subtitle: 'Descriptive name of the Layout',
      type: 'Layouts',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Layout 3',
      subtitle: 'Descriptive name of the Layout',
      type: 'Layouts',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Layout 4',
      subtitle: 'Descriptive name of the Layout',
      type: 'Layouts',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
  ],
  storyboardItems: [
    {
      title: 'Storyboard 1',
      subtitle: 'Descriptive name of the Layout',
      type: 'Storyboards',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Storyboard 2',
      subtitle: 'Descriptive name of the Layout',
      type: 'Storyboards',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Storyboard 3',
      subtitle: 'Descriptive name of the Layout',
      type: 'Storyboards',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
    {
      title: 'Storyboard 4',
      subtitle: 'Descriptive name of the Layout',
      type: 'Storyboards',
      description: 'Short description of the item goes nicely here.',
      tags: ['tag1', 'tag2'],
      stats: {
        used: 0,
        type: 'type',
        pages: 0,
        lastUpdated: new Date(),
      },
      businessQuestions: ['question1', 'question2'],
    },
  ],
  favoriteItems: [],
  setActiveTab: (tab: ModalType) => set({ activeTab: tab }),
  getItemsForActiveTab: () => {
    const { activeTab, kpiItems, layoutItems, storyboardItems } = get();
    switch (activeTab) {
      case 'KPI':
        return {
          title: 'KPIs',
          description: 'Key performance indicators',
          items: kpiItems,
        };
      case 'Layouts':
        return {
          title: 'Layouts',
          description: 'Popular layouts',
          items: layoutItems,
        };
      case 'Storyboards':
        return {
          title: 'Storyboards',
          description: 'Creative storyboards',
          items: storyboardItems,
        };
      default:
        return { title: '', description: '', items: [] };
    }
  },
  toggleFavorite: (item) => {
    set((state) => {
      const isFavorite = state.favoriteItems.some(
        (fav) => fav.title === item.title
      );
      return {
        favoriteItems: isFavorite
          ? state.favoriteItems.filter((fav) => fav.title !== item.title)
          : [...state.favoriteItems, item],
      };
    });
  },
});

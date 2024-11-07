import { FC } from 'react';
import { motion } from 'framer-motion';

//* Store
import useStore from '@/store';

//* Types
import { ModalType } from '@/lib/modalRegistry';

const Tabs: FC = () => {
  const activeTab = useStore((state) => state.activeTab);
  const setActiveTab = useStore((state) => state.setActiveTab);
  const tabs: ModalType[] = ['Featured', 'KPI', 'Layouts', 'Storyboards'];

  return (
    <div className="relative flex bg-gray-100 rounded-lg overflow-hidden p-1.5">
      {tabs.map((tab: ModalType) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative z-10 w-1/4 py-1.5 font-semibold text-center ${
            activeTab === tab
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTabBackground"
              className="absolute inset-0 bg-white rounded-md "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;

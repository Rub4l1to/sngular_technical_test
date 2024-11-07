import { FC } from 'react';
import { RxCross1 } from 'react-icons/rx';

//* Store
import useStore from '@/store';

//* Constants
import { ModalType } from '@/lib/modalRegistry';

//* Registry
import { modalComponents } from '@/lib/modalRegistry';

const BaseModal: FC = () => {
  const { isModalOpen, modalType, closeModal } = useStore();

  if (!isModalOpen || !modalType) return null;

  const ModalContent = modalComponents[modalType as ModalType];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <RxCross1 size={24} />
        </button>
        <ModalContent />
      </div>
    </div>
  );
};

export default BaseModal;

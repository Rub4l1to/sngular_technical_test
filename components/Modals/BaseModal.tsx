import React, { FC, ReactNode } from 'react';

//* Icons
import { RxCross1 } from 'react-icons/rx';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BaseModal: FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <button onClick={onClose} className="float-right">
          <RxCross1 size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default BaseModal;

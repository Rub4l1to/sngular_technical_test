// components/RequestAccessModal.tsx
'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

//* Store
import useStore from '@/store';

interface RequestAccessModalProps {
  onSubmit: (values: { reason: string }) => void;
}

interface FormValues {
  reason: string;
}

const RequestAccessModal: FC<RequestAccessModalProps> = ({ onSubmit }) => {
  const { isAccessModalOpen, closeAccessModal } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    try {
      onSubmit(data);
      reset();
      closeAccessModal();
      toast.success('Request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    }
  };

  if (!isAccessModalOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeAccessModal}
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Request Access</h2>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label htmlFor="reason" className="block font-medium text-gray-700">
            Reason
          </label>
          <textarea
            id="reason"
            {...register('reason', {
              required: 'Please provide a reason for your request',
              minLength: {
                value: 10,
                message: 'Reason should be at least 10 characters long',
              },
            })}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-200"
            placeholder="Enter your reason here..."
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
          )}

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={closeAccessModal}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RequestAccessModal;

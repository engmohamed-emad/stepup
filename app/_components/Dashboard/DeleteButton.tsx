'use client';

import { useState } from 'react';
import { useDeleteShoe } from '@/app/_hooks/shoesQuery';
import Modal from '@/app/_components/Generic/Modal';
import { toast } from 'sonner';

interface DeleteButtonProps {
    shoeId: string;
}

export default function DeleteButton({ shoeId }: DeleteButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const deleteMutation = useDeleteShoe();

    const handleDelete = () => {
        deleteMutation.mutate(shoeId, {
            onSuccess: () => {
                setIsOpen(false);
                toast.error('Shoe deleted 🗑️');
            },
        });
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="
                    px-3 py-1.5 rounded-lg text-xs font-semibold
                    bg-red-50 text-red-500 border border-red-200
                    hover:bg-red-500 hover:text-white hover:border-red-500
                    transition-all duration-150
                "
            >
                Delete
            </button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Delete Shoe"
            >
                <p className="text-sm text-gray-600 mb-6">
                    Are you sure you want to delete this shoe? This action cannot be undone.
                </p>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="
                            flex-1 py-2.5 rounded-xl border border-gray-200
                            text-sm font-semibold text-gray-600
                            hover:bg-gray-50 transition-all duration-150
                        "
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={deleteMutation.isPending}
                        className="
                            flex-1 py-2.5 rounded-xl
                            bg-red-500 text-white text-sm font-bold
                            hover:bg-red-600 active:scale-95
                            disabled:opacity-50 disabled:cursor-not-allowed
                            transition-all duration-150
                        "
                    >
                        {deleteMutation.isPending ? 'Deleting…' : 'Yes, Delete'}
                    </button>
                </div>
            </Modal>
        </>
    );
}

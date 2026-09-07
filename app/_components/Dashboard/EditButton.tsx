'use client';

import { useState } from 'react';
import { Shoe } from '@/app/_types/types';
import Modal from '@/app/_components/Generic/Modal';
import ShoeForm from '@/app/_components/Generic/Form';

interface EditButtonProps {
    shoe: Shoe;
}

export default function EditButton({ shoe }: EditButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="
                    px-3 py-1.5 rounded-lg text-xs font-semibold
                    bg-gray-100 text-gray-700 border border-gray-200
                    hover:bg-black hover:text-white hover:border-black
                    transition-all duration-150
                "
            >
                Edit
            </button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Edit Shoe"
            >
                <ShoeForm
                    shoe={shoe}
                    onSuccess={() => setIsOpen(false)}
                />
            </Modal>
        </>
    );
}

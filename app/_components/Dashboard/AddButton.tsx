'use client';

import { useState } from 'react';
import { PlusIcon } from '@/app/_icons/icons';
import Modal from '@/app/_components/Generic/Modal';
import ShoeForm from '@/app/_components/Generic/Form';

export default function AddButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="
                    flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-black text-white font-semibold text-sm
                    shadow-sm hover:bg-gray-800
                    transition-all duration-200
                "
            >
                <PlusIcon />
                Add Product
            </button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Add New Shoe"
            >
                <ShoeForm onSuccess={() => setIsOpen(false)} />
            </Modal>
        </>
    );
}

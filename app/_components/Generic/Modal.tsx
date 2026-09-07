'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    // Prevent background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
            onClick={onClose}
        >

            <div
                className="
                    relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4
                    animate-[fadeUp_0.2s_ease-out]
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 tracking-tight">{title}</h2>
                    <button
                        onClick={onClose}
                        className="
                            w-8 h-8 flex items-center justify-center rounded-full
                            text-gray-400 hover:text-gray-900 hover:bg-gray-100
                            transition-all duration-150 text-xl leading-none
                        "
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

'use client';

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import { Shoe } from '@/app/_types/types';
import { useCreateShoe, useUpdateShoe } from '@/app/_hooks/shoesQuery';
import { toast } from 'sonner';

const SECTIONS = ['Man', 'Woman', 'Boys', 'Girls'];

interface ShoeFormProps {
    shoe?: Shoe;
    onSuccess: () => void;
}

export default function ShoeForm({ shoe, onSuccess }: ShoeFormProps) {
    const isEdit = !!shoe;

    const [name, setName] = useState(shoe?.name ?? '');
    const [img, setImg] = useState(shoe?.img ?? '');
    const [price, setPrice] = useState<string>(shoe?.price?.toString() ?? '');
    const [originalPrice, setOriginalPrice] = useState<string>(shoe?.originalprice?.toString() ?? '');
    const [section, setSection] = useState(shoe?.section ?? SECTIONS[0]);

    const [imgTab, setImgTab] = useState<'url' | 'file'>('url');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setName(shoe?.name ?? '');
        setImg(shoe?.img ?? '');
        setPrice(shoe?.price?.toString() ?? '');
        setOriginalPrice(shoe?.originalprice?.toString() ?? '');
        setSection(shoe?.section ?? SECTIONS[0]);
        setImgTab('url');
    }, [shoe]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const createMutation = useCreateShoe();
    const updateMutation = useUpdateShoe(shoe?.id ?? '');

    const isPending = createMutation.isPending || updateMutation.isPending;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            name,
            img,
            price: Number(price),
            originalprice: Number(originalPrice),
            section,
        };

        if (isEdit) {
            await updateMutation.mutateAsync(payload);
            toast.success('Shoe updated successfully ✅');
        } else {
            await createMutation.mutateAsync({ ...payload, createdAt: new Date().toISOString() });
            toast.success('Shoe added successfully 🎉');
        }

        onSuccess();
    };

    const inputClass = `
        w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50
        text-sm text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400
        transition-all duration-150
    `;

    const labelClass = 'block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
                <label className={labelClass}>Name</label>
                <input
                    className={inputClass}
                    type="text"
                    placeholder="e.g. Air Max 90"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            {/* Image — URL or File tabs */}
            <div>
                <label className={labelClass}>Image</label>

                {/* Tab switcher */}
                <div className="flex rounded-xl border border-gray-200 overflow-hidden mb-2 text-xs font-semibold">
                    <button
                        type="button"
                        onClick={() => { setImgTab('url'); setImg(''); }}
                        className={`flex-1 py-2 transition-all duration-150 ${imgTab === 'url'
                            ? 'bg-black text-white'
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        🔗 URL
                    </button>
                    <button
                        type="button"
                        onClick={() => { setImgTab('file'); setImg(''); }}
                        className={`flex-1 py-2 transition-all duration-150 ${imgTab === 'file'
                            ? 'bg-black text-white'
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        📁 From Device
                    </button>
                </div>

                {/* URL input */}
                {imgTab === 'url' && (
                    <input
                        className={inputClass}
                        type="url"
                        placeholder="https://..."
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                    />
                )}

                {/* File picker */}
                {imgTab === 'file' && (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="
                            flex flex-col items-center justify-center gap-1
                            w-full py-6 rounded-xl border-2 border-dashed border-gray-200
                            bg-gray-50 cursor-pointer text-gray-400 text-sm
                            hover:border-gray-400 hover:bg-gray-100
                            transition-all duration-150
                        "
                    >
                        <span className="text-2xl">📂</span>
                        <span>{img ? 'Change photo' : 'Click to choose a photo'}</span>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                            required={!img}
                        />
                    </div>
                )}

                {/* Preview */}
                {img && (
                    <div className="mt-3 flex items-center gap-3">
                        <div className="w-16 h-16 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0">
                            <img src={img} alt="preview" className="w-full h-full object-contain" />
                        </div>
                        <button
                            type="button"
                            onClick={() => { setImg(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                            className="text-xs text-red-400 hover:text-red-600 transition-colors"
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>

            {/* Price row */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className={labelClass}>Price (₹)</label>
                    <input
                        className={inputClass}
                        type="number"
                        min={0}
                        placeholder="0"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className={labelClass}>Original Price (₹)</label>
                    <input
                        className={inputClass}
                        type="number"
                        min={0}
                        placeholder="0"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                    />
                </div>
            </div>

            {/* Section */}
            <div>
                <label className={labelClass}>Section</label>
                <select
                    className={inputClass}
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    required
                >
                    {SECTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            {/* Error feedback */}
            {(createMutation.isError || updateMutation.isError) && (
                <p className="text-sm text-red-500">
                    {createMutation.error?.message ?? updateMutation.error?.message ?? 'Something went wrong'}
                </p>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={isPending}
                className="
                    w-full py-3 rounded-xl text-sm font-bold
                    bg-black text-white
                    hover:bg-gray-800 active:scale-95
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-150
                "
            >
                {isPending
                    ? (isEdit ? 'Saving…' : 'Adding…')
                    : (isEdit ? 'Save Changes' : 'Add Shoe')
                }
            </button>
        </form>
    );
}

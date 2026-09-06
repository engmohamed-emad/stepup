'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SHOES_API_METHODS } from '../_services/shoesApi';
import { Shoe } from '@/app/_types/types';

// ---------------------------------------------------------------------------
// Query Keys
// ---------------------------------------------------------------------------
export const SHOE_QUERY_KEYS = {
    allShoes: ['shoes'] as const,
    shoeById: (id: string) => ['shoes', id] as const,
};

// ---------------------------------------------------------------------------
// Query Hooks (READ)
// ---------------------------------------------------------------------------

/** Fetch all shoes */
export const useAllShoes = () => {
    return useQuery<Shoe[], Error>({
        queryKey: SHOE_QUERY_KEYS.allShoes,
        queryFn: () => SHOES_API_METHODS.getAllShoes(),
        staleTime: 0,
        retry: 1,
        refetchOnMount: true,
        throwOnError: false,
    });
};

/** Fetch a single shoe by id */
export const useShoeById = (id: string) => {
    return useQuery<Shoe, Error>({
        queryKey: SHOE_QUERY_KEYS.shoeById(id),
        queryFn: () => SHOES_API_METHODS.getShoeById(id),
        staleTime: 0,
        retry: 1,
        refetchOnMount: true,
        throwOnError: false,
        enabled: !!id, // only runs when id is truthy
    });
};

// ---------------------------------------------------------------------------
// Mutation Hooks (CREATE / UPDATE / DELETE)
// ---------------------------------------------------------------------------

/** Create a new shoe */
export const useCreateShoe = () => {
    const queryClient = useQueryClient();

    return useMutation<Shoe, Error, Omit<Shoe, 'id'>>({
        mutationFn: (shoeData) => SHOES_API_METHODS.createShoe(shoeData),
        onSuccess: () => {
            // Invalidate the list so it refetches with the new item
            queryClient.invalidateQueries({ queryKey: SHOE_QUERY_KEYS.allShoes });
        },
        throwOnError: false,
    });
};

/** Update an existing shoe */
export const useUpdateShoe = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation<Shoe, Error, Partial<Omit<Shoe, 'id'>>>({
        mutationFn: (shoeData) => SHOES_API_METHODS.updateShoe(id, shoeData),
        onSuccess: (updatedShoe) => {
            // Update the individual cache entry immediately
            queryClient.setQueryData(SHOE_QUERY_KEYS.shoeById(id), updatedShoe);
            // Invalidate the list so the updated item is reflected there too
            queryClient.invalidateQueries({ queryKey: SHOE_QUERY_KEYS.allShoes });
        },
        throwOnError: false,
    });
};

/** Delete a shoe */
export const useDeleteShoe = () => {
    const queryClient = useQueryClient();

    return useMutation<Shoe, Error, string>({
        mutationFn: (id) => SHOES_API_METHODS.deleteShoe(id),
        onSuccess: (_data, id) => {
            // Remove the individual cache entry and invalidate the list
            queryClient.removeQueries({ queryKey: SHOE_QUERY_KEYS.shoeById(id) });
            queryClient.invalidateQueries({ queryKey: SHOE_QUERY_KEYS.allShoes });
        },
        throwOnError: false,
    });
};

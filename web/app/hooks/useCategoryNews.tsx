'use client';

import { useQuery } from '@tanstack/react-query';
import { getNewsByCategory } from '../utils/apis';

export const useGetNewsByCategory = (category: string) => {
    return useQuery({
        queryKey: ['categoryNews'],
        queryFn: () => getNewsByCategory(category),
        enabled: !!category
    });
};

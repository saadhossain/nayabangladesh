'use client';

import { useQuery } from '@tanstack/react-query';
import { getNewsByCategory } from '../utils/apis';

export const useCategoryNews = (category: string) => {
    return useQuery({
        queryKey: ['categoryNews', category],
        queryFn: () => getNewsByCategory(category),
        // enabled: !!category
    });
};

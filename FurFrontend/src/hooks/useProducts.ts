import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Product } from '@/data/products';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await api.get<Product[]>('/products');
            return data;
        },
    });
};

export const useProduct = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const { data } = await api.get<Product>(`/products/${id}`);
            return data;
        },
        enabled: !!id,
    });
};

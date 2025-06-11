import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { deleteFavoriteItem } from '@/apis/items';

const useDeleteFavoriteItem = (options?: UseMutationOptions<unknown, Error, number>) => {
  return useMutation({
    mutationFn: (itemId) => deleteFavoriteItem(itemId),
    ...options,
  });
};

export default useDeleteFavoriteItem;

import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { postFavoriteItem } from "@/apis/items";

const usePostFavoriteItem = (
  options?: UseMutationOptions<unknown, Error, number>
) => {
  return useMutation({
    mutationFn: (itemId) => postFavoriteItem(itemId),
    ...options,
  });
};

export default usePostFavoriteItem;

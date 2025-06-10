import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { postItem, type PostItemRequestBody } from "@/apis/items";

type PostItemResponse = {
  message: string;
};

const usePostItem = (
  options?: UseMutationOptions<PostItemResponse, Error, PostItemRequestBody>
) => {
  return useMutation({
    mutationFn: (body) => postItem(body),
    ...options,
  });
};

export default usePostItem;

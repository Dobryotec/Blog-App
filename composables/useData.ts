import { type Data } from "~/types/types";

export const useData = async (url: string, isSinglePost: boolean = false) => {
  const { data } = isSinglePost
    ? await useFetch<Data>(url)
    : await useFetch<Data[]>(url);

  if (!data.value) {
    const errorMessage = isSinglePost ? "Post not found" : "Posts not found";
    throw createError({
      statusCode: 404,
      statusMessage: errorMessage,
      fatal: true,
    });
  }

  return data;
};

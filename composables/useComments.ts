import { type Comments } from "~/types/types";

export const useComments = async (url: string) => {
  const { data } = await useFetch<Comments[]>(url);

  if (!data.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Comments not found",
      fatal: true,
    });
  }

  return data;
};

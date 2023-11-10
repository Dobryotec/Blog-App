import { format } from "date-fns";

export const formattedDateShort = (date: string): string => {
  const originalDate = new Date(date);

  return format(originalDate, "MMM d");
};

export const formattedDate = (date: string): string => {
  const originalDate = new Date(date);

  return format(originalDate, "dd-MM-yyyy HH:mm:ss");
};

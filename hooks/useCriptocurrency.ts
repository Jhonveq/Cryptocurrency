"use client";

import { cryptocurrencyApiSchema } from "@/schemas/cryptocurrency";
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetcher function to fetch data from the API
 * @param url url to fetch data from
 * @returns response from the API
 */
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCryptocurrency = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.coincap.io/v2/assets/`,
    fetcher
  );

  if (data) {
    const validatedData = cryptocurrencyApiSchema.safeParse(data);

    if (!validatedData.success) {
      return { data: null, error: validatedData.error, isLoading: false };
    } else {
      return { data: validatedData.data.data, error: null, isLoading: false };
    }
  }
  return { data: null, error, isLoading };
};

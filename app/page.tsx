"use client";

import CryptocurrencyCard from "@/components/CryptocurrencyCard";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import PaginationControls from "@/components/paginationControls/PaginationControls";
import PerPage from "@/components/paginationControls/PerPage";
import { useCryptocurrency } from "@/hooks/useCriptocurrency";
import { useRouter } from "next/navigation";
import { useState } from "react";
type useHomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

function Home({ searchParams }: useHomeProps) {
  const router = useRouter();
  const [cardsPerPage, setCardsPerPage] = useState(12);

  const { data, error, isLoading } = useCryptocurrency();
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["perPage"] ?? cardsPerPage.toString();
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = data?.slice(start, end);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-slate-500 to-slate-800 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-4 ">
        {isLoading && <Loading />}

        <ul className="flex flex-wrap justify-center items-center gap-2">
          {data &&
            entries?.map((crypto) => (
              <CryptocurrencyCard key={crypto.id} crypto={crypto} />
            ))}
        </ul>
        <div className="flex items-center justify-evenly w-full">
          <PerPage
            cardsPerPage={cardsPerPage}
            setCardsPerPage={setCardsPerPage}
          />
          <PaginationControls
            hasNextPage={end < (data?.length ?? 0)}
            hasPrevPage={start > 0}
            finalLimit={data?.length ?? 0}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

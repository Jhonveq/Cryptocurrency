"use client";
import HistoryTable from "@/components/HistoryTable";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { decimalFixed } from "../helpers/number";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const CryptoPage = () => {
  const { id } = useParams();

  const {
    data: crypto,
    error: cryptoError,
    loading: loadingCrypto,
  } = useFetch(`${id}`);
  const {
    data: history,
    error: historyError,
    loading: loadingHistory,
  } = useFetch(`${id}/history?interval=d1`);

  if (loadingCrypto || loadingHistory) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-slate-500 to-slate-800 max-w-screen h-[calc(100vh-5rem)]">
        <div className="flex w-full items-center justify-evenly h-[calc(100vh-5rem)] py-3">
          <div className=" flex flex-col gap-2">
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-base">
                <span className="font-bold">Ranking:</span> {crypto.rank}
              </h2>
              <h1 className="text-4xl font-bold">{crypto.name}</h1>
              <h2 className="text-base">{crypto.symbol}</h2>
            </div>
            <div className="bg-gray-400 px-1 py-2 rounded-xl">
              <ul>
                <li>
                  <span className="font-bold">Price: </span>
                  <span className="">${decimalFixed(crypto.priceUsd)}</span>
                </li>
                <li>
                  <span className="font-bold">Max Supply: </span>
                  <span>{decimalFixed(crypto.maxSupply)}</span>
                </li>
                <li>
                  <span className="font-bold">Market Cap (USD): </span>
                  <span>{decimalFixed(crypto.marketCapUsd)}</span>
                </li>
                <li>
                  <span className="font-bold">Varuation 24 Hrs: </span>
                  <span>{decimalFixed(crypto.changePercent24Hr)}</span>
                </li>
              </ul>
            </div>
          </div>
          <HistoryTable history={history} id={id} />
        </div>
        <button className="fixed bottom-0 right-0 px-4 py-2 m-4 bg-gray-500 text-white hover:bg-gray-600 rounded-full">
          <Link href="/">Back</Link>
        </button>
      </div>
    </>
  );
};

export default CryptoPage;

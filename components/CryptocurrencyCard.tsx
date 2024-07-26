import { decimalFixed } from "@/app/helpers/number";
import { Cryptocurrency } from "@/schemas/cryptocurrency";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type CryptocurrencyCardProps = {
  crypto: Cryptocurrency;
};

const CryptocurrencyCard = ({ crypto }: CryptocurrencyCardProps) => {
  return (
    <li className=" w-56 h-44 flex flex-col justify-center items-center bg-slate-400 rounded-lg hover:bg-slate-500  ">
      <h2 className="text-xl font-bold text-slate-800 text-center w-full overflow-hidden line-clamp-1">
        {crypto.name}
      </h2>
      <p className="text-lg text-slate-600">{crypto.symbol}</p>
      <p className="text-4xl text-slate-900 font-bold">
        ${decimalFixed(crypto.priceUsd)}
      </p>
      <p
        className={twMerge(
          "text-green-600 font-bold",
          Number(crypto.changePercent24Hr) < 0 && "text-red-600"
        )}
      >
        {decimalFixed(crypto.changePercent24Hr)}%
      </p>
      <Link
        href={`/${crypto.id}`}
        className="bg-slate-950 text-white  px-2 py-1 rounded-lg mt-3 hover:bg-slate-200 duration-200 cursor-pointer hover:text-slate-950 hover:border-slate-950 border hover:scale-105"
      >
        See Details
      </Link>
    </li>
  );
};

export default CryptocurrencyCard;

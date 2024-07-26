import { decimalFixed } from "@/app/helpers/number";
import dayjs from "dayjs";

type HistoryTableProps = {
  id: string | string[];
  history: any;
};

const HistoryTable = ({ id, history }: HistoryTableProps) => {
  return (
    <div className="bg-gray-400/10 rounded-md py-1 px-3 min-w-80 overflow-y-scroll h-full no-scrollbar">
      <table className="w-full">
        <thead className="">
          <tr className="">
            <th className="px-4 text-start">Date</th>
            <th className="px-4 text-start">Price</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {history
            ?.map(({ date, priceUsd, time }: any) => (
              <tr key={time} className="text-start odd:bg-gray-400/30">
                <td className="text-blue-950 border-r-2 border-gray-400/10 px-4">
                  {dayjs(date).toString().split(" ")[0]}{" "}
                  {dayjs(date, "YYYY-MM-DD").format("MMM DD YYYY")}
                </td>
                <td className="text-green-600">${decimalFixed(priceUsd, 1)}</td>
              </tr>
            ))
            .slice(history.length - 50, history.length)}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;

import React from "react";

type PerPageProps = {
  cardsPerPage: number;
  setCardsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

const PerPage = ({ cardsPerPage, setCardsPerPage }: PerPageProps) => {
  return (
    <div>
      <label htmlFor="perPage">Cards per page </label>
      <select
        name=""
        id=""
        value={cardsPerPage}
        onChange={(e) => setCardsPerPage(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default PerPage;

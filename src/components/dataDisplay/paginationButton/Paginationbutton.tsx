import { useState } from "react";
import { BikeNetworkData } from "../../../Types/Types";
function Paginationbutton({ networks }: BikeNetworkData) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const totalPage = Math.ceil(networks.length / itemPerPage);

  const currentData = networks.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevpage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <h1>Data: Page button</h1>
      {currentData.map((item) => (
        <div>
          {item.company}
          {item.id}
          {item.href}
          {item.location.latitude}
          {item.location.longitude}
        </div>
      ))}
      <div>
        <button onClick={handlePrevpage} disabled={currentPage === 1}>
          previous
        </button>
        <span>
          Page {currentPage}of {totalPage}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginationbutton;

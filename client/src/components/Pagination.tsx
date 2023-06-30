// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";

// export default function  Pagination({notes,setNotes}) {
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setpageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 3;

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(notes.slice(itemOffset, endOffset));
//     setpageCount(Math.ceil(notes.length / itemsPerPage));

//   }, [itemOffset, itemsPerPage,notes]);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % notes.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>

//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }
export {}
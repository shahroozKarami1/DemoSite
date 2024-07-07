// this  is  just  logic  fro  Pagination

let allData = [32, 55, 80, 50, 28, 21];



function logicPagination(countCardsPerPage, currentPage) {
  let endIndex = countCardsPerPage * currentPage;
  let startIndex = endIndex - countCardsPerPage;
     let res = allData.slice(startIndex, endIndex);
  console.log(res);
}


export  default  logicPagination

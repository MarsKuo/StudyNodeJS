
const convertPagination = function (resource, currentPage) {
  const totalResult = resource.length;  //總筆數
  const perpage = 3; //每頁三筆資料
  const pageTotal = Math.ceil(totalResult / perpage);   //總頁數
  // let currentPage = 2;  //當前頁數
  if (currentPage > pageTotal) {
    currentPage = pageTotal;
  }

  const minItem = (currentPage * perpage) - perpage + 1;
  const maxItem = (currentPage * perpage);
  //使用結果反推公式
  const data = [];
  resource.forEach(function (item, i) {
    let itemNum = i + 1;
    if (itemNum >= minItem && itemnum <= maxItem) {
      data.push(item);
    }
  })

  const page = {
    pageTotal,
    currentPage,
    haspre: currentPage > 1,
    hasNext: currentPage < pageTotal

  }

  return {
    page, data
  }
}


module.exports = convertPagination;
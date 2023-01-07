const buildTableRow = (brandData) => {
  return `<tr><th>${brandData.id}</th><td>${brandData.price}</td><td>${brandData.stock}</td></tr>`;
};

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const tableData = buildTableRow(data);
    const tableBody = document.getElementById("brand-details-body");
    tableBody.insertAdjacentHTML("beforeend", tableData);
  })
  .catch((error) => console.log("Error while fetching brand details"));

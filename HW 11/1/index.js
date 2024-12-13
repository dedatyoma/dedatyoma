document.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.createElement("div");
  tableContainer.style.margin = "20px";

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  for (let i = 1; i <= 10; i++) {
      const row = document.createElement("tr");

      for (let j = 1; j <= 10; j++) {
          const cell = document.createElement("td");
          cell.textContent = i * j;
          cell.style.border = "1px solid black";
          cell.style.padding = "10px";
          cell.style.textAlign = "center";
          row.appendChild(cell);
      }

      table.appendChild(row);
  }

  tableContainer.appendChild(table);

  document.body.appendChild(tableContainer);
});

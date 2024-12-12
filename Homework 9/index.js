const company = {
  sales: [
      { name: 'Jhon', salary: 1000 }, 
      { name: 'Alice', salary: 600 },
      { name: 'Bob', salary: 1200 }
  ],
  development: {
      web: [
          { name: 'Peter', salary: 2000 },
          { name: 'Alex', salary: 1800 },
          { name: 'Max', salary: 600 },
      ],
      internals: [ 
          { name: 'Jack', salary: 1300 } 
      ]
  }
}

function totalSales(company) {
  let total = 0;

    for (const department in company) {
        const value = company[department];

        if (Array.isArray(value)) {
            total += value.reduce((sum, employee) => sum + employee.salary, 0);
        } else if (typeof value === 'object' && value !== null) {
            total += totalSales(value);
        }
    }

    return total;
}

const total = totalSales(company);
console.log(total);
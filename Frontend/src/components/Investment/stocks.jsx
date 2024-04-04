import React from 'react';

function StocksList() {
  // Dummy stock data
  const stocks = [
    { id: 1, name: 'Stock A', price: 100 },
    { id: 2, name: 'Stock B', price: 150 },
    { id: 3, name: 'Stock C', price: 200 },
    { id: 4, name: 'Stock D', price: 80 },
    { id: 5, name: 'Stock E', price: 120 }
  ];

  return (
    <div className="stocks-container">
      <h2>Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>
            <span>{stock.name}</span>
            <span>{stock.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StocksList;

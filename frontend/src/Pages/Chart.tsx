import React, { useState } from 'react';
import react from "react";
import ChartData from "../Components/ChartData";
import "./App.css";


const Chart: React.FC = () => {
        const [balance, setBalance] = useState(21850.50);
      
        const handleDeposit = (amount: number) => {
          setBalance(balance + amount);
        };
      
        const formattedBalance: string = balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const data = [
          { month: 'Dec', balance: 10 },
          { month: 'Jan', balance: 20 },
          { month: 'Feb', balance: 18 },
          { month: 'Mar', balance: 20 },
          { month: 'Apr', balance: 13 },
          { month: 'May', balance: 24 },
          { month: 'Jun', balance: 29 },
          { month: 'Jul', balance: 38 },
          { month: 'Aug', balance: 28 },
        ];



  return (
    <div className="app-container"> {/* Updated: Added a new parent container */}
     <div className="app">
      <div className="top-content">
        <div className="left-content">
          <h1>Balance</h1>
          <h2 className="balance">CROWEDED CHECKING ACCOUNT    {'>'}</h2>
          
          <h3 className="balance-value">${formattedBalance}</h3> {/* Use the formattedBalance variable */}

        </div>
        <div className="deposit-container">
          <button className="deposit-btn" onClick={() => handleDeposit(500)}>
            Deposit 
          </button>
        </div>
      </div>
      <div className="chart-container">
        <ChartData data={data} />
      </div>
    </div>
  </div> 

  );
};


export default Chart;

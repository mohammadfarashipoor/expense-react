import React from 'react'; 
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpene from './component/IncomeExpene';
import HistoryList from './component/HistoryList';
import AddTransaction from './component/AddTransaction';



function App() {
  return (
    <>
      <Header/>
      <Balance/>
      <IncomeExpene/>
      <HistoryList/>
      <AddTransaction/>
    </>
  );
}

export default App;

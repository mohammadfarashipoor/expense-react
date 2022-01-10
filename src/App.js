import React from 'react'; 
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpene from './component/IncomeExpene';
import HistoryList from './component/HistoryList';
import AddTransaction from './component/AddTransaction';
import {GlobalProvider} from './context/GlobalState';



function App() {
  return (
    <>
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpene/>
      <HistoryList/>
      <AddTransaction/>
    </GlobalProvider>
    </>
  );
}

export default App;

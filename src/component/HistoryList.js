import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function HistoryList() {
  const {transactions}= useContext(GlobalContext)
    return (
        <>
          <div>
              <h4>Hstory</h4>
            <ul>
              {transactions.map(transaction=>(<li>{transaction.text} <span>{transaction.amount}</span></li>))}  
            </ul>    
          </div>  
        </>
    )
}

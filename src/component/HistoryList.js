import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function HistoryList() {
  const {transactions}= useContext(GlobalContext);
  
  const sign = transactions.amount > 0 ? '-' : '+';
    return (

        <>
          <div>
              <h4>Hstory</h4>
            <ul>
              {transactions.map(transactions=>(<li>{transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span></li>))}  
            </ul>    
          </div>  
        </>
    )
}

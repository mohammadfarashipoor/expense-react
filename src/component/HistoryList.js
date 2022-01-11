import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function HistoryList() {
  const {transactions}= useContext(GlobalContext);
  const {deletetransaction} = useContext(GlobalContext);

    return (

        <>
          <div>
              <h4>Hstory</h4>
            <ul>
              {transactions.map(transactions=>(<li>{transactions.text} <span>{transactions.amount}$</span><button onClick={()=>deletetransaction(transactions.id)}>x</button></li>))}  
            </ul>    
          </div>  
        </>
    )
}

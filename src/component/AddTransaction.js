import React, {useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export default function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addtransaction} = useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        const newTransaction ={
            id:Math.floor(Math.random()*1000000),
            text,
            amount: +amount
        }
        addtransaction(newTransaction);

    }


    return (
        <>
            <div className="form">
            <h4>Add Transaction</h4>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text ...."/>
                </div>
                <div>
                    <label htmlFor="number">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount"/>
                </div>
                <button>Enter Add Transaction</button>
            </form>  
            </div>
        </>
    )
}

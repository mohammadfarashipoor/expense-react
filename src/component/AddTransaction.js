import React, {useState} from 'react';

export default function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    return (
        <>
            <h4>Add Transaction</h4>
            <form>
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
        </>
    )
}

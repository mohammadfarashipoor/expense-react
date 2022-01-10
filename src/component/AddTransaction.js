import React from 'react'

export default function AddTransaction() {
    return (
        <>
            <h4>Add Transaction</h4>
            <form>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter Text ...."/>
                </div>
                <div>
                    <label htmlFor="number">Amount</label>
                    <input type="number" placeholder="Amount"/>
                </div>
                <button>Enter Add Transaction</button>
            </form>  
        </>
    )
}

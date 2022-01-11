import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


const intialState = {
    transactions:[
        {id:1 , text:"laptop " , amount: -1500},
        {id:2 , text:"Work " , amount: 2300},
        {id:3 , text:"shopping " , amount: -500}

    ]
}
export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children})=>{

    const[state,dispatch]=useReducer(AppReducer,intialState);

    function deletetransaction(id){
        dispatch({
            type: 'DELETETRANSACTION',
            payload: id

        })
    }
    
    return(
        <GlobalContext.Provider value={{transactions: state.transactions,deletetransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
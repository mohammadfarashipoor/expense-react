export default (state,action)=>{
    switch(action.type){
        case 'DELETETRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)
            }

        default:
            return state;
    }
}
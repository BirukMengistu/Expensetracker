import React ,{createContext ,useReducer ,useEffect} from 'react'
import AppReducer from './AppReducer';
const intialState = {
    transaction : []
}
export const GlobalContext = createContext(intialState);



const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer, intialState ,
        ()=>{
            const localData = localStorage.getItem('transactions');
            return localData? JSON.parse(localData) : []
        
        }
        );
    
   
     useEffect(() => {
          localStorage.setItem(('transactions'), JSON.stringify(state))
        }, [state]);
  


    function deleteTransction(id){
        dispatch({
            type:'DELET_TRANSACTION',
            payload:id})
        }
    function addTransaction(transaction){
            dispatch({
                type:'ADD_TRANSACTION',
                payload:transaction })
            }
    

    return(
       <GlobalContext.Provider
        value = {{transaction: state.transaction ,  deleteTransction , addTransaction} }>
           {children}
       </GlobalContext.Provider>
         )
}
export default GlobalProvider;
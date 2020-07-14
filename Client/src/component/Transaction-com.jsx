import React ,{useContext} from 'react'

import {GlobalContext} from '../context/GlobalContext'
import TransactionCard from './TransactionCard';
const TransactionComp =()=> {
    const { transaction } = useContext (GlobalContext);
    console.log(transaction);
    
    return (
        <div>
        <h3>History</h3>
           <ul className = "list">
           {transaction.map((trans)=> <TransactionCard key={trans.id} transactions = {trans}/>
            
           )}
          
         </ul>

        
     </div>
    )
}

export default TransactionComp;

/* <form id="form">
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form> */
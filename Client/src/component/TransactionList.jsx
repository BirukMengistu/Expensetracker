import React, {useState ,useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
export default function TransactionAdd() {

    const [title , settitle] = useState('');
    const [amount , setamount] = useState(0);
    const { addTransaction } =  useContext(GlobalContext);
    

    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()* 100000000) ,
            title,
             amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
        <form onSubmit ={onSubmit}>
        <div className="form-control">
          <label for="title">Text</label>
          <input type="text" value = {title} onChange={(e) => settitle(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for ="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value ={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button 
        className="btn">Add transaction</button>
      </form>  
        </div>
    )
}

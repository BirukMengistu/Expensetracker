import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function TransactionCard({transactions}) {
    const { deleteTransction } = useContext(GlobalContext);
    const sgin =  transactions.amount < 0 ? '-': '+';
    return (
        <li className = {transactions.amount > 0 ? 'plus': 'minus'}>
         {transactions.title}
          <span>{sgin}${Math.abs(transactions.amount)}
          </span>
          <button 
          onClick = {() => deleteTransction(transactions.id) }
          className = 'delete-btn'>x</button>
        </li>
        
    )
}


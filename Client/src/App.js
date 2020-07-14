import React from 'react';
import HeaderComp from './component/Header-comp';
import BalanceComp from './component/Balance-comp';
import TransactionComp from './component/Transaction-com';
import InComeExpenseComp from './component/IncomeExpense-comp';
import GlobalProvider  from './context/GlobalContext';
import TransactionAdd from './component/TransactionList';


function App() {
  return (
   
    <div className="App">
    <GlobalProvider>
       <HeaderComp/>
          <div className='container'>
            <BalanceComp/>
            <InComeExpenseComp/>
            <TransactionComp/>
            <TransactionAdd/>
         </div>
     
         </GlobalProvider>
     
    </div>
   
  );
}

export default App;

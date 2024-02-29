import React, { useContext } from 'react';
import { Transaction } from './Transaction';

// import { GlobalContext } from '../context/GlobalState';
import {Globalcontext} from '../Context/Globalstate';

export const TransactionList = () => {
  const { transactions } = useContext(Globalcontext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}


export default TransactionList
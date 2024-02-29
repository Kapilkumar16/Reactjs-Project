import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Balance from './component/Balance'
import IncomeExpenses from './component/IncomeExpenses'
import Transectionlist from './component/Transectionlist'
import Addtransaction from './component/Addtransaction'

import { GlobalProvider } from './Context/Globalstate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <Transectionlist/>
      <Addtransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App

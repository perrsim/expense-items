import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  { id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 8, 3)},
  { id:'e2', title: 'Toilet Paper', amount: 10.67, date: new Date(2023, 8, 3)},
  { id:'e3', title: 'Forniture', amount: 54.67, date: new Date(2023, 8, 3)},
  { id:'e4', title: 'Office', amount: 32.67, date: new Date(2023, 8, 3)},
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense){
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });
  };
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
    
  )
}
  
  export default App;
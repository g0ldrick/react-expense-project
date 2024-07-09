import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "test", amount: 7, category: "testCat" },
    { id: 2, description: "test", amount: 7, category: "testCat" },
    { id: 3, description: "test", amount: 7, category: "testCat" },
    { id: 4, description: "test", amount: 7, category: "testCat" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="h-max border border-red-100 m-4 p-4 rounded">
        <ExpenseList expenses={expenses} onDelete={handleDelete}></ExpenseList>
      </div>
    </div>
  );
}

export default App;

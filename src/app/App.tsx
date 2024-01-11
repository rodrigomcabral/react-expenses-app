import ExpenseScreen from "./ExpenseScreen";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//we redirect when its in the root
//so we create a new route to navigate

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/despesas/:yearMonth" element={<ExpenseScreen />}></Route>
        <Route path="/" element={<Navigate to="/despesas/2021-01" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import SelectionYearMonth from "./SelectionYearMonth";
import TotalExpenses from "./TotalExpenses";
import Box from "@material-ui/core/Box";

import { useEffect, useState } from "react";
import { IExpense, loadExpenses } from "./backend";
import { TableExpenses } from "./TableExpenses";
import { useParams, useNavigate } from "react-router-dom";

//call the backend
export default function ExpenseScreen() {
  //to storage the data we create an useState: 1st = state, 2nd = function
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  //navigate to another route
  const navigate = useNavigate();

  const params = useParams<{ yearMonth: string }>();
  const yearMonth = params.yearMonth || "2021-01";

  useEffect(() => {
    loadExpenses(yearMonth).then((data) => {
      console.log(data);
      setExpenses(data);
    });
  }, [yearMonth]);

  const total = sumExpenses(expenses);

  return (
    <div>
      <Box display="flex" padding="16px">
        <Box flex="1">
          <SelectionYearMonth
            onChangeYearMonth={changeYearMonth}
            yearMonth={yearMonth}
          />
        </Box>
        <Box>
          <TotalExpenses total={total} />
        </Box>
      </Box>
      <TableExpenses expenses={expenses} />
    </div>
  );

  function changeYearMonth(newYearMonth: string) {
    navigate(`/despesas/${newYearMonth}`);
  }
}

function sumExpenses(expenses: IExpense[]) {
  let total = 0;
  for (let expense of expenses) {
    total += expense.valor;
  }

  return total;
}

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { IExpense } from "./backend";
import { formatValue } from "./utils";

export function TableExpenses(props: { expenses: IExpense[] }) {
  return (
    <TableContainer>
      <Table aria-label="Table Expenses">
        <TableHead>
          <TableRow>
            <TableCell>Expense</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Day</TableCell>
            <TableCell align="right">Value (euros)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.descricao}</TableCell>
              <TableCell>{expense.categoria}</TableCell>
              <TableCell>{expense.dia}</TableCell>
              <TableCell align="right">{formatValue(expense.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

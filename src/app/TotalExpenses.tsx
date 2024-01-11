import { formatValue } from "./utils";

const style = { margin: "16px" };

export default function TotalExpenses(props: { total: number }) {
  return (
    <div style={style}>
      Total Expenses: <strong>{formatValue(props.total)}</strong>
    </div>
  );
}

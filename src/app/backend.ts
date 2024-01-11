//define types and functions from the backend

export interface IExpense {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

//function to load backend based on the date passed and the type (array expense)
export function loadExpenses(yearMonth: string): Promise<IExpense[]> {
  return fetch(
    `http://localhost:3001/despesas?mes=${yearMonth}&_sort=dia`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch");
    }
  });
}

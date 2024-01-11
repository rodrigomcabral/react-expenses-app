import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IYearMonthProps {
  yearMonth: string;
  onChangeYearMonth: (newYearMonth: string) => void;
}

export default function SelectionYearMonth(props: IYearMonthProps) {
  //split gives me two arrays after the sign
  const [year, month] = props.yearMonth.split("-");

  return (
    <div>
      <Box display="flex" flexDirection="row">
        <FormControl variant="filled">
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="year-select"
            value={year}
            onChange={(event) => {
              props.onChangeYearMonth(event.target.value + "-" + month);
            }}
          >
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled">
          <InputLabel id="month-label">Month</InputLabel>
          <Select
            labelId="month-label"
            id="month-select"
            value={month}
            onChange={(event) => {
              if (event.target.value) {
                props.onChangeYearMonth(year + "-" + event.target.value);
              } else {
                console.log("The current month is out of data!");
              }
            }}
          >
            <MenuItem value="01">January</MenuItem>
            <MenuItem value="02">February</MenuItem>
            <MenuItem value="03">March</MenuItem>
            <MenuItem value="04">April</MenuItem>
            <MenuItem value="05">May</MenuItem>
            <MenuItem value="06">June</MenuItem>
            <MenuItem value="07">July</MenuItem>
            <MenuItem value="08">August</MenuItem>
            <MenuItem value="09">September</MenuItem>
            <MenuItem value="10">October</MenuItem>
            <MenuItem value="11">November</MenuItem>
            <MenuItem value="12">December</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

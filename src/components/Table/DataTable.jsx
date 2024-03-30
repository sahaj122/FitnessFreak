import PropTypes from "prop-types";

// material ui
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// table style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DataTable = (props) => {
  const names = [
    "Carbohydrates",
    "Cholesterol",
    "Saturated Fat",
    "Total Fat",
    "Fiber Content",
    "Potassium",
    "Protein",
    "Sodium",
    "sugar",
  ];

  const values = [
    props.carbohydrates,
    props.cholesterol,
    props.saturated_fat,
    props.total_fat,
    props.fiber_content,
    props.potassium,
    props.protein,
    props.sodium,
    props.sugar,
  ];

  return (
    <>
      <h2 style={{ textAlign: "left", color: "black", fontSize: "24px" }}>
        Nutritional Values
      </h2>

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: "12" }} aria-label="customized table">
          {/* headings */}
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Serving size per {props.serving_size}/grams{" "}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>

          {/* values */}
          <TableBody>
            {names.map((name, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell align="right">{values[index]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

DataTable.propTypes = {
  serving_size: PropTypes.number,
  carbohydrates: PropTypes.number,
  cholesterol: PropTypes.number,
  saturated_fat: PropTypes.number,
  total_fat: PropTypes.number,
  fiber_content: PropTypes.number,
  potassium: PropTypes.number,
  protein: PropTypes.number,
  sodium: PropTypes.number,
  sugar: PropTypes.number,
};

export default DataTable;
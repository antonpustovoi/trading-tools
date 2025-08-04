import { GridEditInputCell } from "@mui/x-data-grid";

export function DefaultEditCell(props) {
  return (
    <GridEditInputCell onFocus={(event) => event.target.select()} {...props} />
  );
}

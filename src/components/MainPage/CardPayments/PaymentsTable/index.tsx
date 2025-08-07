import { DataGrid } from "@mui/x-data-grid";

import { updatePayment, useCardPaymentsStore } from "../useCardPaymentsStore";

import { columns } from "./columns";

export function PaymentsTable() {
  const data = useCardPaymentsStore((state) => state.data);

  const processRowUpdate = (newRow) => {
    updatePayment(newRow);
    return newRow;
  };

  const getRowClassName = ({ row }) => {
    if (!row.requestedAmount || !row.receivedAmount) return "";
    if (row.requestedAmount === row.receivedAmount) return "green";
    if (row.requestedAmount > row.receivedAmount) return "red";
    if (row.requestedAmount < row.receivedAmount) return "blue";
  };

  return (
    <DataGrid
      rows={data}
      columns={columns}
      hideFooter
      disableColumnMenu
      processRowUpdate={processRowUpdate}
      localeText={{ noRowsLabel: "Список порожній" }}
      getRowClassName={getRowClassName}
      onCellEditStop={({ id, field, reason, api }, event) => {
        if (field === "name" && reason === "enterKeyDown") {
          event.defaultMuiPrevented = true;
          api.setCellFocus(id, "requestedAmount");
          api.startCellEditMode({ id, field: "requestedAmount" });
        }
      }}
      sx={{
        "& .green": {
          "--row-color": "#00FF0050",
          "--row-color-hover": "#00FF0070",
        },
        "& .red": {
          "--row-color": "#FF000050",
          "--row-color-hover": "#FF000070",
        },
        "& .blue": {
          "--row-color": "#009DFF50",
          "--row-color-hover": "#009DFF70",
        },
        "& .MuiDataGrid-row": {
          backgroundColor: `var(--row-color) !important`,
          "&:hover": {
            backgroundColor: `var(--row-color-hover) !important`,
          },
        },
      }}
    />
  );
}

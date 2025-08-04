import { DataGrid } from "@mui/x-data-grid";

import { updatePayment, useCardPaymentsStore } from "../useCardPaymentsStore";

import { columns } from "./columns";

export function PaymentsTable() {
  const data = useCardPaymentsStore((state) => state.data);

  const processRowUpdate = (newRow) => {
    updatePayment(newRow);
    return newRow;
  };

  const getRowClassName = ({ row }) =>
    row.requestedAmount &&
    row.receivedAmount &&
    row.requestedAmount === row.receivedAmount
      ? "success"
      : "";

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
        "& .success": {
          backgroundColor: "#00FF0050 !important",
        },
        "& .success:hover": {
          backgroundColor: "#00FF0070 !important",
        },
      }}
    />
  );
}

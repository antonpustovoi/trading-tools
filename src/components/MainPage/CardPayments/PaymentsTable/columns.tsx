import { DefaultEditCell } from "./Cells/DefaultEditCell";
import { RemoveFromListButton } from "./RemoveFromListButton";

export const columns = [
  {
    headerName: "Дата",
    field: "id",
    width: 156,
    renderCell: ({ row }) => new Date(row.id).toLocaleString(),
  },
  {
    headerName: "Прізвище, Ім'я",
    field: "name",
    flex: 1,
    editable: true,
    renderEditCell: (params) => <DefaultEditCell {...params} />,
  },
  {
    headerName: "Сума",
    field: "requestedAmount",
    width: 104,
    editable: true,
    type: "number",
    renderCell: ({ value }) => (value ? Number(value).toFixed(2) : "-"),
    renderEditCell: (params) => <DefaultEditCell {...params} />,
  },
  {
    headerName: "Отримана сума",
    field: "receivedAmount",
    width: 104,
    editable: true,
    type: "number",
    renderCell: ({ value }) => (value ? Number(value).toFixed(2) : "-"),
    renderEditCell: (params) => <DefaultEditCell {...params} />,
  },
  {
    headerName: "Дії",
    field: "actions",
    width: 60,
    headerAlign: "center",
    renderCell: (params) => <RemoveFromListButton {...params} />,
  },
] as any;

columns.forEach((column) => {
  column.sortable ??= false;
  column.headerAlign ??= "left";
  column.align ??= "left";
  column.resizable ??= false;
});

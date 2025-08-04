import RemoveIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";

import { deletePayment } from "../useCardPaymentsStore";

interface RemoveFromListButtonProps {
  row: {
    id: number;
  };
}

export function RemoveFromListButton(props: RemoveFromListButtonProps) {
  const handleClick = () => deletePayment(props.row.id);

  return (
    <IconButton onClick={handleClick}>
      <RemoveIcon />
    </IconButton>
  );
}

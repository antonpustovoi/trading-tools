import { Button, Grid } from "@mui/material";

import { PaymentsTable } from "./PaymentsTable";
import { addPayment } from "./useCardPaymentsStore";

export function ManagePayments() {
  return (
    <Grid
      container
      direction="column"
      sx={{ height: "100%", position: "relative" }}
    >
      <Grid
        container
        sx={{ padding: "8px 12px 4px" }}
        justifyContent="flex-end"
      >
        <Button onClick={addPayment}>Додати нову оплату</Button>
      </Grid>
      <Grid size="grow" sx={{ overflow: "auto", width: "100%" }}>
        <PaymentsTable />
      </Grid>
    </Grid>
  );
}

import { Grid } from "@mui/material";

import { ManagePayments } from "./CardPayments";
import { PageHeader } from "./PageHeader";

export function MainPage() {
  return (
    <Grid
      container
      direction="column"
      flexWrap="nowrap"
      style={{ height: "100vh" }}
    >
      <Grid>
        <PageHeader />
      </Grid>
      <Grid size="grow">
        <ManagePayments />
      </Grid>
    </Grid>
  );
}

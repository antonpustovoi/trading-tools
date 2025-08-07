import { Grid } from "@mui/material";

export function PageHeader() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        backgroundColor: "#002C1D",
        padding: "16px 48px",
        color: "#FFF",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <img
        src="/trading-tools/favicon.png"
        sx={{ height: "60px", width: "60px", marginRight: "12px" }}
      />
      Trading Tools
    </Grid>
  );
}

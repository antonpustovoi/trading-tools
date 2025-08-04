import { Grid } from "@mui/material";

export function PageHeader() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        backgroundColor: "#161B25",
        padding: "32px 48px",
        color: "#FFF",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Trading Tools
    </Grid>
  );
}

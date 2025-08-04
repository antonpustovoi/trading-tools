/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from "@mui/material";

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?:
        | CSSProperties
        | ((theme: Theme) => CSSProperties)
        | ReadonlyArray<CSSProperties | ((theme: Theme) => CSSProperties)>;
    }
  }
}

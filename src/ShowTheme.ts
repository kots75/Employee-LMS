import { deepmerge } from "@mui/utils";
import { defaultTheme } from "react-admin";

const theme = deepmerge(defaultTheme, {
  components: {
    RaLabeled: {
      styleOverrides: {
        root: {
          fontSize: "1.5em",
          "& .RaLabeled-label": {
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

export default theme;

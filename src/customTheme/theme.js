import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const colorBlue = blue[500];

const theme = createTheme({
  palette: {
    primary: {
      main: "#6c7175",
    },
    success: {
      main: colorBlue,
    },
  }
});

export { theme };

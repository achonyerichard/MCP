import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import About from "./components/About";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0A0A0A",
    },
    secondary: {
      main: "#1966D1",
    },
  },
  typography: {
    fontFamily: "BIZ UDGothic",
  },
});
theme.typography.h2 = {
  fontSize: "4rem",
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
    fontFamily: "BIZ UDGothic",
  },
};
theme.typography.h4 = {
  fontSize: "2rem",
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
    fontFamily: "BIZ UDGothic",
  },
}




function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element ={<About/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

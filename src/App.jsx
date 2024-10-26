import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Alert } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>
      {/* <Button variant="contained" color="secondary">
        Click me
      </Button>
      <Button variant="contained" startIcon={<SendIcon />} color="success">
        Send
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
        Delete
      </Button>
      <br />
      <br />
      <Alert severity="error"> This is an alert - check it out</Alert> */}
      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp />
    </>
  );
}

export default App;

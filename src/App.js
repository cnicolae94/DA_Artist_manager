import "./App.css";
import credentialsContainer from "../backend/da_creds";
import Navigation from "./routes/nav-bar/navbar.component";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const { client_id, client_secret, dAurl } = credentialsContainer;
  const authEndpoint = `/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:3000&scope=basic`;
  const authUrl = url + authEndpoint;
  const [token, setToken] = useState(0);

  return <Navigation />;
}

export default App;

import "./App.css";
import { Container } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Container
      maxWidth="md"
      disableGutters="true"
      style={{ backgroundColor: "gray", height: "90vh" }}    >
      <Nav />      
      <Outlet />
    </Container>
  );
}

export default App;




/*


fake api   https://reqres.in/
*/

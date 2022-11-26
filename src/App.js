import "./App.css";
import { Container } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Container
      maxWidth="md" disableGutters="true"
      sx={{ backgroundColor: "#e0f2f1", height: '100vh' , overflowX:'scroll', overflowY:'scroll',
      '&::-webkit-scrollbar':{
          width:0,
      }}}>
      <Nav  />      
      <Outlet />
    </Container>
  );
}

export default App;




/*


fake api   https://reqres.in/
*/

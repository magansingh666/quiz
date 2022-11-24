import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import QuestionDisplay from "./QuestionDisplay";
import QuestionList from "./QuestionList";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import QuizEditModal from "./QuizEditModal";
import { act } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";

function AllQuizes() {
  const [quizes, setQuizes] = useState([]);
  const [finished, setFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);


  const navigate = useNavigate();


  useEffect(() => {
    let quizsString = localStorage.getItem("quizes");
    let quizArray = JSON.parse(quizsString);
    setQuizes(quizArray);

    setFinished(true);
  }, []);  
 

  const handleEdit = (index) => {
    
}

const handlePlay = (index) => {
    
}

const handleActiveStatusChange = (index) => {
    
}

//handling delete
const handleModalClose = (str) => {
  console.log(str);
 
  setShowModal(false);
  if(str === "no"){
    return;
  }
  setQuizes(quizes => {
    let newQuizes = JSON.parse(JSON.stringify(quizes)); 
    newQuizes.splice(activeIndex, 1); 
    console.log(newQuizes);
    localStorage.setItem("quizes", JSON.stringify(newQuizes));
    return newQuizes;
  });
 
}

const handleEditModalClose = (newQuizObject) => {
  console.log("In handle Edit modal close NEw Quiz Object is ....  ")
  console.log(newQuizObject);
  setShowEditModal(false);
  
  setQuizes(quizes => {
    let newQuizes = JSON.parse(JSON.stringify(quizes));
    newQuizes[activeIndex] = JSON.parse(JSON.stringify(newQuizObject));
    console.log(newQuizes);
    localStorage.setItem("quizes", JSON.stringify(newQuizes));
    return newQuizes;
  });
} 

const handleSwitchStatusChange = (index, e) => {
  console.log(index)
  console.log(e.target.checked)
  setQuizes(quizes => {
    let newQuizes = JSON.parse(JSON.stringify(quizes)); 
    newQuizes[index].status = e.target.checked ? "active" : "inactive";
    console.log(newQuizes);
    localStorage.setItem("quizes", JSON.stringify(newQuizes));
    return newQuizes;
  });
  

}




  return (
    <Box sx={{m:1}}>
      <Box textAlign={"right"}>
        <Button variant="contained">Create New Quiz</Button>
      </Box>


      <h1>All Quizes List</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Quiz Num. </TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Created On</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quizes.map((qObj, index) => (
          <TableRow key={index}>
            <TableCell align="center"> {index + 1} </TableCell>
            <TableCell align="left">
              {qObj.quizName + qObj.quizDescription}
            </TableCell>
            <TableCell align="left">
              {qObj.status}
              <Switch checked={qObj.status === "active" ? true : false}
              onChange={(e) => {handleSwitchStatusChange(index, e)}}/>
            </TableCell>
            <TableCell align="left">{qObj.date.substr(0, 16)}</TableCell>
            <TableCell align="left">
              <IconButton onClick={() => {setShowModal(true); setActiveIndex(index)}}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => { setShowEditModal(true) ;  setActiveIndex(index)}}>
                <CreateIcon />
              </IconButton>
              <IconButton onClick= {() => navigate("/play/" + index)} >
                <PlayArrowIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>

      {showModal && <Modal handleClose={handleModalClose}/>}
      {showEditModal && <QuizEditModal handleClose = {handleEditModalClose} qObj = {quizes[activeIndex]} />}


    </Box>
  );
}

export default AllQuizes;

/*
[{"quizName":"","quizDescription":"","questions":[]},
{"quizName":"","quizDescription":"","questions":[]},
{"quizName":"","quizDescription":"","questions":[]},
{"quizName":"","quizDescription":"","questions":[]},

{"quizName":"fdfdfdfd","quizDescription":"asfafafa","questions":[]},
*/

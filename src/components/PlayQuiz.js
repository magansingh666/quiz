import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addUsername } from "../redux/QuizSlice";
import QuestionDisplay from "./QuestionDisplay";
import { display } from "@mui/system";
import Animation from "./Animation";
import Confetti from 'react-confetti'

function PlayQuiz(props) {
  const [quiz, setQuiz] = useState({});
  const [state, setState] = useState("name_input"); // name_input,  start_quiz,  show_result
  const [finished, setFinished] = useState(false);
  const [username, setUsername] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsanswered] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [ansList, setAnsList] = useState([]);

  let { quizid } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(quizid);
    let quizsString = localStorage.getItem("quizes");
    let quizArray = JSON.parse(quizsString);
    setQuiz(quizArray[quizid]);
    setFinished(true);
  }, []);

 

  const handleStratQuizClicked = () => {
    if(username.length < 5 || username.length > 50){
      alert("Length of Name should be between 5 to 50 characters");
      return;
    }
    console.log(quiz);
    setState("start_quiz");
    dispatch(addUsername(username));
  };

  const handleNextQuestionbuttonClick = () => {   
      setSelectedIndex(-1);
      setQuestionIndex(i => i + 1 < quiz.questions.length ? i +1 : i);
      if((questionIndex + 1) === quiz.questions.length){
        console.log("hi what are  you doing")
        setState("show_result");
      

      }
  }

  const selectionHandler = (selected_index ) => {
    console.log("selected index is -->> " + selected_index );
    console.log("selected questin index is " + questionIndex);
    setSelectedIndex(selected_index);
    setAnsList((ansList) => {
      let correct = quiz.questions[questionIndex].correct ;
      ansList[questionIndex] = [selected_index, correct , selected_index === correct ? 1 : 0 ] ; 
      return ansList;     });
    setTimeout(()=>{console.log(ansList)}, 3000);
  
  }

  return (
    <div style={{"padding": "20px"}}>
      {state === "name_input" && (
        <Box>
          <h1>{quiz.quizName}</h1>
          <TextField
            sx={{ m: 2, width: "90%" }}
            name="user_name"
            label="Enter Your Name"
            multiline
            maxRows={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Box textAlign={"right"}>
            <Button variant="contained" onClick={handleStratQuizClicked}>
              Start Quiz
            </Button>
          </Box>
        </Box>
      )}
      {state === "start_quiz" && <><Box>{
        <QuestionDisplay qObj = {quiz.questions[questionIndex]} selectionHandler = {selectionHandler} />          
        }        
        </Box>
        <Box textAlign={"right"}>
          <Button variant="contained" onClick={handleNextQuestionbuttonClick} 
          disabled={selectedIndex === -1 }>
            
            {(questionIndex + 1) === quiz.questions.length ? "SUBMIT" :  "NEW QUESTION"}</Button>
        </Box> 
        <Box>
          <p>Question {questionIndex + 1} of {quiz.questions.length}</p>
        </Box>         
        
        </>}

      {state === "show_result" && <div  style={{ height : "500px", display : "flex", justifyContent : "center",
      "alignItems" : "center"     
    }}> 
      <div>
        <Typography variant="h3">
         You scored {ansList.reduce((acc, val) =>  acc + val[2], 0)} out of {ansList.length}
        </Typography>
      

      </div>   
      <Box sx={{width : "100px"}}>
      <Confetti />
        </Box> 


        
            <Button variant="contained" onClick={() => {navigate("/")}}>
              Go to HOME
            </Button>
          

      
      </div>}
    </div>
  );
}

export default PlayQuiz;

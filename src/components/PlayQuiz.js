import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addUsername } from "../redux/QuizSlice";
import QuestionDisplay from "./QuestionDisplay";

function PlayQuiz(props) {
  const [quiz, setQuiz] = useState({});
  const [state, setState] = useState("name_input"); // name_input,  start_quiz,  show_result
  const [finished, setFinished] = useState(false);
  const [username, setUsername] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsanswered] = useState(false);



  let { quizid } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(quizid);
    let quizsString = localStorage.getItem("quizes");
    let quizArray = JSON.parse(quizsString);
    setQuiz(quizArray[quizid]);
    setFinished(true);
  }, []);

  const handleStratQuizClicked = () => {
    console.log(quiz);
    setState("start_quiz");
    dispatch(addUsername(username));
  };

  return (
    <div>
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
        <QuestionDisplay qObj = {quiz.questions[questionIndex]} />
        
        
        }        
        </Box>
        <Box textAlign={"right"}>
          <Button variant="contained" onClick={() => setQuestionIndex(i => i + 1)} 
          disabled={!isAnswered}>New Question</Button>


        </Box>  
        
        </>}

      {state === "show_result" && <p>show result</p>}
    </div>
  );
}

export default PlayQuiz;

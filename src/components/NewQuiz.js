import React from "react";
import NewQuestionInput from "./NewQuestionInput";
import QuizTypeModal from "./QuizTypeModal";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

function NewQuiz() {
  const [quizName, setQuizName] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [addingQuestion, setAddingQuestion] = useState(false);
  const [questions, setQuestions] = useState([]);
  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };
  const handleQuizDescriptionchange = (e) => {
    setQuizDescription(e.target.value);
  };

  const handleNewQuestionSubmit = (quesObject) => {
    setQuestions([...questions, quesObject]);
    setTimeout(() => {console.log(questions)}, 2000);
    setAddingQuestion(false);

  }

  return (
    <div>
      <h1>Create New Quiz</h1>
      <QuizTypeModal open={false} />
      <Box sx={{ border: "2px solid black", m: 2 }} textAlign="center">
        <TextField
          sx={{ m: 2, width: "90%" }}
          id="outlined-multiline-flexible"
          label="Enter Quiz Name Here"
          multiline
          maxRows={4}
          value={quizName}
          onChange={handleQuizNameChange}
        />

        <TextField
          sx={{ m: 2, width: "90%" }}
          id="outlined-multiline-flexible"
          label="Enter Quiz description here"
          multiline
          maxRows={4}
          value={quizDescription}
          onChange={handleQuizDescriptionchange}
        /> 
        <h3>Total Question added {questions.length}</h3>     
      </Box>

      <Box textAlign="center">
      {addingQuestion ? (<NewQuestionInput handler = {handleNewQuestionSubmit}/> ) : (
          <Button variant="contained" onClick={() => setAddingQuestion(true)} sx={{m:2}}>
            Add Question
          </Button>          
        )}


      
      </Box>

      




    </div>
  );
}

export default NewQuiz;

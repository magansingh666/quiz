import React from "react";
import NewQuestionInput from "./NewQuestionInput";
import QuizTypeModal from "./QuizTypeModal";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { json } from "react-router-dom";



let initial_ques_obj = {
    qText: "",
    options: [],
    correct: 0,
    serial_num : 0,
    selected : -1, 
}

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
    let ques = [...questions];
    ques[quesObject.serial_num] = {...quesObject};
    setQuestions(ques);

  }

  const handleAddQuestion = () => {
    console.log("in handle add question")
    let ques = [...questions];
    initial_ques_obj.serial_num = ques.length;
    ques.push({...initial_ques_obj});
    setQuestions(ques);
    console.log(questions);

  }

  const handleSaveAll = () => {
    //localStorage.removeItem("quizes")
    let quizsString = localStorage.getItem("quizes");
    if(quizsString == null ){quizsString = "[]"}
    let quizArray = JSON.parse(quizsString);

    let quizObj = {quizName, quizDescription, questions, date: Date(), status: "inactive"} ;
    quizArray.push(quizObj);
    localStorage.setItem("quizes", JSON.stringify(quizArray));
    let quizsString1 = localStorage.getItem("quizes");
    console.log(quizsString1);    
  }

  return (
    <div>
      <h1>Create New Quiz</h1>
      <QuizTypeModal open={false} />
      <Box sx={{ border: 3, p: 1, m: 1 }} textAlign="center">
        <TextField
          sx={{  m: 2, width: "90%" }}
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
        <h3>Total Question in this Quiz {questions.length}</h3>     
      </Box>

      

      {questions.map(e => <NewQuestionInput key = {e.serial_num} handler = {handleNewQuestionSubmit} qObj={e}/>)}
   
        

      <Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          onClick={handleAddQuestion}
          sx={{ backgroundColor: "#1b5e20", m: 2 }}
        >
          Add New Question
        </Button>

        <Button
          variant="contained"
          size="large"
          onClick={handleSaveAll}
          sx={{ backgroundColor: "#1b5e20", m: 2 }}
        >
          SAVE ALL
        </Button>
      </Box>  
      

      




    </div>
  );
}

export default NewQuiz;

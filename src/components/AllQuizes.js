import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import QuestionDisplay from "./QuestionDisplay";

function AllQuizes() {
  const [quizes, setQuizes] = useState([]);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    let quizsString = localStorage.getItem("quizes");
    let quizArray = JSON.parse(quizsString);
    setQuizes(quizArray);
    console.log(quizes);
    setFinished(true);
  }, []);
  const handleChange = (value) => {console.log(value)};

  return (
    <div>
      <h1> Quiz Summary</h1>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Quiz</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Quiz"
          onChange={handleChange}  
        >

          {quizes.map((e, i) => <MenuItem value={i}>{e.quizName}</MenuItem>)}
        
        </Select>
      </FormControl>

      {finished && <QuestionDisplay qObj={quizes[2].questions[0]} />}

      
    </div>
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

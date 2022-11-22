import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function NewQuestionInput(props) {
  const [question, setQuestion] = useState(props.qObj);
  const [newText, setNewText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleQTextChange = (e) => {
    e.preventDefault();
    setQuestion({ ...question, qText: e.target.value });
    props.handler({ ...question, qText: e.target.value })
  
  };

  const handleOptionChange = (e) => {
    e.preventDefault();
    let opts = [...question.options];
    opts[e.target.name] = e.target.value;
    setQuestion({ ...question, options: [...opts] });
    props.handler({ ...question, options: [...opts] })
  };

  const handleOptionInputSubmit = (e) => {
    if (newText.length < 2) {
      return;
    }

    let opts = [...question.options];
    opts.push(newText);
    setQuestion({ ...question, options: [...opts] });
    props.handler({ ...question, options: [...opts] })
    setNewText("");
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };


  const handleDelete = (index) => {
    
    let opts = [...question.options];
    opts.splice(index, 1);
    setQuestion({ ...question, options: [...opts] });
    props.handler({ ...question, options: [...opts] });
  };

 
 
  const handleQuestionSubmission = () => {
    if (question.qText.length < 10 || question.qText.length > 100) {
      setErrorMessage("Question Length should be between 10 to 100.");
    }

    if (question.options.length < 2) {
      setErrorMessage("Options shoud be 2+ .");
    }

    props.handler(question);
  };

  const handleSelectChange = (e) => {
    
    setQuestion({ ...question, correct: e.target.value });
    props.handler({ ...question, correct: e.target.value });

  };
  return (
    <Box sx={{ border: 1, p: 1, m: 1}}>
      <h3>Question Number {props.qObj.serial_num + 1}</h3>
      <TextField
        sx={{ m: 2, width: "90%" }}
        id="outlined-multiline-flexible"
        label="Enter Question Text Here"
        multiline
        maxRows={4}
        value={question.qText}
        onChange={handleQTextChange}
      />
      {question.options.length > 0 && <h4>OPTIONS</h4>}

      <ol>
        {question.options.length > 0 &&
          question.options.map((e, i) => (
            <li key={i.toString()}>
              <TextField
                value={e}
                name={i.toString()}
                key={i}
                id="outlined-multiline-flexible"
                sx={{ width: "60%", m: 1, position: "relative", top: -25 }}
                variant="outlined"
                onChange={handleOptionChange}
              />
              <IconButton onClick={() => handleDelete(i)}>
                <DeleteOutlineOutlinedIcon color="error" />
              </IconButton>
            </li>
          ))}
      </ol>

      {question.options.length > 0 && (
        <Box style={{ width: "150px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Correct Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={question.correct}
              label="Correct Option"
              onChange={handleSelectChange}
            >
              {question.options.map((e, i) => (
                <MenuItem key={i} value={i}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      <h4>Add a new Option</h4>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: "100px",
        }}
      >
        <TextField
          sx={{ width: "70%", marginRight: 2 }}
          id="outlined-multiline-flexible"
          label="Enter option"
          multiline
          maxRows={4}
          value={newText}
          onChange={handleInputChange}
        />
        <Button variant="outlined" onClick={handleOptionInputSubmit}>
          Submit
        </Button>
      </div>

      

      {errorMessage && (
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage("");
          }}
        >         
          {errorMessage}
        </Alert>
      )}

      
    </Box>
  );
}




export default NewQuestionInput;


/*

<Box textAlign="center">
        <Button
          variant="contained"
          size="large"
          onClick={handleQuestionSubmission}
          sx={{ backgroundColor: "#1b5e20" }}
        >
          Submit Question
        </Button>
      </Box>
*/
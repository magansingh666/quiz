import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };

function QuizEditModal(props) {
  const [quiz, setQuiz] = useState(props.qObj);
 

  useEffect(()=> {
    console.log(props.qObj);

  },[]);

  const handleDoneClick = (e) => {
    props.handleClose(JSON.parse(JSON.stringify(quiz)));
    console.log(quiz);


  }

  const handleChange = (e) => {
    console.log(e.target.name);
    setQuiz({...quiz, [e.target.name] : e.target.value })

  }

  return (
    <div>
       <Modal
        open= "true"        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
        sx={{ m: 2, width: "90%" }}
        name="quizName"
        label="Edit Quiz Title"
        multiline
        maxRows={4}
        value={quiz.quizName}
        onChange={handleChange}
      />

        <TextField
        sx={{ m: 2, width: "90%" }}
        name="quizDescription"
        label="Edit Quiz description"
        multiline
        maxRows={4}
        value={quiz.quizDescription}
        onChange={handleChange}
      />  

          <Box textAlign="right">         
           
            <Button variant='contained' onClick={handleDoneClick}>DONE</Button>

          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default QuizEditModal

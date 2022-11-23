import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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
  return (
    <div>
       <Modal
        open= "true"        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h9" component="h2" fontFamily={"Times"}>
            This is modal for editing quiz tile and description
          </Typography>
          <Typography sx={{ mt: 2 }} fontFamily={"Times"}>
            modal for edition quiz title and 
          </Typography>


          <Box textAlign="right">           
            <Button variant='outlined' sx={{m:1}} onClick={() => props.handleClose("no")}>NO</Button>
            <Button variant='contained' onClick={() => props.handleClose("yes")}>YES</Button>

          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default QuizEditModal

import * as React from 'react';
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
  border: '5px solid pink',
  boxShadow: 24,
  p: 4,
};

export default function QuizTypeModal(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => { 
    
    setOpen(false)};


    const handleClick = () => {
    setOpen(false);
    };

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose Type of Quiz
          </Typography>
          <Button variant='outlined' style={{"width": "100%", "margin" : "2px"}} onClick={handleClick}>MCQs (single choice)</Button>
          <Button variant='outlined' style={{"width": "100%", "margin" : "2px"}}>MCQs (1+ choices correct)</Button>
          <Button variant='outlined' style={{"width": "100%", "margin" : "2px"}}>Descriptive Type</Button>
          
          
        </Box>
      </Modal>
    </div>
  );
}

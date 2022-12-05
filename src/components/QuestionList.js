import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function QuestionList(props) {  

  return (
    <Box>
      <h1>{props.qObj.quizName}</h1>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Question Number</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Created On</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.qObj.questions.map((qObj, index) => (
            <TableRow 
                key={index}              
            >
              <TableCell align="center"> {index + 1} </TableCell>
              <TableCell align="left">{qObj.qText}</TableCell>
              <TableCell align="left">{qObj.status} 
                <Switch defaultChecked /> 
              </TableCell>
              <TableCell align="left">{qObj.date.substr(0,16)}</TableCell>
              <TableCell align="left">
                <IconButton><DeleteIcon /></IconButton>
                <IconButton><CreateIcon /></IconButton>
                <IconButton><PlayArrowIcon /></IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>      
    </Box>
  );
}

export default QuestionList;


/*
<List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {props.qObj.questions.map((value, index) => {
          return (
            <ListItem
              key={index}
              secondaryAction={
                <Checkbox
                  edge="begin"
                  onChange={(e) => handleToggle(e, index)}
                  checked={index === value.correct}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={value.qText} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>


*/
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

function QuestionDisplay(props) {
  const [checked, setChecked] = React.useState([1]);
  useEffect(() => {
    console.log(props.qObj);


  }, []);





  const handleToggle = (value) => () => {
    console.log(value);
    let newChecked = props.qObj.options.indexOf(value);
    if(props.setSelectedOption !== undefined){
        props.setSelectedOption(newChecked);
    }

    
  }; 

    return (
      <Box>
        <p>{props.qObj.qText}</p>

        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          { props.qObj.options.map((value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="begin"                     
                    onChange={handleToggle(value)}
                    checked={index === props.qObj.correct}                    
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };


export default QuestionDisplay;

/*
let initial_ques_obj = {
    qText: "",
    options: [],
    correct: 0,
    serial_num : 0,
    selected : -1, 
}
------------------
{qText: 'question1', options: Array(3), correct: 0, serial_num: 0, selected: -1}
correct
: 
0
options
: 
Array(3)
0
: 
"option1 of question1"
1
: 
"option2 of question1"
2
: 
"option3 of queston 1"
length
: 
3
[[Prototype]]
: 
Array(0)
qText
: 
"question1"
selected
: 
-1
serial_num
: 
0





*/

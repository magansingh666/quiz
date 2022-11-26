import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Box } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Home() {
    const navigate = useNavigate();
  return (
    <div style={{"border" : "", "height" : "85vh", "display" : "flex",  "alignItems" : "center" ,    
    "justifyContent" : "center"}}>
        <Card sx={{ width: 200, m : 1, p: 1, backgroundColor : "#F44336", borderRadius: "20px" }} ariant="outlined" >
            <CardContent>
            <Typography variant="h5">
                 Create New           
            </Typography>          
                
            </CardContent>
            
            <CardActions>
                <Box sx={{"textAlign" : "center"}}>
                <Button onClick={() => {navigate("/new")}} variant='contained'>New Quiz</Button>
                </Box>
                
            </CardActions>

        </Card>


        <Card sx={{ width: 200, m : 1, p : 1, backgroundColor : "#F44336", borderRadius: "20px" }} ariant="outlined" >
            <CardContent>
            <Typography variant="h5">
                 View All          
            </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {navigate("/all")}} variant='contained'>All Quizes</Button>
            </CardActions>

        </Card>





      
    </div>
  )
}

export default Home


/*


        <h1>I am Home</h1>
        <Link to="new">Create New Quiz</Link>
        <div />
        <Link to="all">My All Quizess</Link>
        <div />
        <Link to="play">Play All Quizess</Link>
        <Outlet>
        </Outlet>




*/
import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
    <div style={{"display": "flex", "justifyContent" : "space-between"}}>
        <Card sx={{ maxWidth: 200, m : 1 }} ariant="outlined" >
            <CardContent>
                <p>Create A New Quiz</p>
            </CardContent>
            <CardActions>
                <Button onClick={() => {navigate("/new")}} variant='outlined'>New Quiz</Button>
            </CardActions>

        </Card>


        <Card sx={{ maxWidth: 200, m : 1 }} ariant="outlined" >
            <CardContent>
                <p>My All Quizes</p>
            </CardContent>
            <CardActions>
                <Button onClick={() => {navigate("/all")}} variant='outlined'>View All Quizes</Button>
            </CardActions>

        </Card>



        <h1>I am Home</h1>
        <Link to="new">Create New Quiz</Link>
        <div />
        <Link to="all">My All Quizess</Link>
        <div />
        <Link to="play">Play All Quizess</Link>
        <Outlet>
        </Outlet>

      
    </div>
  )
}

export default Home

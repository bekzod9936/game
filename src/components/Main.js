import { Grid , Paper , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import React, { useContext } from 'react';
import UserResults from './Info/UserResults';
import { Container, Start } from './style';
import { numberContext } from '../context/GeneratNum';
import { UserContext } from '../context/Results'
import CardHeader from './Header/CardHeader';
import CardBody from './Body/CardBody';
import CardFooter from './Footer/CardFooter';
const useStyles=makeStyles((theme) => ({
   bgcontainer: {
     width: '100%',
     height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '10px 0'
    }
   },
  paper: {
    width: '100%',
    height: '60vh',
    position: 'relative',
  },
  wrapper:{
    display: 'flex',
    alignItems: 'center',
  },
  result: {
    [theme.breakpoints.down('md')]:{
      padding: '20px 0'
    }
  }
}));

const Main = () => {
  const classes=useStyles();
  const [state, dispatch] = useContext(numberContext);
  const [stateResult, dispatchResult]= useContext(UserContext);
  return (
    <Container>
      <Grid container xs={11} md={12} item className={classes.bgcontainer}  >
        <Grid item sm={1} md={3}  />
        <Grid item xs={12}  className={classes.wrapper} md={5}  sm={6}>
           <Paper variant='outlined' className={classes.paper}>
             <CardHeader />
             <CardBody />
             <CardFooter />
            <Start dis={state.display}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircleFilledWhiteIcon />}
                onClick={() => { dispatch({ type: 'display' }); dispatchResult({type: 'restart'}) }  }
              >
                Start
              </Button>
            </Start>
           </Paper>
         </Grid>
         <Grid item sm={1} />
         <Grid item xs={12} className={classes.result}  sm={4} md={3}><UserResults /></Grid>
      </Grid>
    </Container>
  )
}

export default Main

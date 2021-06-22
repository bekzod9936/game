import React, { useContext } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container, Wrapper } from './style';
import { makeStyles } from '@material-ui/core/styles';
import { numberContext } from '../../context/GeneratNum'
const useStyles=makeStyles({
  progress: {
    height: '15px',
    borderRadius: '10px'
  }
})
const CardFooter = () => {
  const [state, dispatch] = useContext(numberContext)
  const classes=useStyles();
  return (
    <Container>
      <Wrapper>
        <LinearProgress className={classes.progress} color={state.len<20 ? 'secondary' : 'primary' } variant="determinate" value={state.len} />
      </Wrapper>
    </Container>
  )
}

export default CardFooter

import React, { useContext } from 'react';
import { Box } from "@material-ui/core";
import { Container } from "./style";
import {makeStyles} from '@material-ui/core/styles';
import { numberContext } from  '../../context/GeneratNum';
const useStyles=makeStyles({
  boxStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%'
  },
})

const CardHeader = () => {
  const classes=useStyles();
  const [state, dispatch] = useContext(numberContext);
  return (
    <Container>
      <Box component='div' className={classes.boxStyles} >
      <Box component='h2'>{state.num1}</Box>
      <Box component='h2'>{state.sign===1 ? '+' : state.sign===2 ? '-' : '*' }</Box>
      <Box component='h2'>{state.num2}</Box>
      </Box>
    </Container>
  )
}

export default CardHeader

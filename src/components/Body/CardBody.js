import React, { useContext } from 'react';
import {Button} from '@material-ui/core';
import { Container, Wrapper, Level } from './style';
import { numberContext } from '../../context/GeneratNum';
import { UserContext } from  '../../context/Results';
const CardBody = () => {
  const [state, dispatch] = useContext(numberContext);
  const [stateResult, dispatchResult] = useContext(UserContext)
  let right , g1 , g2 , g3 , g4 ;
    if (state.sign === 1) {
      right = state.num1 + state.num2;
    } else
      if (state.sign === 2) {
        right = state.num1 - state.num2;
      } else
        if (state.sign === 3) {
          right = state.num1 * state.num2;
        }
    if (state.put === 1) {
      g1 = right;
      g2 = right - 1;
      g3 = right + 1;
      g4 = right + 2;
    } else if (state.put === 2) {
      g1 = right + 1;
      g2 = right;
      g3 = right + 2;
      g4 = right - 2;
    } else if (state.put === 3) {
      g1 = right + 2;
      g2 = right - 1;
      g3 = right;
      g4 = right + 1;
    }
    else if (state.put === 4) {
      g1 = right + 2;
      g2 = right - 1;
      g3 = right + 1;
      g4 = right;
    }
    const handleClick=(number)=>{
       if(state.count < 4){
        if (number === right) {
          dispatch({ type: 'check', payload: { gennum1: 10, gennum2: 10, speed: 10 , level: 1 } })
        } else {
          dispatch({ type: 'check', payload: { gennum1: 10, gennum2: 10, speed: -10, level: 1}})
        }
       } else if (state.count > 3 && state.count < 11)
         {if (number === right) {
         dispatch({ type: 'check', payload: { gennum1: 20, gennum2: 10, speed: 20, level: 2}})
         } else {
         dispatch({ type: 'check', payload: { gennum1: 20, gennum2: 10, speed: -20, level: 2 } })
         }} else {
         if (number === right) {
           dispatch({ type: 'check', payload: { gennum1: 20, gennum2: 20, speed: 25, level: 3 } })
         } else {
           dispatch({ type: 'check', payload: { gennum1: 20, gennum2: 20, speed: -25, level: 3 } })
         }
         };
      dispatchResult({ type: 'push', payload: { num1: state.num1, num2: state.num2, sign: state.sign, userAnswer: number, answer: right } });
        }
  return (
    <Container>
      <Wrapper>
        <Level>Level-{state.level}</Level>
        <Button color='primary' style={{padding: '15px 0'}} onClick={()=> handleClick(g1) } size='large' variant='contained'>{g1}</Button>
        <Button color='primary' style={{ padding: '15px 0' }} onClick={() => handleClick(g2)} size='large' variant='contained'>{g2}</Button>
        <Button color='primary' style={{ padding: '15px 0' }} onClick={() => handleClick(g3)} size='large' variant='contained'>{g3}</Button>
        <Button color='primary' style={{ padding: '15px 0' }} onClick={() => handleClick(g4)} size='large' variant='contained'>{g4}</Button>
      </Wrapper>
    </Container>
  )
}

export default CardBody

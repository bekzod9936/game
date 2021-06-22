import React, { useEffect, useContext} from 'react'
import { Container } from "./style";
import Main from "../components/Main";
import { UserContext } from "../context/Results";
const App = () => {
  const [stateResult, dispatchResult] = useContext(UserContext)
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('username')) === null){
      let name='';
      setTimeout(() => {
        name = prompt('what is your name ?');
        localStorage.setItem('username' , JSON.stringify(name))
        dispatchResult({ type: 'username', payload: { username: name } })
      }, 500);
    } else { dispatchResult({ type: 'username', payload: { username: JSON.parse(localStorage.getItem('username')) } })}
  }, [])
  return (
    <Container>
        <Main />
    </Container>
  )
}

export default App

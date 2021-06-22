import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { numberContext } from './GeneratNum'
export const UserContext=createContext();

const Results = ({children}) => {
  const [state1, dispatch] = useContext(numberContext);
  const initialState={
    l1: [],
    l2: [],
    l3: [],
    username: '',
  };
  const reducer=(state , action)=>{
     switch (action.type) {
       case 'push':  if (state1.count < 4) { return { ...state, l1: [...state.l1 , action.payload] } } else if (state1.count > 3 && state1.count < 11) {
         return { ...state, l2: [...state.l2 , action.payload] }
       } else { return { ...state, l3: [...state.l3 ,action.payload] } } ;
       case 'username': return { ...state, username: action.payload.username };
       case 'restart': return { ...state , l1: [] , l2: [] , l3: [] };
       default: return state;
     }
  }

  const [stateResult, dispatchResult] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[stateResult, dispatchResult] }>
      {children}
    </UserContext.Provider>
  )
}

export default Results

import React, { createContext, useReducer, useEffect , useRef } from 'react'
export const numberContext=createContext();
const GeneratNum = ({children}) => {
  const genNumber=(number)=>{
    return Math.floor((Math.random() * number) + 1)
  }
  const initialState={
    display: true,
    num1: genNumber(10),
    num2: genNumber(10),
    sign: genNumber(3),
    put:  genNumber(4),
    len: 100,
    level: 1,
    count: 0
  }
  const reducer=(state , action)=>{
     switch (action.type) {
       case 'display':  return {...state , display: false  } ;
       case 'check':  return { ...state, num1: genNumber(action.payload.gennum1), level: action.payload.level , num2: genNumber(action.payload.gennum2),sign: genNumber(3), put: genNumber(4), len: state.len + action.payload.speed , count: state.count+1  };
       case 'time' : return {...state , len: state.len-1};
       case 'restart': return {...action.payload}
       default: return state; 
     }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const interval= useRef()
  useEffect(() => {
    if (!state.display){
     interval.current=setInterval(() => dispatch({ type: 'time' }), 100);
    };
  }, [state.display])
  useEffect(() => { 
    return () => {
      if (state.len <= 0) {
        clearInterval(interval.current);
        dispatch({
          type: 'restart', payload: {
            display: true,
            num1: genNumber(10),
            num2: genNumber(10),
            sign: genNumber(3),
            put: genNumber(4),
            len: 100,
            level: 1,
            count: 0
          }})
      }
    }
  }, [state.len])
  return (
    <numberContext.Provider value={[state, dispatch]}>
      {children}
    </numberContext.Provider>
  )
}

export default GeneratNum


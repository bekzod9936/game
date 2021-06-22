import React from 'react'
import GeneratNum from './GeneratNum';
import Results from './Results';
const Context = ({children}) => {
  return (
    <GeneratNum>
      <Results>
      {children}
      </Results>
    </GeneratNum>
  )
}

export default Context

import React, {createContext, useState} from 'react'

export const Context = createContext();

const ContextProvider = props => {
  const [lang, setLang] = useState('EN')
  const ToggleLang = changeLang => {
    setLang(changeLang)
  }
  return (
    <Context.Provider value={{lang, ToggleLang}}>
      {props.children}
    </Context.Provider>  
  )
}

export default ContextProvider
import React, {createContext, useState} from 'react'

export const Context = createContext();

const supportedLang = ['EN', 'FR', 'ES'];

let browserLang = navigator.language.slice(0,2).toUpperCase();

if(supportedLang.indexOf(browserLang) === -1){
  browserLang = 'EN';
}

const ContextProvider = props => {
  const [lang, setLang] = useState(browserLang)
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
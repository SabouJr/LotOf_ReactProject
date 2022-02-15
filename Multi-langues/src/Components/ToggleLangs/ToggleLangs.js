import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import { Context } from '../../context/LangContext'

export default function ToggleLangs() {
  const {ToggleLang} = useContext(Context)
  return (
    <div className='container-langs'>
        <img onClick={() => ToggleLang('FR')} src={FrenchFlag}/>
        <img onClick={() => ToggleLang('ES')} src={SpanishFlag}/>
        <img onClick={() => ToggleLang('EN')} src={EnglishFlag}/>
    </div>
  )
}

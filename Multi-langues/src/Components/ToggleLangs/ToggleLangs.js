import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'

export default function ToggleLangs() {
  return (
    <div className='container-langs'>
        <img src={FrenchFlag}/>
        <img src={SpanishFlag}/>
        <img src={EnglishFlag}/>
    </div>
  )
}

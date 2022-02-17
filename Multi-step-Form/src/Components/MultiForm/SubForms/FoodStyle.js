import React, {useRef} from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

  const preventFunc = e => {
    e.preventDefault()
    const styleData = {
      FoodStyle: []
    }

    allCheckBoxes.current.forEach(checkbox => {
      if(checkbox.checked){
        styleData.FoodStyle.push(checkbox.value)
      }
    })

    props.modifyIndex(4, styleData)
  };

  const handleReturn = () => {
    props.modifyIndex(2)
  }

  const allCheckBoxes = useRef([])
  const addCheck = el => {
    if(el && !allCheckBoxes.current.includes(el)){
      allCheckBoxes.current.push(el);
    }
  };

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix Multiples.</span>

      <label htmlFor="italian">Italienne</label>
      <input ref={addCheck} type="checkbox" id="italian" value="italian"/>
      <label htmlFor="Japanese">Japonaise</label>
      <input ref={addCheck} type="checkbox" id="Japanese" value="Japanese"/>
      <label htmlFor="indian">Indienne</label>
      <input ref={addCheck} type="checkbox" id="indian" value="indian"/>
      <label htmlFor="thaî">Thailandaise</label>
      <input ref={addCheck} type="checkbox" id="thaî" value="thaî"/>
      <label htmlFor="french">Française</label>
      <input ref={addCheck} type="checkbox" id="french" value="french"/>
      <label htmlFor="chinese">Chinoise</label>
      <input ref={addCheck} type="checkbox" id="chinese" value="chinese"/>

      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">PRECEDENT</button>
        <button>VALIDER</button>
      </div>
    </form>
  )
}

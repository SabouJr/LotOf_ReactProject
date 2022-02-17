import React, {useState} from 'react'
import './SubForm.css'

export default function HateLove(props) {

  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: ""
    }
  })

   const handleTxtArea = (e, pref) => {
     if(pref === "love"){
       setFormData({
         prefs: {
           ...formData.prefs,
           love: e.target.value
         }
       })
     }
     else if(pref === "hate"){
      setFormData({
        prefs: {
          ...formData.prefs,
          hate: e.target.value
        }
      })
    }
   }
  const preventFunc = e => {
    e.preventDefault();
  };

  const handleReturn = () => {
    props.modifyIndex(4)
  }

  return (
    <form className="preferences-form" onSubmit={preventFunc}>

      <p>Parle-nous des aliments que tu préféres et que tu détestes !</p>

      <label htmlFor="prefered">Tes aliments préférés (séparé par une virgule) :</label>
      <textarea onChange={e => handleTxtArea(e, 'love')} id="prefered" placeholder="un ou plusieurs"></textarea>

      <label htmlFor="hated">Les aliments que tu deteste (séparé par une virgule) :</label>
      <textarea onChange={e => handleTxtArea(e, 'hate')} id="hated" placeholder="un ou plusieurs"></textarea> 

      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">PRECEDENT</button>
        <button onClick={() => props.modifyIndex(6, formData)}>VALIDER</button>
      </div>
    </form>
  )
}

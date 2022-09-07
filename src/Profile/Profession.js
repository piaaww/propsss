import React from 'react'
import './Profession.css'

const Profession = (props) => {
  return (
    <div className='Profession'>
        <h5 ><b>Profession</b></h5>
    <p >I am currently a student at GO My Code Academy IM LOCKING TO BE  a software Developper</p>
    <p ><b>SKIILS</b> <br/> {props.Skill} <br/>  <br/></p>
    </div>
  )
}

export default Profession
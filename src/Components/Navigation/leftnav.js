import React from 'react'
import './leftnav.css'
import logo from '../../Resources/TC_Logo.png'

function LeftNav() {
  return (
    <div>
        <img className= 'leftnav__logo' src = {logo} width={100} alt=""/>

    </div>
  )
}

export default LeftNav
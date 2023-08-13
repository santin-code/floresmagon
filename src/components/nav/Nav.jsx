import React, {useState} from 'react'
import './nav.css'
import { SiHomeassistant } from 'react-icons/si'

const Nav = () => {

  const[active, setActive] = useState('#')

  return (
    <div className='to_home'>
      <a href="#home" onClick={()=> setActive('#home') } className={active === '#home' ? 'active' : ''}  > <SiHomeassistant className='to_home_icon' /> </a>
    </div>
  )
}

export default Nav
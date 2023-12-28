import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Layout() {
  return (
    <>
      <header class="d-flex justify-content-center py-3 mb-3" style={{marginTop: '-30px'}}>  
        <ul class="nav nav-pills " >
          <li class="nav-item"><Link to="/starters" class="nav-link">Starters</Link></li>
          <li class="nav-item"><Link to="/breakfast" class="nav-link">Breakfast</Link></li>
          <li class="nav-item"><Link to="/lunch" class="nav-link">Lunch</Link></li>
          <li class="nav-item"><Link to="/dinner" class="nav-link">Dinner</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Layout
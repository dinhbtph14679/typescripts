import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

type Props = {}

const WebsiteLayouts = (props: Props) => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
        
            
        </footer>
    </div>
  )
}

export default WebsiteLayouts
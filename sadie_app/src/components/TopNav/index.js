import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

function TopNav() {
    const [ pageTitle, setPageTitle ] = useState('')
    const navigate = useNavigate()

    const updatePageTitle = ({title, route}) => {
        setPageTitle(title)
        navigate(route)
    }

    return (
        <div>
            <div className='nav-container'>
            <div className='button' onClick={() => updatePageTitle({title: '', route: '/home'})}>Home</div>
            <div className='button' onClick={() => updatePageTitle({title: 'About Me', route: '/about'})}>About Me</div>
            <div className='button' onClick={() => updatePageTitle({title: 'Services', route: '/services'})}>Services</div>
            <div className='button' onClick={() => updatePageTitle({title: 'Schedule Meet + Greet', route: '/contact'})}>Contact Me</div>
            </div>
            <div>{pageTitle}</div>
        </div>
    )
}

export default TopNav
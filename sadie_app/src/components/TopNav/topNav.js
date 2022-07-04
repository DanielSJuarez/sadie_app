import { useNavigate } from 'react-router-dom'
import './index.css'

function TopNav() {
    const navigate = useNavigate()

    return (
        <div>I am the nav
            <div className='nav-container'>
            <div className='button' onClick={() => navigate('/home')}>Home</div>
            <div className='button' onClick={() => navigate('/about')}>About</div>
            <div className='button' onClick={() => navigate('/pricing')}>Pricing</div>
            </div>
        </div>
    )
}

export default TopNav
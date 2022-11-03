//import logo from '../images/logo.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faPlus } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav__logo-container">
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className="nav__controls-container">
                <div className="nav__icon" onClick={() => navigate('/ticket')}><FontAwesomeIcon icon={faPlus} /></div>
                <div className="nav__icon" onClick={() => navigate('/')}><FontAwesomeIcon icon={faBackward}/></div>
            </div>
        </nav>
    )
}

export default Navbar;
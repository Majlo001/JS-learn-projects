import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = ({priority}) => {
    return (
        <div className="priority__container">
            <span style={{color: priority >= 1? 'rgb(255, 174, 26)' : ''}}><FontAwesomeIcon icon={faStar}/></span>
            <span style={{color: priority >= 2? 'rgb(255, 174, 26)' : ''}}><FontAwesomeIcon icon={faStar}/></span>
            <span style={{color: priority >= 3? 'rgb(255, 174, 26)' : ''}}><FontAwesomeIcon icon={faStar}/></span>
            <span style={{color: priority >= 4? 'rgb(255, 174, 26)' : ''}}><FontAwesomeIcon icon={faStar}/></span>
            <span style={{color: priority >= 5? 'rgb(255, 174, 26)' : ''}}><FontAwesomeIcon icon={faStar}/></span>
        </div>
    )
}

export default PriorityDisplay;
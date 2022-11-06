import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const DeleteBlock = () => {
    
    const delTicket = () => {
        alert('Delete')
    }

    return (
        <div className="delete__container">
            <div className="delete__icon" onClick={delTicket}>
                <FontAwesomeIcon icon={faX}/>
            </div>
        </div>
    )
}

export default DeleteBlock;
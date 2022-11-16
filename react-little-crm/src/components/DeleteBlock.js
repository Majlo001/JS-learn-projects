import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const DeleteBlock = ({ documentID }) => {
    
    const delTicket = async () => {
        const response = await axios.delete(`http://127.0.0.1:8800/tickets/${documentID}`)
        
        if (response.status === 200){
            window.location.reload();
        }
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
import { Link } from 'react-router-dom';
import AvatarDisplay from './AvatarDisplay.js';
import StatusDisplay from './StatusDisplay.js';
import PriorityDisplay from './PriorityDisplay.js';
import ProgressDisplay from './ProgressDisplay.js';
import DeleteBlock from './DeleteBlock.js';

const TicketCard = ({color, ticket}) => {
    return (
        <div className="ticket-card">
            <div className="ticket-card__color" style={{backgroundColor: color}}></div>

            <Link to={`/ticket/${ticket.documentID}`} id="link">
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket}/>
                <StatusDisplay status={ticket.status}/>
                <PriorityDisplay priority={ticket.priority}/>
                <ProgressDisplay progress={ticket.progress}/>
            </Link>
            <DeleteBlock documentID={ticket.documentID}/>
        </div>
    )
}

export default TicketCard;
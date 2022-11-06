import blankAvatar from "../images/blank-profile-picture.png";

const AvatarDisplay = ({ticket}) => {
    return (
        <div className="avatar__container">
            <div className="avatar__img-container">
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={ticket.owner + ''}/>
            </div>
        </div>
    )
}

export default AvatarDisplay;
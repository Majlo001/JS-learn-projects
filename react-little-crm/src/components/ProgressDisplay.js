const ProgressDisplay = ({progress}) => {
    return (
        <div className="progress__container">
            <div className="progress__bar">
                <span
                    style={{ width: progress + '%'}}
                    className="progress__indicator"
                ></span>
            </div>
        </div>
    )
}

export default ProgressDisplay;
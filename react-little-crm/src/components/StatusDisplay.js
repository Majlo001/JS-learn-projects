const StatusDisplay = ({status}) => {
    const colorStatus = {
        "to be done": "#fff262",
        "done": "#87ffa1",
        "working on it": "#ffbf00",
        "stuck": "#ff3333",
    }

    const getColor = (status) => {
        return colorStatus[status]
    }


    return (
        <div className="status__container" style={{ backgroundColor: getColor(status)}}>
            {status}
        </div>
    )
}

export default StatusDisplay;
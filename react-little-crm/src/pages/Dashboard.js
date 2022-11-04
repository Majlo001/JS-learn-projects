import TicketCard from '../components/TicketCard';

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2023',
            color: 'red',
            title: 'NFT will break the world.',
            avatar: '',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Description here.',
            timestamp: '2023-01-23T09:30:00+0000'
        },
        {
            category: 'Q3 2023',
            color: 'blue',
            title: 'NFT Blue',
            avatar: '',
            status: 'done',
            priority: 2,
            progress: 55,
            description: 'Description here.',
            timestamp: '2023-08-23T09:30:00+0000'
        },
        {
            category: 'Q1 2023',
            color: 'green',
            title: 'NFT Green',
            avatar: '',
            status: 'done',
            priority: 1,
            progress: 15,
            description: 'Description here.',
            timestamp: '2023-01-23T09:30:00+0000'
        },
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    return (
        <div className="dashboard">
            <h1>My Projects</h1>

            <div className="dashboard__ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, ticketindex) => (
                                <TicketCard
                                    id={ticketindex}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;
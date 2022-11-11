import TicketCard from '../components/TicketCard.js';

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2023',
            color: 'red',
            title: 'NFT will break the world.',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZl_8G0K5ilgQOa3o7b2Ear7UdM1LwlgkDvw&usqp=CAU',
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
            status: 'to be done',
            priority: 2,
            progress: 55,
            description: 'Description here.',
            timestamp: '2023-08-23T09:30:00+0000'
        },
        {
            category: 'Q1 2023',
            color: 'green',
            title: 'NFT Green',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiof_lqI87o1dB6wFsyoJirSiS3ZAwv61GA&usqp=CAU',
            status: 'stuck',
            priority: 1,
            progress: 15,
            description: 'Description here.',
            timestamp: '2023-01-23T09:30:00+0000'
        },
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    const colorCategories = [
        '#93c47d',
        '#f6b26b',
        '#8e7cc3',
        '#F1E398',
        '#e06666',
        '#6fa8dc'
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
                                    color={colorCategories[categoryIndex] || colorCategories[0]}
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
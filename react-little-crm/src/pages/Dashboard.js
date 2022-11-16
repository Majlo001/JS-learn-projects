import {useState, useEffect, useContext} from 'react';
import TicketCard from '../components/TicketCard.js';
import axios from 'axios';
import CategoriesContext from '../context.js';

const Dashboard = () => {
    const [tickets, setTickets] = useState(null)
    const {categories, setCategories} = useContext(CategoriesContext)

    useEffect(() => {
        async function fetchAPI() {
            const response = await axios.get('http://127.0.0.1:8800/tickets')

            const dataObject = response.data.data

            const keyArray = Object.keys(dataObject)
            const dataArray = Object.keys(dataObject).map((key) => dataObject[key])
            const formattedArray = []
            keyArray.forEach((key, index) => {
                const formattedData = { ...dataArray[index]}
                formattedData['documentID'] = key
                formattedArray.push(formattedData)
            })
            setTickets(formattedArray)
        }
        fetchAPI()
    }, [])

    useEffect(() => {
        setCategories([...new Set(tickets?.map(({category}) => category))])
    }, [tickets])

    const colorCategories = [
        '#93c47d',
        '#f6b26b',
        '#8e7cc3',
        '#F1E398',
        '#e06666',
        '#6fa8dc'
    ]

    const uniqueCategories = [...new Set(tickets?.map(({category}) => category))]

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
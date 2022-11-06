import {useState} from 'react'

const TicketPage = () => {
    const editMode = false;
    const [formData, setFormData] = useState({
        status: 'to be done',
        color: 'green',
        priority: 0,
        progress: 0,
        timestamp: new Date().toISOString(),
    })

    const uniqueCategories = ['test1','test2','test3']

    const handleSubmit = () => {
        alert('Submit');
    }
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <div className="ticket__container">
            <h1>{editMode ? 'Update your Ticket' : 'Create new Ticket'}</h1>
            <div className="ticket__wrapper">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            onChange={handleChange}
                            value={formData.category}
                            >
                               {uniqueCategories?.map((category, _index) => (
                                    <option key={_index} value={category}>{category}</option>
                               ))} 
                            </select>
                        <label htmlFor="new_category">New Category</label>
                        <input
                            id="new_category"
                            name="category"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.category}
                        />

                        <label>Priority</label>
                        <div className="ticket__multiple-input">
                            {Array.apply(null, { length: 5 }).map((e, i) => (
                                <>
                                    <input
                                        id={`priority-${i+1}`}
                                        name="priority"
                                        type="radio"
                                        onChange={handleChange}
                                        value={`${i+1}`}
                                        //checked={formData.priority === i+1}
                                    />
                                    <label htmlFor={`priority-${i+1}`}>{i+1}</label>
                                </>
                            ))
                            }
                        </div>

                        {editMode && 
                            <>
                                <input
                                    id="progress"
                                    name="progress"
                                    type="range"
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                    value={formData.category}
                                />
                                <label htmlFor="range">Progress</label>
                            </>
                        }
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage;
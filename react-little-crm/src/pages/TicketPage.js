import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const TicketPage = () => {
    const editMode = false;
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        status: 'to be done',
        color: 'green',
        priority: 0,
        progress: 0,
        timestamp: new Date().toISOString(),
    })

    const uniqueCategories = ['test1','test2','test3']

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)

        if (!editMode) {
            const response = await axios.post('http://127.0.0.1:8800/tickets', {
                formData
            })

            console.log(response.status)
            const success = response.status === 200
            if (success) {
                navigate('/')
            }
        }
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

                                <label>Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option selected={formData.status === 'to be done'} value='to be done'>To be done</option>
                                    <option selected={formData.status === 'working on it'} value='working on it'>Working on it</option>
                                    <option selected={formData.status === 'done'} value='done'>Done</option>
                                    <option selected={formData.status === 'stuck'} value='stuck'>Stuck</option>
                                </select>
                            </>
                        }

                        <input type="submit"/>
                    </section>

                    <section>
                        <label htmlFor="owner">Owner</label>
                        <input
                            id="owner"
                            name="owner"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.owner}
                        />

                        <label htmlFor="avatar">Avatar</label>
                        <input
                            id="avatar"
                            name="avatar"
                            type="url"
                            onChange={handleChange}
                            value={formData.avatar}
                        />
                        <div className="ticket__image-preview">
                            {formData.avatar && (
                                <img src={formData.avatar} alt="Img preview" />
                            )}
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage;
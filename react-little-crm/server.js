import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

const PORT = 8800;
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const url = process.env.URL
const token = process.env.ASTRA_TOKEN



app.get('/tickets', async (req, res) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Cassandra-Token': token,
        'Content-type': 'application/json'
      }
    }
    try {
      const response = await axios(`${url}?page-size=20`, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
})
app.get('/tickets/:documentID', async (req, res) => {
  const id = req.params.documentID

  const options = {
      method: 'GET',
      headers: {
          Accepts: 'application/json',
          'X-Cassandra-Token': token,
          'Content-type': 'application/json'
      }
  }

  try {
      const response = await axios(`${url}/${id}`, options)
      res.status(200).json(response.data)
  } catch (err) {
      console.log(err)
      res.status(500).json({message: err})
  }
})


app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})



app.delete('/tickets/:documentID', async (req, res) => {
  const id = req.params.documentID

  const options = {
      method: 'DELETE',
      headers: {
          Accepts: 'application/json',
          'X-Cassandra-Token': token,
          'Content-type': 'application/json'
      }
  }

  try {
      const response = await axios(`${url}/${id}`, options)
      res.status(200).json(response.data)
  } catch (err) {
      console.log(err)
      res.status(500).json({message: err})
  }
})

app.put('/tickets/:documentID', async (req, res) => {
  const id = req.params.documentID
  const data = req.body.data

  const options = {
      method: 'PUT',
      headers: {
          Accepts: 'application/json',
          'X-Cassandra-Token': token,
          'Content-type': 'application/json'
      },
      data
  }

  try {
      const response = await axios(`${url}/${id}`, options)
      res.status(200).json(response.data)
  } catch (err) {
      console.log(err)
      res.status(500).json({message: err})
  }
})







app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})
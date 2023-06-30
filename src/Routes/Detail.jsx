import { CardContent, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentista, setDentista] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setDentista(res.data))
  }, [id])

  
  return (
    <div className='detail'>
   <h1  >Detail Dentist {id}</h1>
   <div className='card-detail'>  
   <h2>{dentista.name}</h2>
        <h3>{dentista.email}</h3>
        <h3>{dentista.phone}</h3>
        <h3>{dentista.website}</h3>

   </div>
     

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail
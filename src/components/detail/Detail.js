import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Detail.css';

const Detail = ({match}) => {
    const [user, setUser] = useState({});
    const [err, setErr] = useState("");
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
    .then(res => setUser(res.data)).catch(err => setErr(err.response.data))
        
            
   }, [match])
    return (
     <div className="container">
       <div className="card__container">
         <div className="card">
            <div className="card__content">
              <h3 class="card__header">{ user && user.username}</h3>
              <p>{ user && user.email}</p>
              <p>{ user && user.phone}</p>
              <p>{user && user.website}</p>
       <Link to="/"> <Button class="card__button" variant="primary">Go Back</Button></Link>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Detail

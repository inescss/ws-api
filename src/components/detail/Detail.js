import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Detail.css';
import { Spinner } from "react-bootstrap";
import { FaEnvelope, FaAddressCard } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { CgWebsitee } from 'react-icons/cg';
import { BiAt, BiAlignLeft} from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";

const Detail = ({match}) => {
    const [user, setUser] = useState({});
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
    .then(res => {setUser(res.data);setLoading(false)}).catch(err => setErr(err.response.data))
   ;
            
   },[match])
   if(loading){
    return(
      <Spinner animation="border" variant="dark" />
    )
}
    return (
     <div className="container">
       <div className="card__container">
         <div className="card">
            <div className="card__content">
              <h5>Detail:</h5>
              <p><FaEnvelope style={{color:"teal", marginRight:"10px" }} />{ user && user.email}</p>
              <p><AiFillPhone style={{color:"teal", marginRight:"10px"}}/>{ user && user.phone}</p>
              <p><BiAt style={{color:"teal", marginRight:"10px"}} />{user && user.website}</p>
              <p><FaAddressCard style={{color:"teal", marginRight:"10px"}}/>{`${user && user.address.street}`}</p>
              <p><BsBuilding style={{color:"teal", marginRight:"10px"}}/>{`${user && user.company.name}`}</p>
              <p><BiAlignLeft style={{color:"teal", marginRight:"10px"}}/>{`${user && user.company.catchPhrase}`}</p>
        </div>
        <Link to="/"> <Button class="card__button" variant="primary">Go Back</Button></Link>
        </div>
        </div>
        </div>
    )
}

export default Detail

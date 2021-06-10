import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./userCard/UserCard";


const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json()) 
      .then((json) => {
        setUsers(json);
        setLoading(false);
    }) 
    .catch((err) => console.log(err));
  }, []);
  if(loading){
      return(
        <Spinner animation="border" variant="dark" />
      )
  }
  return <div className='d-flex justify-content-around flex-wrap'>
      {
          users.map(user => <UserCard user={user} key={user.id}/>)
      }
  </div>;
};

export default UserList;
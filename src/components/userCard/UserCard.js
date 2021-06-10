import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
    <span className="profile">{user.name[0]}</span>
    <Card.Body>
      <Card.Title style={{color:"white"}}>{user.name}</Card.Title>
      <p style={{color:"white"}}>{user.username}</p>
      <p style={{color:"white"}}>{user.email}</p>
      <p style={{color:"white"}}>{user.phone}</p>
      <p style={{color:"white"}}>{`${user.address.street}`}</p>
   
      <Link to={`/profile/${user.id}`}><Button variant="primary">View Details</Button></Link>
    </Card.Body>
  </Card>

  );
};

export default UserCard;

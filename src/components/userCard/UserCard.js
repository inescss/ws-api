import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
    <span className="profile">{user.name[0]}</span>
    <Card.Body>
      <Card.Title style={{color:"white"}}><AiOutlineUser style={{color:"teal" , size:"2em"}}/>{user.name}</Card.Title>
      <p style={{color:"white" , textAlign:"left"}}>{user.username}</p>
      <p style={{color:"white", textAlign:"left"}}>{user.email}</p>
      <p style={{color:"white", textAlign:"left"}}>{user.phone}</p>
      <Link to={`/profile/${user.id}`}><Button variant="primary">View Details</Button></Link>
    </Card.Body>
  </Card>

  );
};

export default UserCard;

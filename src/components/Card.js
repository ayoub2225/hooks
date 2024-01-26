import Card from "react-bootstrap/Card";
import React from "react";

function MovieCard({ imgurl, title, description,rating }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgurl} style={{width:"100%", height:"350px",objectFit:"cover"}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Rating : {rating}</Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;

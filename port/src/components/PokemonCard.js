import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./Poke.css";

const PokemonCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.name.toUpperCase()}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PokemonCard;

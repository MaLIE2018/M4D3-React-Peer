import React from "react";
import Badge from "react-bootstrap/Badge";

//Create a component called MyBadge which receives a text and a color as props.
//This component should render a Badge react-bootstrap component with those properties.

const MyBadge = (props) => (
  <Badge variant={props.col} style={{ position: "relative" }}>
    {props.textBadge}
  </Badge>
);

export default MyBadge;

import React from "react";
import Alert from "react-bootstrap/Alert";

const Showalert = (props) => <Alert variant="danger">{props.alertText}</Alert>;

export default Showalert;

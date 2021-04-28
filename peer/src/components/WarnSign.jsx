import { Alert } from "react-bootstrap";

const WarnSign = (props) => {
  return <Alert variant='danger'>{props.message}</Alert>;
};

export default WarnSign;

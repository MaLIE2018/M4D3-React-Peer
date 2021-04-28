import { Badge } from "react-bootstrap";

const UseBadge = (props) => {
  return (
    <div>
      <h2>
        Example heading <Badge variant={props.color}>{props.text}</Badge>
      </h2>
    </div>
  );
};

export default UseBadge;

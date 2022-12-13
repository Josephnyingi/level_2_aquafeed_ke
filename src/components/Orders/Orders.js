import Card from "react-bootstrap/Card";
import aqua from "./images/aqua-group.png";
import salmon from "./images/optiline-salmon.png";
import unga from "./images/unga-fish.png";

const Orders = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant={salmon} src="salmon fish food" />
      <Card.Body>
        <Card.Title>Skrettine Optiline</Card.Title>
        <Card.Text>Ksh3,500.00</Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
  );
};

export default Orders;

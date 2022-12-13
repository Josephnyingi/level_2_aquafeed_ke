import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import aqua from "./images/aqua-group.png";
import salmon from "./images/optiline-salmon.png";
import unga from "./images/unga-fish.png";
import "./Orders.css";

const Orders = () => {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={salmon} />
        <Card.Body>
          <Card.Title>Skrettine Optiline</Card.Title>
          <Card.Text>Ksh3,500.00</Card.Text>
          <Button variant="primary">More details</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={aqua} />
        <Card.Body>
          <Card.Title>Aqua Tilapia Feed</Card.Title>
          <Card.Text>Ksh3,400.00</Card.Text>
          <Button variant="primary">More details</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={unga} className="unga-img" />
        <Card.Body>
          <Card.Title>Unga Fiish Feed</Card.Title>
          <Card.Text>Ksh3,000.00</Card.Text>
          <Button variant="primary">More details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Orders;

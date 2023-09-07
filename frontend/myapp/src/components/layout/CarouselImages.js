import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function CarouselImages() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="/images/1.jpg" fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/images/2.jpg" fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/images/1.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselImages;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-important">
      <Container>
        <Row>
          <Col className="text-center py-3 ">Copyright &copy; YCommerce</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

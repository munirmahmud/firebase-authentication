import { Col, Container, Row } from "react-bootstrap";
import Signup from "./components/Signup";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Signup />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

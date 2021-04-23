import { Col, Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Switch>
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

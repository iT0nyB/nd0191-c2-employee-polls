import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Row>
      <Container className="text-center">
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </Container>
    </Row>
  );
};

export default ErrorPage;

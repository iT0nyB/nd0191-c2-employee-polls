import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthedUser from "./AuthedUser";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Employee Polls</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/leaderboard">
                <Nav.Link data-testid="leaderboard-link">Leaderboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add" data-testid="question-link">
                <Nav.Link>New</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AuthedUser />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default NavigationBar;

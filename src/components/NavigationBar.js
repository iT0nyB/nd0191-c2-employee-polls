import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthedUser from "./AuthedUser";

const NavigationBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Employee Polls</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="#add">New</Nav.Link>
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

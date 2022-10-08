import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import setAuthedUser from "../actions/authedUser";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";

const Login = ({ users, dispatch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const validate = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      users.find((user) => user.id === username) &&
      users.find((user) => user.password === password)
    ) {
      dispatch(setAuthedUser(username));
      const path = location.pathname;
      if (path.includes("login")) {
        navigate("/");
      } else {
        navigate(path);
      }
    } else {
      alert("Username or Password incorrect");
    }
  };

  return (
    <Container>
      <div className="row">
        <div className="text-center">
          <img
            src="/assets/images/logo192.png"
            alt="Employee Polls Logo"
            width="150"
            className="mx-auto"
          />
          <Form className="w-75 mx-auto">
            <h3>Login to the Employee Polls</h3>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                data-testid="username"
                type="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                data-testid="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                onClick={handleLogin}
                data-testid="login-button"
                disabled={!validate()}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((id) => users[id]),
  };
};

export default connect(mapStateToProps)(Login);

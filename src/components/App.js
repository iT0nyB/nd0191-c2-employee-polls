import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";
import Login from "./Login";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);
  return (
    <Container className="p-3">
      {props.authedUser === null ? (
        <Login />
      ) : (
        <div>
          <NavigationBar />
          <Dashboard />
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);

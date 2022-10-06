import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Container from "react-bootstrap/Container";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);
  return (
    <Container className="p-3">
      <Dashboard />
    </Container>
  );
};

export default connect()(App);

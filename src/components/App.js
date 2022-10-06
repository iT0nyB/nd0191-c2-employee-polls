import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);
  return (
    <Container className="p-3">
      <NavigationBar />
      <Dashboard />
    </Container>
  );
};

export default connect()(App);

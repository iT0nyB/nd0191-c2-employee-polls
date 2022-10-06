import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);
  return (
    <div>
      <h3>Starting point</h3>
    </div>
  );
};

export default connect()(App);

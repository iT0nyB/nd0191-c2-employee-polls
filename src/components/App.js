import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import ErrorPage from "./ErrorPage";
import LeaderBoard from "./LeaderBoard";

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
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/leaderboard" element={<LeaderBoard />} />
            <Route exact path="/add" element={<NewQuestion />} />
            <Route path="/questions/:question_id" element={<Question />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);

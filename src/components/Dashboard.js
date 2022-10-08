import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import QuestionsContainer from "./QuestionsContainer";

const Dashboard = (props) => {
  const newQuestions = props.newQuestions;
  const doneQuestions = props.doneQuestions;

  return (
    <Row>
      <Container className="mx-auto">
        <Tabs defaultActiveKey="new" id="questions-container" className="mb-3">
          <Tab eventKey="new" title="New Questions">
            <QuestionsContainer
              heading="New Questions"
              questionIds={newQuestions}
            />
          </Tab>
          <Tab eventKey="done" title="Done Questions">
            <QuestionsContainer heading="Done" questionIds={doneQuestions} />
          </Tab>
        </Tabs>
      </Container>
    </Row>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  const user = users[authedUser];
  return {
    questions: Object.values(questions),
    doneQuestions: Object.keys(questions)
      .filter((question) => Object.keys(user.answers).includes(question))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    newQuestions: Object.keys(questions)
      .filter((question) => !Object.keys(user.answers).includes(question))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    user,
  };
};

export default connect(mapStateToProps)(Dashboard);

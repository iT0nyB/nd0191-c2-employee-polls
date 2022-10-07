import { connect } from "react-redux";
import QuestionsContainer from "./QuestionsContainer";

const Dashboard = (props) => {
  const newQuestions = props.newQuestions;
  const doneQuestions = props.doneQuestions;

  return (
    <div className="row">
      <div className="w-75 mx-auto">
        <QuestionsContainer
          heading="New Questions"
          questionIds={newQuestions}
        />
        <QuestionsContainer heading="Done" questionIds={doneQuestions} />
      </div>
    </div>
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

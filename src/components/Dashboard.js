import { connect } from "react-redux";
import QuestionsContainer from "./QuestionsContainer";

const Dashboard = (props) => {
  const questionIds = props.questionIds;
  return (
    <div className="row">
      <div className="w-75 mx-auto">
        <QuestionsContainer heading="New Questions" questionIds={questionIds} />
        <QuestionsContainer heading="Done" questionIds={[]} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);

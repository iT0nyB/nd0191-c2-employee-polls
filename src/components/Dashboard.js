import { connect } from "react-redux";
import QuestionsContainer from "./QuestionsContainer";

const Dashboard = (props) => {
  const questionIds = props.questionIds;
  return (
    <div>
      <QuestionsContainer heading="New Questions" questionIds={questionIds} />
      <QuestionsContainer heading="Done" questionIds={questionIds} />
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions),
});

export default connect(mapStateToProps)(Dashboard);

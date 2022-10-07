import Alert from "react-bootstrap/Alert";

const QuestionStats = ({ stats, myAnswer }) => {
  let style = "danger";
  if (myAnswer) style = "success";
  return (
    <Alert variant={style}>
      {myAnswer && <Alert.Heading>You voted for this</Alert.Heading>}
      {stats.percent}% ({stats.num}) of your coworkers {myAnswer && <b>also</b>}{" "}
      voted for this!
    </Alert>
  );
};

export default QuestionStats;

import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Question = (props) => {
  if (props.question === null) {
    return <p>This Question doesn't exist</p>;
  }

  const { name, timestamp, avatar } = props.question;

  return (
    <Card
      className="text-center mx-auto my-auto mb-3"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>
          <img src={avatar} alt={`Avatar of ${name}`} width="45" />
          {name}
        </Card.Title>
        <Card.Text>{formatDate(timestamp)}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {" "}
        <div className="d-grid gap-2">
          <Button variant="outline-success">Show</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: formatQuestion(question, users[question.author]),
  };
};

export default connect(mapStateToProps)(Question);

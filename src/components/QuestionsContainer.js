import Card from "react-bootstrap/Card";
import Question from "./Question";

const QuestionsContainer = ({ heading, questionIds }) => {
  return (
    <Card className="mb-5">
      <Card.Header as="h5" className="text-center">
        {heading}
      </Card.Header>
      <Card.Body>
        <div className="row">
          {questionIds.map((id) => (
            <Question key={id} id={id} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionsContainer;

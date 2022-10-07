import Card from "react-bootstrap/Card";
import QuestionCard from "./QuestionCard";

const QuestionsContainer = ({ heading, questionIds }) => {
  return (
    <Card className="mb-5">
      <Card.Header as="h5" className="text-center">
        {heading}
      </Card.Header>
      <Card.Body>
        <div className="row">
          {questionIds.map((id) => (
            <QuestionCard key={id} id={id} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuestionsContainer;

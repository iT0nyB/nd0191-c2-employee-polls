import Card from "react-bootstrap/Card";
import QuestionCard from "./QuestionCard";

const QuestionsContainer = ({ heading, questionIds }) => {
  return (
    <Card border="light" className="mb-5">
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

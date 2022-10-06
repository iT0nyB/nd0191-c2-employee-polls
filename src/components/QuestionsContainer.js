import Card from "react-bootstrap/Card";

const QuestionsContainer = ({ heading, questionIds }) => {
  return (
    <Card className="mb-5">
      <Card.Header as="h5" className="text-center">
        {heading}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {questionIds.map((id) => (
            <li key={id}>Question ID: {id}</li>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuestionsContainer;

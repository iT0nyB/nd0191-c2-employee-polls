import Card from "react-bootstrap/Card";

const QuestionsContainer = ({ heading, questionIds }) => {
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        {heading}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {questionIds.map((id) => (
            <li key={id}>
              <div>Question ID: {id}</div>
            </li>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuestionsContainer;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { handleAddQuestion } from "../actions/questions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import { useState } from "react";
import { connect } from "react-redux";

const NewQuestion = (props) => {
  const { authedUser, dispatch } = props;
  const [show, setShow] = useState(false);

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const validate = () => {
    return optionOneText.length > 0 && optionTwoText.length > 0;
  };

  const question = {
    optionOneText,
    optionTwoText,
    author: authedUser,
  };

  const handleNewQuestion = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(question));
    setOptionOneText("");
    setOptionTwoText("");
    setShow(true);
  };

  return (
    <Container>
      <div className="row">
        <div className="text-center">
          <Form className="w-75 mx-auto">
            <h3>Would You Rather</h3>
            <p className="muted">Create your own poll</p>
            <Form.Group className="mb-3" controlId="formBasicOptionOne">
              <Form.Label>OptionOne</Form.Label>
              <Form.Control
                type="username"
                placeholder="First Option"
                value={optionOneText}
                onChange={(e) => setOptionOneText(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicOptionTwo">
              <Form.Label>OptionTwo</Form.Label>
              <Form.Control
                type="optionTwoText"
                placeholder="Second Option"
                value={optionTwoText}
                onChange={(e) => setOptionTwoText(e.target.value)}
              />
            </Form.Group>
            <div>
              <Button
                variant="primary"
                type="submit"
                onClick={handleNewQuestion}
                disabled={!validate}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Row>
        <Col xs={6}>
          <ToastContainer className="p-3" position="top-end">
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="me-auto">Employee Polls</strong>
                <small>a few seconds ago</small>
              </Toast.Header>
              <Toast.Body>Woohoo, you created a new poll!</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
        <Col xs={6}></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser.id === "" ? null : authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);

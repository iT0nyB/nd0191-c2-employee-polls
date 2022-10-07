import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { connect } from "react-redux";

const NewQuestion = (props) => {
  const { authedUser, dispatch } = props;
  const navigate = useNavigate();

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
    navigate("/");
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
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser.id === "" ? null : authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);

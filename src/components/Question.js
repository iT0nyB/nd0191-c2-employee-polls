import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";

import QuestionStats from "./QuestionStats";
import { handleSaveAnswer } from "../actions/shared";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Question = (props) => {
  const { question_id } = useParams();

  const { dispatch, users, authedUser, questions } = props;

  const [answered, setAnswered] = useState(false);

  const navigate = useNavigate();
  const question = questions[question_id];

  useEffect(() => {
    const loggedIn = users[authedUser];
    const myAnswers = loggedIn.answers;
    const loggedInAnswer = Object.keys(myAnswers)
      .filter((answer) => {
        return answer === question_id;
      })
      .map((answer) => {
        return myAnswers[answer];
      });
    if (loggedInAnswer.length > 0) {
      setAnswered(true);
    }
  }, [authedUser, users, question_id, navigate, question]);

  if (!question) {
    return <Navigate to="*" />;
  }

  const author = users[question.author];

  const optionOneStats = () => {
    const num = question.optionOne.votes.length;
    const percent = (
      (question.optionOne.votes.length /
        (question.optionOne.votes.length + question.optionTwo.votes.length)) *
      100
    ).toFixed(2);
    return {
      percent,
      num,
    };
  };

  const optionTwoStats = () => {
    const num = question.optionTwo.votes.length;
    const percent = (
      (question.optionTwo.votes.length /
        (question.optionOne.votes.length + question.optionTwo.votes.length)) *
      100
    ).toFixed(2);
    return {
      percent,
      num,
    };
  };

  const handleAns = (ans) => {
    const answerDTO = {
      authedUser: authedUser,
      qid: question_id,
      answer: ans,
    };
    dispatch(handleSaveAnswer(answerDTO));
  };
  return (
    question && (
      <Row>
        <Container className="w-75 mx-auto">
          <CardGroup>
            <Card>
              <Card.Body className="text-center">
                <h3>Poll by {author.id}</h3>
                <img src={author.avatarURL} alt="nothing" width="200" />
                <h3>Would You Rather?</h3>
                <Row>
                  <Col xs={6}>
                    <Card>
                      <Card.Body>
                        {question.optionOne.text}
                        {!answered && (
                          <div className="d-grid gap-2 mt-2">
                            <Button
                              variant="success"
                              onClick={() => handleAns("optionOne")}
                            >
                              Click
                            </Button>
                          </div>
                        )}
                        {answered && (
                          <QuestionStats
                            myAnswer={question.optionOne.votes.includes(
                              authedUser
                            )}
                            stats={optionOneStats()}
                          />
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6}>
                    <Card>
                      <Card.Body>
                        {question.optionTwo.text}
                        {!answered && (
                          <div className="d-grid gap-2 mt-2">
                            <Button
                              variant="success"
                              onClick={() => handleAns("optionTwo")}
                            >
                              Click
                            </Button>
                          </div>
                        )}
                        {answered && (
                          <QuestionStats
                            myAnswer={question.optionTwo.votes.includes(
                              authedUser
                            )}
                            stats={optionTwoStats()}
                          />
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </Row>
    )
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  return {
    authedUser,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(Question);

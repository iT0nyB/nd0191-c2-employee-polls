import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const saveUserQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question).then((question) => {
      dispatch(saveUserQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
};

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
};

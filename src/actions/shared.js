import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, addAnswerToUser } from "./users";
import {
  receiveQuestions,
  saveQuestionAnswer as saveAnswer,
} from "./questions";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
};

export const handleSaveAnswer = (answer) => {
  return (dispatch) => {
    saveQuestionAnswer(answer)
      .then(() => {
        dispatch(saveAnswer(answer));
        dispatch(addAnswerToUser(answer));
      })
      .catch((e) => {
        console.log("Answer not saved: ", e);
        alert("Answer not saved.");
      });
  };
};

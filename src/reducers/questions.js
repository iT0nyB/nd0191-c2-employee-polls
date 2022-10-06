import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        ...questions,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, id, answer } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
};

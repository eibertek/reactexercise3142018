import {FETCH_MAILS, FETCH_PEOPLE, LOAD_PEOPLE} from "../actions/index";

export const mailReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MAILS:
      console.log(action);
      return { ...state, content: action.data};
    case FETCH_PEOPLE:
    case LOAD_PEOPLE:
      console.log(action.data);
      return { ...state, people: action.data};
    default:
      return state
  }
}

export default mailReducer;
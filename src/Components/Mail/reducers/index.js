import {
  FETCH_MAILS, FETCH_DETAILS, LOAD_DETAILS, FETCH_MAILS_LOADING, FETCH_DETAILS_LOADING,
  FETCH_DETAILS_SUCCESS, FETCH_MAILS_SUCCESS, FETCH_MAILS_FAILED, FETCH_DETAILS_FAILED
} from "../actions/index";

export const mailReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MAILS_LOADING:
      return { ...state, isLoadingMails: true};
    case FETCH_MAILS_SUCCESS:
      return { ...state, isLoadingMails: false};
    case FETCH_MAILS:
      return { ...state, content: action.data};
    case FETCH_MAILS_FAILED:
      console.log('It was an error on the call', action.err);
      return { ...state, isLoadingMails: false};
    case FETCH_DETAILS_FAILED:
      console.log('It was an error on the call', action.err);
      return { ...state, isLoadingDetails: false};
    case FETCH_DETAILS_LOADING:
      return { ...state, isLoadingDetails: true};
    case FETCH_DETAILS_SUCCESS:
      return { ...state, isLoadingDetails: false};
    case FETCH_DETAILS:
    case LOAD_DETAILS:
      return { ...state, details: action.data};
    default:
      return state
  }
}

export default mailReducer;

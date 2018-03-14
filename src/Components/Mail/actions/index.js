export const FETCH_MAILS_LOADING = '[MAILS][RUN] get all mails from service - loading';
export const FETCH_MAILS = '[MAILS][FETCH] get all mails from service';
export const FETCH_MAILS_SUCCESS = '[MAILS][RUN] get all mails from service - SUCCESS';
export const FETCH_MAILS_FAILED = '[MAILS][RUN] get all mails from service - FAILED';
export const LOAD_MAILS = '[MAILS][LOAD] Load mails to Store';
export const FETCH_DETAILS = '[DETAILS][FETCH] get Details from one mail';
export const FETCH_DETAILS_LOADING = '[DETAILS][FETCH] get People Data - LOADING';
export const FETCH_DETAILS_SUCCESS = '[DETAILS][FETCH] get People Data - SUCCESS';
export const FETCH_DETAILS_FAILED = '[DETAILS][FETCH] get People Data - FAILED';
export const LOAD_DETAILS = '[DETAILS][LOAD] load Mail Data to store';

// Action FetchMails
export const fetchMails = (data) => {
  return {type:FETCH_MAILS, data};
}


// Action FetchDetails
export const fetchDetails = (data) => {
  return {type:FETCH_DETAILS, data};
}

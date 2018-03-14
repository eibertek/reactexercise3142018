import mock from '../../../Services/mock';

export const FETCH_MAILS = '[MAILS][FETCH] get all mails from service';
export const LOAD_MAILS = '[MAILS][LOAD] Load mails to Store';
export const FETCH_PEOPLE = '[PEOPLE][FETCH] get People Data';
export const LOAD_PEOPLE = '[PEOPLE][LOAD] load People Data to store';

// Action FetchMails
export const fetchMails = (data) => {
  return {type:FETCH_MAILS, data};
}


// Action FetchPeopleData
export const fetchPeople = (data) => {
  return {type:FETCH_PEOPLE, data};
}

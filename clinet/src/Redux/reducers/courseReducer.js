import { CREATE_COURSE } from "../actions/Types";
export default function createReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

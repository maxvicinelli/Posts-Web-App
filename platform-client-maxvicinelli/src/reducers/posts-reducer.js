import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      console.log(action.payload);
      return { all: action.payload, current: null };
    case ActionTypes.FETCH_POST:
      return { all: null, current: action.payload };
    default:
      return state;
  }
};

export default PostReducer;

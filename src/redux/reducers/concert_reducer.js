import * as types from "../actions/action-types";

const defaultState = {
  loading: false,
  error: null,
  concerts:[]
}

export default function concertReducer(state = defaultState, action) {
  switch (action.type) {
    case types.CONCERTS_LOADING: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case types.CONCERTS_SUCCESSFULL: {
      return Object.assign({}, state, {
        loading: false,
        concerts: action.payload,
        error: null
      });
    }
    case types.CONCERTS_FAILED: {
      return Object.assign({}, state, {
        loading: false,
        concerts: null,
        error: {
          statusCode: action.error.status,
          body: action.error.message || action.error.response.body
        }
      });
    }
    default: {
      return state;
    }
  }
}

import * as types from '../actions/action-types';

const defaultState = {
  bands: [],
  loading: false,
  error: null,
  selected:[]
};

export default function bandReducer(state = defaultState, action) {
  switch (action.type) {
    case types.BANDS_LOADING: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case types.BANDS_SUCCESSFULL: {
      return Object.assign({}, state, {
        loading: false,
        bands: action.payload,
        error: null
      });
    }
    case types.BANDS_FAILED: {
      return Object.assign({}, state, {
        loading: false,
        bands: null,
        error: {
          statusCode: action.error.status,
          body: action.error.message || action.error.response.body
        }
      });
    }
    case types.BAND_SELECTED: {
      return Object.assign({}, state, {
        selected : [...state.selected,action.payload]
      });
    }
    default: {
      return state;
    }
  }
}

import * as types from './action-types';
import { getConcerts } from '../api';

const getConcertsList = () => dispatch => {
  dispatch({
    type: types.CONCERTS_LOADING
  });
  return getConcerts().then(
    concerts => {
      dispatch({
        type: types.CONCERTS_SUCCESSFULL,
        payload:concerts
      });
    },
    err => {
      dispatch({
        type: types.CONCERTS_FAILED,
        error: err
      });
    }
  );
};

export { getConcertsList };

export default getConcertsList;

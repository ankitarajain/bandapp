import * as types from './action-types';
import { getBands } from '../api';

const getBandList = () => dispatch => {
  dispatch({
    type: types.BAND_LOADING
  });
  return getBands().then(
    bands => {
      dispatch({
        type: types.BAND_SUCCESSFULL,
        payload:bands
      });
    },
    err => {
      dispatch({
        type: types.BAND_FAILED,
        error: err
      });
    }
  );
};

export { getBandList };

export default getBandList;

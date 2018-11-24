import * as types from './action-types';
import { getBands } from '../api';

const getBandList = () => dispatch => {
  dispatch({
    type: types.BANDS_LOADING
  });
  return getBands().then(
    bands => {
      debugger;
      dispatch({
        type: types.BANDS_SUCCESSFULL,
        payload:bands
      });
    },
    err => {
      debugger;
      dispatch({
        type: types.BANDS_FAILED,
        error: err
      });
    }
  );
};

export { getBandList };

export default getBandList;

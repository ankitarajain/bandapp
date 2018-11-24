import * as types from './action-types';
import { getBands } from '../api';

const getBandList = () => dispatch => {
  dispatch({
    type: types.BANDS_LOADING
  });
  return getBands().then(
    bands => {
      dispatch({
        type: types.BANDS_SUCCESSFULL,
        payload:bands
      });
    },
    err => {
      dispatch({
        type: types.BANDS_FAILED,
        error: err
      });
    }
  );
};

const selectBand = (id) => dispatch =>{
  dispatch({
    type: types.BAND_SELECTED,
    payload:id
  });
}
export { getBandList,selectBand };

export default getBandList;

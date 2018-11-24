import * as types from './action-types';
import { getBands,setFavBands } from '../api';

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
const setFavBand = (ids) => dispatch => {
  dispatch({
    type: types.FAV_BAND_STARTED
  });
  return setFavBands(ids).then(
    bands => {
      dispatch({
        type: types.FAV_BAND_SUBMITTED,
        payload:bands
      });
    },
    err => {
      dispatch({
        type: types.FAV_BAND_FAILED,
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

export { getBandList,setFavBand,selectBand };

export default getBandList;

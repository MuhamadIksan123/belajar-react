import {
  START_FETCHING_ORGANIZERS,
  SUCCESS_FETCHING_ORGANIZERS,
  ERROR_FETCHING_ORGANIZERS,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';
import { clearNotif } from '../notif/actions';

let debouncedFetchOrganizers = debounce(getData, 1000);

// START
export const startFetchingOrganizers = () => {
  return {
    type: START_FETCHING_ORGANIZERS,
  };
};

// SUCCESS
export const successFetchingOrganizers = ({ organizers }) => {
  return {
    type: SUCCESS_FETCHING_ORGANIZERS,
    organizers,
  };
};

export const errorFetchingOrganizers = () => {
  return {
    type: ERROR_FETCHING_ORGANIZERS,
  };
};

export const fetchOrganizers = () => {
  return async (dispatch) => {
    dispatch(startFetchingOrganizers());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 3000);

      let res = await debouncedFetchOrganizers('/cms/users');

      console.log(res.data.data);

      dispatch(
        successFetchingOrganizers({
          organizers: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingOrganizers());
    }
  };
};

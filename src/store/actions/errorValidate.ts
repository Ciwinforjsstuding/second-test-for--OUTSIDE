import { Dispatch } from 'redux';

import {
  ErrorValidateAction,
  ErrorValidateActionType,
} from '../../types/errorValid';

export const sendValidateError = (titleError: string) => {
  return async (dispatch: Dispatch<ErrorValidateAction>) => {
    dispatch({
      type: ErrorValidateActionType.SET_ERROR_VALIDATE,
      payload: titleError,
    });
    setTimeout(
      () =>
        dispatch({
          type: ErrorValidateActionType.RESET_ERROR_VALIDATE,
        }),
      2000
    );
  };
};

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
    // что бы наш error alert исчезал через 2s
    setTimeout(
      () =>
        dispatch({
          type: ErrorValidateActionType.RESET_ERROR_VALIDATE,
        }),
      2000
    );
  };
};

export const closeErrorAlertAction = () => ({
  type: ErrorValidateActionType.RESET_ERROR_VALIDATE,
});

import {
  ErrorValidateAction,
  ErrorValidateActionType,
  IErrorValidateReducer,
} from '../../types/errorValid';

const initiallState = {
  haveValidError: false,
  errorList: [],
};

export const errorValidReducer = (
  state = initiallState,
  action: ErrorValidateAction
): IErrorValidateReducer => {
  if (action.type === ErrorValidateActionType.SET_ERROR_VALIDATE) {
    return {
      haveValidError: true,
      errorList: [...state.errorList, action.payload],
    };
  }
  if (action.type === ErrorValidateActionType.RESET_ERROR_VALIDATE) {
    return {
      haveValidError: false,
      errorList: [],
    };
  }
  return state;
};

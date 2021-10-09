export enum ErrorValidateActionType {
  RESET_ERROR_VALIDATE = 'RESET_ERROR_VALIDATE',
  SET_ERROR_VALIDATE = 'SET_ERROR_VALIDATE',
}

interface IResetErrorValidate {
  type: ErrorValidateActionType.RESET_ERROR_VALIDATE;
}

interface ISetErrorValidate {
  type: ErrorValidateActionType.SET_ERROR_VALIDATE;
  payload: string;
}

export type ErrorValidateAction =
  | ISetErrorValidate
  | IResetErrorValidate;

export interface IErrorValidateReducer {
  haveValidError: boolean;
  errorList: string[];
}

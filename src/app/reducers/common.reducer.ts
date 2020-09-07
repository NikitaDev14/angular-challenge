import { HttpErrorResponse } from '@angular/common/http';

import { CommonState, initialCommonState, loadedCommonState } from '../states/common.state';

type OmittedState<T> = Omit<T, keyof CommonState>;

export const initCommonStateReducer = <T extends CommonState>(state: OmittedState<T>): T => {
  return {
    ...state,
    ...initialCommonState,
  } as T;
};

export const loadedCommonStateReducer = <T extends CommonState>(state: OmittedState<T>): T => {
  return {
    ...state,
    ...loadedCommonState,
  } as T;
};

export const httpErrorCommonStateReducer = <T extends CommonState>(
  state: OmittedState<T>,
  error: HttpErrorResponse,
): T => {
  return {
    ...state,
    ...loadedCommonState,
    error,
  } as T;
};

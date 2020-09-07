import { HttpErrorResponse } from '@angular/common/http';

export interface CommonState {
  error: HttpErrorResponse;
  loading: boolean;
}

export const initialCommonState: CommonState = {
  error: null,
  loading: true,
};

export const loadedCommonState: CommonState = {
  error: null,
  loading: false,
};

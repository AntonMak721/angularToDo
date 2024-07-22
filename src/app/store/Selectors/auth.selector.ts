import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AUTH_FEATURE_KEY, AuthState} from '../Reducers/auth.reducer'

export const selectAuthState=
createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectLoding = createSelector(selectAuthState, (state) => state.isLoading);
export const selectError = createSelector(selectAuthState, (state) => state.error);
export const selectUser = createSelector(selectAuthState, (state) => state.user);
export const selectUserToken = createSelector(selectAuthState, (state) => state.user.token);
export const selectUserFirstName = createSelector(selectAuthState, (state) => state.user.firstName);
export const selectUserLastName = createSelector(selectAuthState, (state) => state.user.lastName);
export const selectUserImg = createSelector(selectAuthState, (state) => state.user.img);

// export const selectToken = createSelector(
//   selectLogin,
//   (state) => state.token
// );

// export const selectError = createSelector(
//   selectLogin,
//   (state) => state.error
// );

// export const selectIsLoading = createSelector(
//   selectLogin,
//   (state) => state.isLoading
// );
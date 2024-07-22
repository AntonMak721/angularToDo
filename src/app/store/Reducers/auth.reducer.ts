import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActionUnion from '../Actions/auth.actions';
import {UserInterface} from '../../models/user-interface';

export interface AuthState {
  isLogged: boolean;
  isLoading: boolean;
  error: string;
  user: UserInterface;
}

export const initialAuthState:AuthState = {
  isLogged: false,
  isLoading: false,
  error: '',
  user: {
    firstName: '',
    lastName: '',
    username: '',
    token: '',
    password: '',
    image: '',
  },
};

export const AUTH_FEATURE_KEY = 'auth';

export const authReducer = createReducer(initialAuthState,
  on(AuthActionUnion.login, state =>({...state,isLoading:true})),
  on(AuthActionUnion.loginSuccess, (state,{payload})=>({...state,user:payload,isLogged: true,isLoading: false})),
  on(AuthActionUnion.loginFailure, (state,{error})=>({...state,error:error,isLoading: false})),
  on(AuthActionUnion.logout,(state=>({...state,isLoading:false,isLogged:false}))),
  // on(AuthActionUnion.logoutSuccess, (state)=>({...state,isLoading: false})),
  // on(AuthActionUnion.logoutFailure, (state,{error})=>({...state,error:error,isLoading: false})),
)



// export function reducer(
//     state=initialAuthState,
//     action: AuthActionUnion
//   ):AuthState {
//     switch(action.type){
//       case AuthActionTypes.LOG_IN:
//         return {
//           ...state,
//           isLoading: true,
//         };

//       case AuthActionTypes.LOG_IN_SUCCESS:
//         return {
//           ...state,
//           user: action.payload ,
//           isLogged: true,
//           isLoading: false,
//           error: '',
//         };


//       case AuthActionTypes.LOG_OUT:
//         return {
//           ...state,
//           isLoading: true,
//        }

//       case AuthActionTypes.LOG_OUT_SUCCESS:
//         return {
//           ...state,
//           isLogged: false,
//           user: {
//             firstName: '',
//             lastName: '',
//             username: '',
//             token: '',
//             password: '',
//           },
//           isLoading: false,
//           error:'',
//         };
//       case AuthActionTypes.LOG_OUT_FAILURE:
//         return {
//           ...state,
//           isLoading: false
//         };
//     }
// };



import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, delay, put } from "redux-saga/effects";
import { loginSaga, setUse } from "./LoginSlide";

// export function* log(action: PayloadAction){
//     console.log("Log", action);
    
// }
interface LoginState {
    delay: number;
    email: string;
    password: string;
  }
function* handleLoginSage(action: PayloadAction<LoginState>){
    console.log("Waiting 3s");
    //Wait 2s
    yield delay(action.payload.delay);

    console.log("Waiting done dispatch action ");

    yield put(setUse(action.payload))

}
export default function* loginSage() {
    console.log("LoginSaga");
    
    yield takeLatest(loginSaga.toString(), handleLoginSage);
}
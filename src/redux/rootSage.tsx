import { all } from "redux-saga/effects"
import loginSage from "../views/Login/loginSaga"

export default function* rootSaga(){
    console.log("rootSaga")
    yield all([loginSage()])
}
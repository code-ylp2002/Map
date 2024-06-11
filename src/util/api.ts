import axios from "axios";
import {User} from "./type";
const loginUrl = "http://localhost:8088/user/login"
const registerUrl = "http://localhost:8088/user/regsiter"
export function login(user: User){
    return axios.post(loginUrl, user)
}

export function register(user: User){
    return axios.post(registerUrl, user)
}

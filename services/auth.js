import {URL_BASE_API} from "./config"

function signUp(email, password, typeUser) {
    const endpoint = typeUser === "user" ? "user" : "company"
    const URL = `${URL_BASE_API}/${endpoint}`
    const options =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ email, password }),
      }
    return fetch(URL, options) // regresa una promesa
}

function login(email, password) {
    const URL = `${URL_BASE_API}/login`
    const options =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ email, password }),
      }
    return fetch(URL, options) // regresa una promesa
}

export {
  signUp,
  login
}
import {URL_BASE_API} from "./config"

function updateUser(id, newData, token) {
    const URL = `${URL_BASE_API}/user/${id}`
    const options =  {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        mode: "cors",
        body: JSON.stringify(newData),
      }
    return fetch(URL, options) // regresa una promesa
}


export {
  updateUser
  }
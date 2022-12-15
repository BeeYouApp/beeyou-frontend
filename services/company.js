import {URL_BASE_API} from "./config"

function updateCompany(id, newData, token) {
  console.log(token)
    const URL = `${URL_BASE_API}/company/${id}`
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
    updateCompany
  }
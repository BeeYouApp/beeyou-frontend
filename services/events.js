import {URL_BASE_API} from "./config"

function createEvent(data, id, token) {
    const URL = `${URL_BASE_API}/events`
    const options =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        mode: "cors",
        body: JSON.stringify({ data, id}),
      }
    return fetch(URL, options) // regresa una promesa
}

function updateEvents(id, newData, token) {
    const URL = `${URL_BASE_API}/events/${id}`
    const options =  {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Autorization": token
        },
        mode: "cors",
        body: JSON.stringify(newData),
      }
    return fetch(URL, options) // regresa una promesa
}


export {
    createEvent,
    updateEvents
  }
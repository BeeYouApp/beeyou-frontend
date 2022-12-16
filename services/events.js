import {URL_BASE_API} from "./config"

function createEvent(name, topic, timeStart, timeEnd, cost, capacity, description) {
    const URL = `${URL_BASE_API}/events`
    const options =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ name, topic, timeStart, timeEnd, cost, capacity, description}),
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
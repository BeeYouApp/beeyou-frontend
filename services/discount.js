import {URL_BASE_API} from "./config"

function createDiscount(data, token) {
    const URL = `${URL_BASE_API}/discounts`
    const options =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        mode: "cors",
        body: JSON.stringify( data ),
      }
    return fetch(URL, options) // regresa una promesa
}

export {createDiscount}
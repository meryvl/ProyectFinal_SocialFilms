import { Backend_URL } from "../store/Fetch/Fetch"

export const log =  (email, password) => {
    return fetch(Backend_URL`/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify({ email: email, password: password }) 
    })
    .then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
      }).then(res => {
        const { jwt } = res
        return jwt
      })
    }


export default function login ({ username, password }) {
    return fetch(Backend_URL`/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    }).then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    }).then(res => {
      const { jwt } = res
      return jwt
    })
  }
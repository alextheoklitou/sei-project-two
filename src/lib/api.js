import axios from 'axios'

const baseUrl = 'https://rws-cards-api.herokuapp.com/api/v1'

export function getAllCards() {
  return axios.get(`${baseUrl}/cards`)
}

export function getCardOfTheDay() {
  return axios.get(`${baseUrl}/cards/random?n=1`)
}
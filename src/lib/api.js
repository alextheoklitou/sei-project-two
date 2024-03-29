import axios from 'axios'

const baseUrl = 'https://tarot-api.onrender.com/api/v1'

export function getAllCards() {
  return axios.get(`${baseUrl}/cards`)
}

export function getCardOfTheDay() {
  return axios.get(`${baseUrl}/cards/random?n=1`)
}

export function getCardsForReading() {
  return axios.get(`${baseUrl}/cards/random?n=3`)
}
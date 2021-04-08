import axios from 'axios'

const API = axios.create({baseURL: `https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1`})

export const fetchData = (placeCode,forecast) => API.get(`/places/${placeCode}/forecasts/${forecast}`)
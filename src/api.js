import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://mern-travel-map.herokuapp.com//api/'
})
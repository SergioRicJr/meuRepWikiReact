import axios from 'axios'

//toda vez que precisar chamar a Url 

export const api = axios.create({
    baseURL: 'https://api.github.com'
})
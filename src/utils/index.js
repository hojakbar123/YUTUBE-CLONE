import axios from "axios";

let apiKey = import.meta.env.API_KEY;

export const $api = axios.create({
    baseURL: 'https://youtube-v31.p.rapidapi.com',

    headers: {
        "X-RapidAPI-Key": '6b119f4d14mshe9fed886bb280fap1245b2jsne5a3f269f11d',
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
})
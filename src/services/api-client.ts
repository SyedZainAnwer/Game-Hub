import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1cdbf91c5c4d4beb98e64a6d771910c5'
    }
})
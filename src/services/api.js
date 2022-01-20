import axios from 'axios'

const http = axios.create({baseURL: 'https://api.on-mange-quoi.com',headers:{'Access-Control-Allow-Origin': '*'}})

class Api {
    static async fetch() {
        return http.get("/")
            .then((response) => {
                return response.data
            })
            .catch(() => {
                console.log('Le back ne marche pas ... étonnant')
                return false
            })
    }
}

export default Api

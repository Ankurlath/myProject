import axios from 'axios';

const api_url =""

export default function api() {
    axios.get(`${api_url}`, {
        "method": "GET",
        "headers": {
            "accept": "application/json"
        }
    })
        .then((response) => {
            console.log('response', response)
        })
        .catch((error) => {
            console.log('Error', error.response);
        })
}
import React from 'react'
import axios from 'axios'
export default class SchoollService {
    getSchoollTypes() {
        return axios.get("http://localhost:8080/api/schooll/getAllSchoollType")
    }
    getAllDto() {
        return axios.get("http://localhost:8080/api/schooll/getAllDto")
    }

}


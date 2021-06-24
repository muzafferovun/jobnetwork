import React from 'react'
import axios from 'axios'
export default class JobPropertieService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobpropertie/getAll")
    }

}

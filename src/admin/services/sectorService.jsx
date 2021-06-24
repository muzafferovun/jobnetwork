import React from 'react'
import axios from 'axios'
export default class SectorService {
    getAll() {
        return axios.get("http://localhost:8080/api/sector/getAll")
    }

}

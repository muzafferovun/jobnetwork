
import React from 'react'
import axios from 'axios'
export default class ProfessionService {
     getAll() {
        return axios.get("http://localhost:8080/api/profession/getAll")
    }
    addProfession(formData) {
        return axios.post("http://localhost:8080/api/profession/addProfession",formData,{
            headers: {
                        "Content-Type": "application/json",
                        "Accept": 'application/json'             }
        })
    }


}

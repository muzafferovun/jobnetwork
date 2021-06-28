
import axios from 'axios'
export default class WorkTypeService {
    getAll() {
        return axios.get("http://localhost:8080/api/worktype/getAll")
    }
    addWorkType(formData) {
        return axios.post("http://localhost:8080/api/worktype/addWorkType"
            ,formData
            ,{
                "Content-Type": "application/json",
                "Accept": 'application/json' 
            })
    }

}

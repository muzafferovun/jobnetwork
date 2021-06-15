import axios from 'axios'
import React from 'react'

export default class SessionControlService{
    getUser() {
        let ssid=sessionStorage.getItem("ssid").toString();
        return axios.post('http://localhost:8080/api/user/getAdminUser',
        {
            'sessionCode': ssid
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
        }).then((response) => {
           console.log("reactNativeDemo","response get details:"+response.data);
        })
        .catch((error) => {
           console.log("axios error:",error);
        });
    }

}

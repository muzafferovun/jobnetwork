import React,{useState,useEffect} from 'react'
import SessionControlService from './services/sessionControlService';

export default function AdminMainpage() {
    
    const [userData, setUserData] = useState({});
    useEffect(() => {
        let sessionControlService = new SessionControlService();
        sessionControlService.getUser().then(result => setUserData(result));
        
    }, [])
    return (
        <div>
           
        </div>
    )
}

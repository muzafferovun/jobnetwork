import React,{useState,useEffect} from 'react'
import SessionControlService from './services/sessionControlService';
import { Button, Card, Image } from 'semantic-ui-react'
import { useHistory } from 'react-router';
import NavbarAdmin from './layouts/NavbarAdmin';
import ContainerDesktop from './layouts/ContainerDesktop';

export default function AdminMainpage() {
    const history = useHistory();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        let sessionControlService = new SessionControlService();
        sessionControlService.getUser().then(result => setUserData(result.data.data));
     }, [])

     return (
        <div>
            {userData.id &&  <NavbarAdmin/>}
            {userData.id &&  <ContainerDesktop/>}
        </div>
    )
   
}

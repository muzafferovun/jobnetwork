import React, { useState, useEffect } from 'react';


import { Image } from 'semantic-ui-react'
import SchoollService from '../../../services/schoollService';
import { InputRequiredText } from '../../../../components/InputRequiredText';
import { InputText } from '../../../../components/InputText';
import { SelectInput } from '../../../../components/SelectInput';
import { ImageInput } from '../../../../components/ImageInput';
import CityService from '../../../../services/cityService';
import Button from '@material-ui/core/Button';
export default function AddForm() {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [schoolltype, setSchooltype] = useState("");
    const [city, setCity] = useState(0);
    const componentRef = React.useRef();

    const [schoolTypes, setSchoolTypes] = useState([]);
     const [cityTypes, setCityTypes] = useState([]);
        let schoollService=new SchoollService();
     if(schoolTypes.length==0)   schoollService.getSchoollTypes().then(result=>setSchoolTypes(result.data.data));
         let cityService=new CityService();
         if(cityTypes.length==0)     cityService.getAll().then(result=>setCityTypes(result.data.data));
    async function addItem() {
       
        let item = { schoolltype, name,avatar,website,city };
       
        let result = fetch("http://localhost:8080/api/schooll/addSchooll", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": '*/*'
            },
            body: JSON.stringify(item)
        });
        console.log(JSON.stringify(item));
        result = await (await result).json();
     
      
    }

    return (
        <div>
            <InputText text={setName} label="Schooll Name" />
            {avatar && <Image style={{ maxHeight: "200px",zIndex:10 }} src={`http://muzaffer.ibmtal.com/smallimage/${avatar}`} size='medium' rounded />}
          
            <SelectInput label="Schooll Type" selectValue={setSchooltype} items={schoolTypes}></SelectInput>
            <InputText text={setWebsite} label="Schooll Web Site" />
            <ImageInput setUploadImage={setAvatar} label="Schooll Avatar"></ImageInput>
            <SelectInput label="Schooll City" selectValue={setCity} items={cityTypes}></SelectInput>
            <Button variant="contained" color="primary" disableElevation onClick={(e)=>addItem()}>
            Add New Schooll
            </Button>       
        </div>
    )
}


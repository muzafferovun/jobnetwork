import React, { Component,useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react'
export const ImageInput = ({setUploadImage,label}) => {
    const [image, setImage] = useState("");
    const [imageLink, setImageLink] = useState("");
    const onFileChange=(e)=> {
        setImage( e.target.files[0])
    }
    
    
    const onSubmit=(e)=> {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        axios.post("http://muzaffer.ibmtal.com/loadimage.php", formData, {
        }).then(res => {
            setImageLink(res.data)
            setUploadImage(res.data)
        })
    }
    return (
        <div className="container">
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col-md-4">
                    {label} {imageLink && <Image style={{ maxHeight: "100px",zIndex:10 }} src={`http://muzaffer.ibmtal.com/smallimage/${imageLink}`} size='medium' rounded />}
                </div>
                <div className="col-md-4 ">
                    <div className="form-group">
                        <input type="file" onChange={(e)=>onFileChange(e)} />
                     </div>
                </div>
                <div className="col-md-4 ">
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
)
}

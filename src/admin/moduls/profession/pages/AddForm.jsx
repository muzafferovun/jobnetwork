import React,{useState} from 'react';
import{useFormik} from 'formik';
import * as yup from "yup";
import { Button,Form } from 'semantic-ui-react';
import ProfessionService from '../../../../services/professionService';
export default function AddForm() {
    const [returnData, setReturnData] = useState({})
    const professioService=new ProfessionService();
    const formik=useFormik({
        initialValues:{
            name:""
        },
        onSubmit:(values)=>{
            console.log(values);
            professioService.addProfession(values.name).then(
                result=>setReturnData(result)
            )
        },
        validationSchema:yup.object().shape({
            name:yup.string().required("boş geçme")
        })
    });
    return (
        <div>
           <Form onSumbit={formik.handleSubmit}>
                <Form.Field>
                    <Form.Input 
                    label="önyazi"
                    value={formik.values.name}
                     onChange={formik.handleChange }
                     id="name"
                     onBlur={formik.handleBlur}
                     error={formik.touched.name&&formik.errors.name}
                    />
                    <Button type="submit" color="violet">Kaydet</Button>
                </Form.Field>
           </Form>
        </div>
    )
}

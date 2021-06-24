
import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'

import {useDispatch} from "react-redux"
import { Image } from 'semantic-ui-react'
import {toast} from 'react-toastify'
import WorkTypeService from '../../../services/workTypeService';

export default function ListItems() {
    const dispatch = useDispatch()
    const [items, setItems] = useState([]);
        let actionService=new WorkTypeService();
    if(items.length==0)    actionService.getAll().then(result=>setItems(result.data.data))
        console.log(items);
    const handleAddToCart=(item)=>{
 
//        toast.success(`${product.productName} sepete Eklendi`);
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Logo</Table.HeaderCell>
                        <Table.HeaderCell>Work Type</Table.HeaderCell>
                         <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        items.map(item=>(

                     <Table.Row >
                        <Table.Cell>{item.avatar&&<Image style={{ maxHeight: "60px",zIndex:10 }} src={`http://muzaffer.ibmtal.com/smallimage/${item.avatar}`} size='medium' rounded />}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                         <Table.Cell>
                                <Button primary className="ui">Primary</Button>
                        </Table.Cell>
                    </Table.Row>
                       ))
                    }

                </Table.Body>

              </Table>
       </div>
    )
}

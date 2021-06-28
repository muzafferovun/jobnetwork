
import React, { useState,useEffect } from 'react'
import { Button, Icon, Label, Menu, Table,Image } from 'semantic-ui-react'

import {useDispatch} from "react-redux"

import JobPropertieService from '../../../services/jobPropertieService';


export default function ListItems() {
    const dispatch = useDispatch()
    const [items, setItems] = useState([]);
        let actionService=new JobPropertieService();
    if(items.length==0)    actionService.getAll().then(result=>setItems(result.data.data))
        console.log(items);
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Logo</Table.HeaderCell>
                        <Table.HeaderCell>Job Position Propertie</Table.HeaderCell>
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

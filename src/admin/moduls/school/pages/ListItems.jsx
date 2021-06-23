
import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'

import {useDispatch} from "react-redux"
import { Image } from 'semantic-ui-react'
import {toast} from 'react-toastify'
import SchoollService from '../../../services/schoollService';

export default function ListItems() {
    const dispatch = useDispatch()
    const [items, setItems] = useState([]);
        let actionService=new SchoollService();
    if(items.length==0)    actionService.getAllDto().then(result=>setItems(result.data))
        console.log(items.length);
    const handleAddToCart=(item)=>{
 
//        toast.success(`${product.productName} sepete Eklendi`);
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Logo</Table.HeaderCell>
                        <Table.HeaderCell>Schooll Name</Table.HeaderCell>
                        <Table.HeaderCell>Schooll Type</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Web Adress</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        items.map(item=>(

                     <Table.Row >
                        <Table.Cell>{item.avatar&&<Image style={{ maxHeight: "60px",zIndex:10 }} src={`http://muzaffer.ibmtal.com/smallimage/${item.avatar}`} size='medium' rounded />}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.schoollType}</Table.Cell>
                        <Table.Cell>{item.city}</Table.Cell>
                        <Table.Cell>{item.website}</Table.Cell>
                        <Table.Cell>
                                <Button primary className="ui">Primary</Button>
                        </Table.Cell>
                    </Table.Row>
                       ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                               
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
       </div>
    )
}

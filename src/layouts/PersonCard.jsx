import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
export default function PersonCard() {
    return (
        <div>
            <Card >
                <Card.Content>
                    
                    <Image floated='right' avatar spaced="right" src="https://avatars.githubusercontent.com/u/83140937?v=4"></Image>
                    <Card.Header>Muzaffer Övün</Card.Header>
                    <Card.Meta>Web Developer</Card.Meta>
                    <Card.Description>
                        Jenny requested permission to view your contact details
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
 
                 </Card.Content>
            </Card>

        </div>
    )
}

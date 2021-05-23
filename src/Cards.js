import React from 'react'
import {Card, Button} from 'react-bootstrap';
import "./Cards.css";
const Cards = () => {
   
    return (
        <div className="container">
            <div className="row mt-5 ">
                <div className="col-sm-3 col-3  my-auto "  >
                <Card className="abc" border="light" style={{ width: '18rem', backgroundColor: "#F1F1F1"}}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-vector/digital-banking_23-2147517376.jpg" style={{padding: "20px"}}/>
                    
                    <Card.Body>
                        <Card.Title style={{fontSize: "30px"}}>Bank</Card.Title>
                        <Card.Title><Button  variant="outline-danger">Go somewhere</Button></Card.Title>
                    </Card.Body>
                </Card>
                </div>

                <div className="col-sm-3 col-3 my-auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="col col-3 my-auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="col col-3 my-auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="col col-3 pt-3  mx-auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Cards

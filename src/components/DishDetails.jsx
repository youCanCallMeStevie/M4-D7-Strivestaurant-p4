import React from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import { DishComments } from './DishComments'

class DishDetails extends React.Component {
    state = {
        dish: null
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                {/* <Row className="my-2">
                    <Col md={3}>
                        <img src={'/' + this.state.dish.image} alt="dish" className="img-fluid" />
                    </Col>
                    <Col md={9}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.state.dish.name}</Card.Title>
                                <Card.Subtitle>
                                    <Badge variant="danger">{this.state.dish.label}</Badge>
                                </Card.Subtitle>
                                <Card.Text>
                                    {this.state.dish.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <DishComments selectedDish={this.state.dish} /> */}
            </Container>
        )
    }
}

export default DishDetails
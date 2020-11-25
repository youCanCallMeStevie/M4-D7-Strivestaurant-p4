import React, { Component } from "react";
import { Row, Col, Image, Badge, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export class SingleDish extends Component {
  render() {
    if (!this.props) {
      <Alert variant="danger" className="text-center">
        An error has occurred, please try again later
      </Alert>;
    } else {
      return (
        <>
          <Row>
            <Col md={8} className="ml-auto mr-auto">
              <Row>
                <Col md={4}>
                  <Link to={"/details/" + this.props.dish.id}>
                    <Image
                      src={this.props.dish.image}
                      className="my-2 w-100 h-auto"
                    />
                  </Link>
                </Col>
                <Col md={8} className="mt-auto mb-auto">
                  <h4>
                    {this.props.dish.name}
                    <Badge variant="warning" className="ml-2">
                      {this.props.dish.price}
                    </Badge>
                    <Badge variant="danger">{this.props.dish.label}</Badge>
                  </h4>
                  {this.props.dish.description}
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      );
    }
  }
}

export default SingleDish;

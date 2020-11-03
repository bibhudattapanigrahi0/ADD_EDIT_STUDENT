import React, { Component } from "react";

import { Button, Row, Col, Label } from "reactstrap";

import { connect } from "react-redux";
import { Control, Form, actions } from "react-redux-form";

import axios from "axios";

class Studentfee extends Component {
  render() {
    return (
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          axios.post(` http://localhost:8000`, global_form.fee).then((res) => {
            console.log(res);
            console.log(res.data);
          });
          console.log(global_form.fee);

          //alert("form submitted");
          this.props.dispatch(actions.reset("global_form.fee"));
        }}
      >
        <Row className="form-group">
          <Label htmlFor=".fee.fee1" md={2}>
            fee1
          </Label>
          <Col md={10}>
            <Control.text
              model=".fee.fee1"
              id="fee1"
              name="fee1"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fee.fee2" md={2}>
            fee2
          </Label>
          <Col md={10}>
            <Control.text
              model=".fee.fee2"
              id="fee2"
              name="fee2"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fee.fee3" md={2}>
            fee3
          </Label>
          <Col md={10}>
            <Control.text
              model=".fee.fee3"
              id="fee3"
              name="fee3"
              className="form-control"
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Col md={{ size: 3, offset: 2 }}>
            <Button type="submit" color="primary" md={4}>
              submit
            </Button>
          </Col>
          <Col md={{ size: 3, offset: 0 }}>
            <Control.reset model=".fee" md={4}>
              Clear Values
            </Control.reset>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(null)(Studentfee);

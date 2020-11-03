import React, { Component } from "react";

import { Button, Row, Col, Label } from "reactstrap";

import { connect } from "react-redux";
import { Control, Form, actions } from "react-redux-form";
import axios from "axios";

class StudentEnrollPassout extends Component {
  render() {
    return (
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          axios
            .post(` http://localhost:8000`, global_form.stu_enroll_passout)
            .then((res) => {
              console.log(res);
              console.log(res.data);
            });
          console.log(global_form.stu_enroll_passout);

          //alert("form submitted");
          this.props.dispatch(actions.reset("global_form.stu_enroll_passout"));
        }}
      >
        <Row className="form-group">
          <Label htmlFor=".stu_enroll_passout.admn_no" md={2}>
            admission_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_enroll_passout.admn_no"
              id="admn_no"
              name="admn_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_enroll_passout.enroll_year" md={2}>
            enroll_year
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_enroll_passout.enroll_year"
              id="enroll_year"
              name="enroll_year"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_enroll_passout.passout_year" md={2}>
            passout_year
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_enroll_passout.passout_year"
              id="passout_year"
              name="brnch_id"
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
            <Control.reset model=".stu_enroll_passout" md={4}>
              Clear Values
            </Control.reset>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(null)(StudentEnrollPassout);

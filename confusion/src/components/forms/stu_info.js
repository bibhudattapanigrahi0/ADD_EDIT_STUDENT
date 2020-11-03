import React, { Component } from "react";

import { Button, Row, Col, Label } from "reactstrap";

import { connect } from "react-redux";
import { Control, Form, actions } from "react-redux-form";
import axios from "axios";

class StudentInfo extends Component {
  render() {
    return (
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          axios
            .post(` http://localhost:8000`, global_form.stu_info)
            .then((res) => {
              console.log(res);
              console.log(res.data);
            });
          console.log(global_form.stu_info);

          //alert("form submitted");
          this.props.dispatch(actions.reset("global_form.stu_info"));
        }}
      >
        <Row className="form-group">
          <Label htmlFor=".stu_info.admn_no" md={2}>
            admission_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.admn_no"
              id="admn_no"
              name="admn_no"
              placeholder="admission_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.admn_date" md={2}>
            admn_date
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.admn_date"
              id="admn_date"
              name="admn_date"
              placeholder="admn_date"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.enrollment_no" md={2}>
            enrollment_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.enrollment_no"
              id="enrollment_no"
              name="enrollment_no"
              placeholder="enrollment_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.stu_type" md={2}>
            stu_type
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.stu_type"
              id="stu_type"
              name="stu_type"
              placeholder="stu_type"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.identification_mark" md={2}>
            identification_mark
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.identification_mark"
              id="identification_mark"
              name="identification_mark"
              placeholder="identification_mark"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.parent_mob_no" md={2}>
            parent_mob_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.parent_mob_no"
              id="parent_mob_no"
              name="parent_mob_no"
              placeholder="parent_mob_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.parent_email" md={2}>
            parent_email
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.parent_email"
              id="parent_email"
              name="parent_email"
              placeholder="parent_email"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.parent_landline_no" md={2}>
            parent_landline_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.parent_landline_no"
              id="parent_landline_no"
              name="parent_landline_no"
              placeholder="parent_landline_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.alt_mob_no" md={2}>
            alt_mob_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.alt_mob_no"
              id="alt_mob_no"
              name="alt_mob_no"
              placeholder="alt_mob_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.alt_email" md={2}>
            alt_email
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.alt_email"
              id="alt_email"
              name="alt_email"
              placeholder="alt_email"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.migration_cert" md={2}>
            migration_cert
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.migration_cert"
              id="migration_cert"
              name="migration_cert"
              placeholder="migration_cert"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.name_in_hindi" md={2}>
            name_in_hindi
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.name_in_hindi"
              id="name_in_hindi"
              name="name_in_hindi"
              placeholder="name_in_hindi"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_info.blood_group" md={2}>
            blood_group
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_info.blood_group"
              id="blood_group"
              name="blood_group"
              placeholder="blood_group"
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
            <Control.reset model=".stu_info" md={4}>
              Clear Values
            </Control.reset>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(null)(StudentInfo);

import React, { Component } from "react";
import { Button, Row, Col, Label } from "reactstrap";
import { connect } from "react-redux";
import { Control, Form } from "react-redux-form";
import axios from "axios";

class Fb_student_feedback extends Component {
  render() {
    return (
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          axios
            .post(` http://localhost:8000`, global_form.fb_student_feedback)
            .then((res) => {
              console.log(res);
              console.log(res.data);
            });
          console.log(global_form.fb_student_feedback);

          //alert("form submitted");
          //this.props.dispatch(actions.reset("global_form.student"));
        }}
      >
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.admn_no" md={2}>
            admission_no
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.admn_no"
              id="admn_no"
              name="admn_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.course_id" md={2}>
            course_id
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.course_id"
              id="course_id"
              name="course_id"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.branch_id" md={2}>
            branch_id
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.branch_id"
              id="branch_id"
              name="branch_id"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_1" md={2}>
            semester_1
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_1"
              id="semester_1"
              name="semester_1"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_2" md={2}>
            semester_2
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_2"
              id="semester_2"
              name="semester_2"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_3" md={2}>
            semester_3
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_3"
              id="semester_3"
              name="semester_3"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_4" md={2}>
            semester_4
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_4"
              id="semester_4"
              name="semester_4"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_5" md={2}>
            semester_5
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_5"
              id="semester_5"
              name="semester_5"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_6" md={2}>
            semester_6
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_6"
              id="semester_6"
              name="semester_6"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_7" md={2}>
            semester_7
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_7"
              id="semester_7"
              name="semester_7"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_8" md={2}>
            semester_8
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_8"
              id="semester_8"
              name="semester_8"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_9" md={2}>
            semester_9
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_9"
              id="semester_9"
              name="semester_9"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.semester_10" md={2}>
            semester_10
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.semester_10"
              id="semester_10"
              name="semester_10"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_1" md={2}>
            running_1
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_1"
              id="running_1"
              name="running_1"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_2" md={2}>
            running_2
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_2"
              id="running_2"
              name="running_2"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_3" md={2}>
            running_3
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_3"
              id="running_3"
              name="running_3"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_4" md={2}>
            running_4
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_4"
              id="running_4"
              name="running_4"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_5" md={2}>
            running_5
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_5"
              id="running_5"
              name="running_5"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_6" md={2}>
            running_6
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_6"
              id="running_6"
              name="running_6"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_7" md={2}>
            running_7
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_7"
              id="running_7"
              name="running_7"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_8" md={2}>
            running_8
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_8"
              id="running_8"
              name="running_8"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_9" md={2}>
            running_9
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_9"
              id="running_9"
              name="running_9"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".fb_student_feedback.running_10" md={2}>
            running_10
          </Label>
          <Col md={10}>
            <Control.text
              model=".fb_student_feedback.running_10"
              id="running_10"
              name="running_10"
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
            <Control.reset model=".student" md={4}>
              Clear Values
            </Control.reset>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(null)(Fb_student_feedback);

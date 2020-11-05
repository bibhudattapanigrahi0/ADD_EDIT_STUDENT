import React, { Component } from "react";
import { Button, Row, Col,FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { Control, Form, actions } from "react-redux-form";
import axios from "axios";

class Studentacad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      departments: [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science Engineering",
      ],
      banks: ["SBI", "ICICI", "PNB", "AB"],
      categories: ["General", "SC", "ST", "BC"],
      yesorno: ["Yes", "No", "I don't Want to disclose"],
    };
  }
  render() {
    return (
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          axios
            .post(` http://localhost:8000`, global_form.stu_acad)
            .then((res) => {
              console.log(res);
              console.log(res.data);
            });
          console.log(global_form.stu_acad);

          this.props.dispatch(actions.reset("global_form.stu_acad"));
        }}
      >
        <Row className="form-group">
          <Label htmlFor=".stu_acad.name" md={2}>
            Name
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.name"
              id="name"
              name="name"
              placeholder="name"
              className="form-control"
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Label htmlFor=".stu_acad.admn_no" md={2}>
            Admission No
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.admn_no"
              id="admn_no"
              name="admn_no"
              placeholder="admission_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_acad.enrollment_no" md={2}>
            Enrollment No
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.enrollment_no"
              id="enrollment_no"
              name="enrollment_no"
              placeholder="enrollment_no"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_acad.semester" md={2}>
            Semester
          </Label>
          <Col md={10}>
            <Control.select
              model=".stu_acad.semester"
              id="semester"
              name="semester"
              className="form-control"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Control.select>
          </Col>
        </Row>
       
        <Row className="form-group">
          <Label htmlFor=".stu_acad.grading_type" md={2}>
            Grading Type
          </Label>
          <Col md={10}>
            <Control.select
              model=".stu_acad.grading_type"
              id="grading_type"
              name="grading_type"
              className="form-control"
            >
              <option value="N">N</option>
              <option value="A">A</option>
              <option value="R">R</option>
            </Control.select>
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_acad.stu_type" md={2}>
            Category
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.stu_type"
              id="stu_type"
              name="stu_type"
              placeholder="stu_type"
              className="form-control"
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Label htmlFor=".stu_acad.adm_based_on" md={2}>
            Adm. Based On
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.adm_based_on"
              id="adm_based_on"
              name="adm_based_on"
              placeholder="adm_based_on"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor=".stu_acad.name_in_hindi" md={2}>
            Name in Hindi
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.name_in_hindi"
              id="name_in_hindi"
              name="name_in_hindi"
              placeholder="name_in_hindi"
              className="form-control"
            />
          </Col>
        </Row>
        
          <Row className="form-group">
          <Label htmlFor=".stu_acad.parent_landline_no" md={2}>
            Landline No
          </Label>
          <Col md={10}>
            <Control.text
              model=".stu_acad.parent_landline_no"
              id="parent_landline_no"
              name="parent_landline_no"
              placeholder="parent_landline_no"
              className="form-control"
            />
          </Col>
        </Row>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="parent_email" md={3}>
                  Parent Email
                </Label>
                <Col>
                  <Control
                    type="parent_email"
                    model=".stu_acad.parent_email"
                    className="form-control"
                    name="parent_email"
                    id="parent_email"
                    placeholder="Email"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="parent_mob_no" md={3}>
                  Parent Mobile
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.parent_mob_no"
                    className="form-control"
                    name="parent_mob_no"
                    id="parent_mob_no"
                    placeholder="Mobile No"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
        


        <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="alt_email" md={3}>
                  Alt Email
                </Label>
                <Col>
                  <Control
                    type="alt_email"
                    model=".stu_acad.alt_email"
                    className="form-control"
                    name="alt_email"
                    id="alt_email"
                    placeholder="Email"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="alt_mob_no" md={3}>
                  Alt Mobile
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.alt_mob_no"
                    className="form-control"
                    name="alt_mob_no"
                    id="alt_mob_no"
                    placeholder="Mobile No"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="fathers_occupation" md={3}>
                  Father's Occ.
                </Label>
                <Col>
                  <Control
                    type="fathers_occupation"
                    model=".stu_acad.fathers_occupation"
                    className="form-control"
                    name="fathers_occupation"
                    id="fathers_occupation"
                    placeholder="Occupation"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="mothers_occupation" md={3}>
                  Mother's Occ.
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.mothers_occupation"
                    className="form-control"
                    name="mothers_occupation"
                    id="mothers_occupation"
                    placeholder="Occupation"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="fathers_annual_income" md={3}>
                  Father's Annual Income
                </Label>
                <Col>
                  <Control
                    type="fathers_annual_income"
                    model=".stu_acad.fathers_annual_income"
                    className="form-control"
                    name="fathers_annual_income"
                    id="fathers_annual_income"
                    placeholder="Income"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="mothers_annual_income" md={3}>
                  Mother's Annual Income
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.mothers_annual_income"
                    className="form-control"
                    name="mothers_annual_income"
                    id="mothers_annual_income"
                    placeholder="Income"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="guardian_name" md={3}>
                  Guardian Name
                </Label>
                <Col>
                  <Control
                    type="guardian_name"
                    model=".stu_acad.guardian_name"
                    className="form-control"
                    name="guardian_name"
                    id="guardian_name"
                    placeholder="Name"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="guardian_relation" md={3}>
                  Guardian Relation
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.guardian_relation"
                    className="form-control"
                    name="guardian_relation"
                    id="guardian_relation"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="identification_mark" md={3}>
                  Id. Mark           
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.identification_mark"
                    className="form-control"
                    name="identification_mark"
                    id="identification_mark"
                    placeholder="identification mark"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="blood_group" md={3}>
                  Blood Group
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.blood_group"
                    className="form-control"
                    name="blood_group"
                    id="blood_group"
                    placeholder="blood group"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".stu_acad.bank_name"
                  className="form-control"
                  id="bank_name"
                  name="bank_name"
                >
                  <option value="">Bank Name</option>
                  {this.state.banks.map((value) => {
                    return <option value={value}>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="bank_accno" md={3}>
                  A/c Number
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.bank_accno"
                    className="form-control"
                    name="bank_accno"
                    id="bank_accno"
                    placeholder="Account Number"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="aadhaar_card_no" md={3}>
                  Adhaar No
                </Label>
                <Col>
                  <Control
                    type="aadhaar_card_no"
                    model=".stu_acad.aadhaar_card_no"
                    className="form-control"
                    name="aadhaar_card_no"
                    id="aadhaar_card_no"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="other_relevent_info" md={3}>
                  Other Rel. Info
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.other_relevent_info"
                    className="form-control"
                    name="other_relevent_info"
                    id="other_relevent_info"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="admn_date" md={3}>
                  Adm Date
                </Label>
                <Col>
                  <Control
                    type="admn_date"
                    model=".stu_acad.admn_date"
                    className="form-control"
                    name="admn_date"
                    id="admn_date"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="auth_id" md={3}>
                  Auth. Id
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.auth_id"
                    className="form-control"
                    name="auth_id"
                    id="auth_id"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
       
       

        <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="enroll_year" md={3}>
                  Enroll Year
                </Label>
                <Col>
                  <Control
                    type="enroll_year"
                    model=".stu_acad.enroll_year"
                    className="form-control"
                    name="enroll_year"
                    id="enroll_year"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="passout_year" md={3}>
                  Passout Year
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.passout_year"
                    className="form-control"
                    name="passout_year"
                    id="passout_year"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
       
       

        <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="iit_jee_rank" md={3}>
                  IIT-JEE Rank
                </Label>
                <Col>
                  <Control
                    type="iit_jee_rank"
                    model=".stu_acad.iit_jee_rank"
                    className="form-control"
                    name="iit_jee_rank"
                    id="iit_jee_rank"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="iit_jee_cat_rank" md={3}>
                  Category Rank
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.iit_jee_cat_rank"
                    className="form-control"
                    name="iit_jee_cat_rank"
                    id="iit_jee_cat_rank"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
       
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="cat_score" md={3}>
                  CAT Score
                </Label>
                <Col>
                  <Control
                    type="cat_score"
                    model=".stu_acad.cat_score"
                    className="form-control"
                    name="cat_score"
                    id="cat_score"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="gate_score" md={3}>
                  GATE Score
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.gate_score"
                    className="form-control"
                    name="gate_score"
                    id="gate_score"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
        

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="course_id" md={3}>
                  Course Id
                </Label>
                <Col>
                  <Control
                    type="course_id"
                    model=".stu_acad.course_id"
                    className="form-control"
                    name="course_id"
                    id="course_id"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="branch_id" md={3}>
                  Branch Id
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".stu_acad.branch_id"
                    className="form-control"
                    name="branch_id"
                    id="branch_id"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          
        <FormGroup row>
        <Col sm={6}>
              <FormGroup row>
                <Label for="extra_curr_act" md={3}>
                  Extra-Curricular Act.
                </Label>
                <Col>
                  <Control
                    type="extra_curr_act"
                    model=".stu_acad.extra_curr_act"
                    className="form-control"
                    name="extra_curr_act"
                    id="extra_curr_act"
                    placeholder=""
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="photopath" md={3}>
                  Migration Cert.
                </Label>
                <Col>
                  <Control.file
                    model=".stu_acad.photopath"
                    className="form-control"
                    id="photopath"
                    name="photopath"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
        <Row className="form-group">
          <Col md={{ size: 3, offset: 2 }}>
            <Button type="submit" color="primary" md={4}>
              submit
            </Button>
          </Col>
          <Col md={{ size: 3, offset: 0 }}>
            <Control.reset model=".stu_acad" md={4}>
              Clear Values
            </Control.reset>
          </Col>
        </Row>


      </Form>
    );
  }
}

export default connect(null)(Studentacad);

import React from "react";
import { Col, FormGroup, Label, Button, Container } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { Control, Form, actions } from "react-redux-form";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      departments: [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science Engineering",
      ],
      religions: ["Buddhist", "Christian", "Hindu", "Jain", "Muslim", "Sikh"],
      nationalities: ["Australian", "Indian", "South African", "Sri Lankan"],
      banks: ["SBI", "ICICI", "PNB", "AB"],
      categories: ["General", "SC", "ST", "BC"],
      yesorno: ["Yes", "No", "I don't Want to disclose"],
      countries: ["Australia", "England", "India", "Pakisthan", "sri Lanka"],
    };
  }

  render() {
    return (
      <Container>
        <Form
          autoComplete="off"
          noValidate
          model="global_form"
          onSubmit={(global_form) => {
            axios
              .post(`http://localhost:8000`, global_form.user_details)
              .then((res) => {
                console.log(res);
                console.log(res.data);
              });
            console.log(global_form.user_details);
            this.props.dispatch(actions.reset("global_form.user_details"));
          }}
        >
          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.salutation"
                  className="form-control"
                  id="salutation"
                  name="salutation"
                >
                  <option value={"Mr/Mrs"}>Mr/Mrs</option>
                  <option value={"Dr"}>Dr</option>
                  <option value={"Mr"}>Mr</option>
                  <option value={"Mrs"}>Mrs</option>
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="first_name" md={3}>
                  First Name
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.first_name"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="middle_name" md={3}>
                  Middle Name
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.middle_name"
                    className="form-control"
                    name="middle_name"
                    id="middle_name"
                    placeholder="Middle Name"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="last_name" md={3}>
                  Last Name
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.last_name"
                    className="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="father_name" md={3}>
                  Father Name
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.father_name"
                    className="form-control"
                    name="father_name"
                    id="father_name"
                    placeholder="Father Name"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="mother_name" md={3}>
                  Mother Name
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.mother_name"
                    className="form-control"
                    name="mother_name"
                    id="mother_name"
                    placeholder="Mother Name"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="dob" md={3}>
                  Date of Birth
                </Label>
                <Col>
                  <Control
                    type="date"
                    model=".user_details.dob"
                    className="form-control"
                    name="dob"
                    id="dob"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="birth_place" md={3}>
                  Birth Place
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.birth_place"
                    className="form-control"
                    name="birth_place"
                    id="birth_place"
                    placeholder="Birth Place"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="email" md={3}>
                  Email
                </Label>
                <Col>
                  <Control
                    type="email"
                    model=".user_details.email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="mobile_no" md={3}>
                  Mobile No
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.mobile_no"
                    className="form-control"
                    name="mobile_no"
                    id="mobile_no"
                    placeholder="Mobile No"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.sex"
                  className="form-control"
                  id="sex"
                  name="sex"
                >
                  <option value="">Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="idnwd">I don't want to disclose</option>
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.religion"
                  className="form-control"
                  id="religion"
                  name="religion"
                >
                  <option value="">Religion</option>
                  {this.state.religions.map((value) => {
                    return <option value={value}>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.nationality"
                  className="form-control"
                  id="nationality"
                  name="nationality"
                >
                  <option value="">Nationality</option>
                  {this.state.nationalities.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.kashmiri_immigrant"
                  className="form-control"
                  id="kashmiri_immigrant"
                  name="kashmiri_immigrant"
                >
                  <option value="">Kashmiri Immigrant</option>
                  {this.state.yesorno.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.category"
                  className="form-control"
                  id="category"
                  name="category"
                >
                  <option value="">Category</option>
                  {this.state.categories.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.allocated_category"
                  className="form-control"
                  id="allocated_category"
                  name="allocated_category"
                >
                  <option value="">Allocated Category</option>
                  {this.state.categories.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.marital_status"
                  className="form-control"
                  id="marital_status"
                  name="marital_status"
                >
                  <option value="">Married</option>
                  {this.state.yesorno.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.physically_challenged"
                  className="form-control"
                  id="physically_challenged"
                  name="physically_challenged"
                >
                  <option value="">Physically Challenged</option>
                  {this.state.yesorno.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup>
                <Control.select
                  model=".user_details.bank_name"
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
                    model=".user_details.bank_accno"
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
                <Label for="emp_allergy" md={3}>
                  Health Allergy
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.emp_allergy"
                    className="form-control"
                    name="emp_allergy"
                    id="emp_allergy"
                    placeholder="Health Allergy"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="emp_disease" md={3}>
                  Diseases
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.emp_disease"
                    className="form-control"
                    name="emp_disease"
                    id="emp_disease"
                    placeholder="Long term Disease"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="hobbies" md={3}>
                  Hobbies
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.hobbies"
                    className="form-control"
                    name="hobbies"
                    id="hobbies"
                    placeholder="hobbies"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="fav_past_time" md={3}>
                  Favourite Past Time
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.fav_past_time"
                    className="form-control"
                    name="fav_past_time"
                    id="fav_past_time"
                    placeholder="Favourite Past Time"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="address" md={3}>
                  Address
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.line1"
                    className="form-control"
                    name="line1"
                    id="line1"
                    placeholder="Line 1"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <Control.select
                model=".user_detais.country"
                className="form-control"
                id="country"
                name="country"
              >
                <option value="">Country</option>
                {this.state.countries.map((value) => {
                  return <option>{value}</option>;
                })}
              </Control.select>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Col md={{ offset: 3, size: 9 }}>
                  <Control
                    type="text"
                    model=".user_details.line2"
                    className="form-control"
                    name="line2"
                    id="line2"
                    placeholder="Line 2"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="state" md={3}>
                  State
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.state"
                    className="form-control"
                    name="state"
                    id="state"
                    placeholder="State"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Label for="city" md={3}>
                  City
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.city"
                    className="form-control"
                    name="city"
                    id="city"
                    placeholder="City"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="pincode" md={3}>
                  Pin Code
                </Label>
                <Col>
                  <Control
                    type="text"
                    model=".user_details.pincode"
                    className="form-control"
                    name="pincode"
                    id="pincode"
                    placeholder="Pin Code"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup row>
                <Control.select
                  model=".user_details.dept_id"
                  className="form-control"
                  id="dept_id"
                  name="dept_id"
                >
                  <option value="">Department</option>
                  {this.state.departments.map((value) => {
                    return <option>{value}</option>;
                  })}
                </Control.select>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup row>
                <Label for="photopath" md={3}>
                  Profile Pic
                </Label>
                <Col>
                  <Control.file
                    model=".user_details.photopath"
                    className="form-control"
                    id="photopath"
                    name="photopath"
                  />
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={{ offset: 5, size: 5 }}>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default connect(null)(UserDetails);

import React from "react";
import { useStep } from "react-hooks-helper";

import { Col, FormGroup, Label, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import { Control, Form } from "react-redux-form";

const steps = [
  { id: "personal_details" },
  { id: "fee_details" },
  { id: "semester_details" },
  { id: "other_details" },
  { id: "submit" },
];

function PersonalDetails({ navigation }) {
  const { next } = navigation;
  return (
    <Container>
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          console.log(global_form.test);
          next();
        }}
      >
        <FormGroup row>
          <Label for="first_name" md={3}>
            First Name
          </Label>
          <Col>
            <Control.text
              name="first_name"
              id="first_name"
              className="form-control"
              model=".test.first_name"
              placeholder="First Name"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={{ offset: 5, size: 5 }}>
            <Button color="primary" type="submit">
              Next
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
}

function FeeDetails({ navigation }) {
  const { previous, next } = navigation;
  return (
    <Container>
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          console.log(global_form.test);
          next();
        }}
      >
        <FormGroup row>
          <Label for="fee" md={3}>
            Fee
          </Label>
          <Col>
            <Control.text
              model=".test.fee"
              name="fee"
              id="fee"
              className="form-control"
              placeholder="Fee"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}>
            <Button color="primary" onClick={previous}>
              Previous
            </Button>
          </Col>
          <Col sm={6}>
            <Button color="primary" type="submit">
              Next
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
}

function SemesterDetails({ navigation }) {
  const { previous, next } = navigation;
  return (
    <Container>
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          console.log(global_form.test);
          next();
        }}
      >
        <FormGroup row>
          <Label for="current_semester" md={3}>
            Current Semester
          </Label>
          <Col>
            <Control.text
              name="current_semester"
              id="current_semester"
              className="form-control"
              model=".test.current_semester"
              placeholder="Current Semester"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}>
            <Button color="primary" onClick={previous}>
              Previous
            </Button>
          </Col>
          <Col sm={6}>
            <Button color="primary" type="submit">
              Next
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
}

function OtherDetails({ navigation }) {
  const { previous, go } = navigation;
  return (
    <Container>
      <Form
        model="global_form"
        onSubmit={(global_form) => {
          console.log(global_form.test);
          go("submit");
        }}
      >
        <FormGroup row>
          <Label for="nick_name" md={3}>
            Nick Name
          </Label>
          <Col>
            <Control.text
              name="nick_name"
              id="nick_name"
              model=".tset.nick_name"
              className="form-control"
              placeholder="Nick Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={6}>
            <Button color="primary" onClick={previous}>
              Previous
            </Button>
          </Col>
          <Col sm={6}>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
}

function Submit() {
  return (
    <Container>
      <h1>Thanks for filling the form</h1>
    </Container>
  );
}

function MultiStepForm() {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { navigation };

  switch (id) {
    case "personal_details":
      return <PersonalDetails {...props} />;
    case "fee_details":
      return <FeeDetails {...props} />;
    case "semester_details":
      return <SemesterDetails {...props} />;
    case "other_details":
      return <OtherDetails {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
}

class Main extends React.Component {
  render() {
    return <MultiStepForm />;
  }
}

export default connect(null)(Main);

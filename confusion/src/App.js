import React from "react";
import Input from "./components/Input";
import store from "./components/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <nav class="sidebar">
            <ul class="list">
              <li class="nav-item">
                <NavLink className="nav-link" to="/Fb_student_feedback">
                  student_feedback
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/hs_assigned_student_room">
                  hs_assigned_student_room
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/hs_student_allotment_list">
                  hs_student_allotment_list
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/reg_regular_form">
                  regular_form
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/stu_academic">
                  Student Details
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/stu_adm_fee">
                  Admission fee
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/user_details">
                  Personal Details
                </NavLink>
              </li>
            </ul>
          </nav>
          <Input />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

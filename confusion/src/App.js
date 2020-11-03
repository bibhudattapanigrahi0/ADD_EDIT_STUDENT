import React from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import store from './components/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <Provider store={ store }>

 <BrowserRouter>
    <div className="App">
    <nav class="sidebar" >


                <ul class="list" >
                <li class="nav-item" ><NavLink className="nav-link"  to='/Fb_student_feedback'>student_feedback</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/hs_assigned_student_room'>hs_assigned_student_room</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/hs_student_allotment_list'>hs_student_allotment_list</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/reg_regular_form'>regular_form</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_academic'>stu_academic</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_adm_fee'>stu_adm_fee</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_info'>stu_info</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_enroll_passout'>stu_enroll_passout</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_other_info'>stu_other_info</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_prep_data'>stu_prep_data</NavLink></li>
                </ul>

    </nav>
      <Input/>
    </div>
     </BrowserRouter>
    </Provider>
  );
}

export default App;

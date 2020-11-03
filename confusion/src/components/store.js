import { createStore} from 'redux';
import { combineForms } from 'react-redux-form';

let initialstate_test={
admn_no:"",
course_id:"",
branch_id:""
}
let initialstate_test1={
fee1:"",
fee2:"222",
fee3:"1111"
}

let global_state={
student:{
admn_no:"",
course_id:"",
branch_id:""
},
fee:{
fee1:"",
fee2:"222",
fee3:"1111"
},
user_details:{
  salutation:"",
  first_name:"",
  middle_name:"",
  last_name:"",
  father_name:"",
  dob:"",
  birth_place:"",
  email:"",
  mobile_no:"",
  sex:"",
  religion:"",
  nationality:"",
  kashmiri_immigrant:"",
  category:"",
  allocated_category:"",
  marital_status:"",
  physically_challenged:"",
  bank_name:"",
  bank_accno:"",
  emp_allergy:"",
  emp_disease:"",
  hobbies:"",
  fav_past_time:"",
  line1:"",
  line2:"",
  country:"",
  state:"",
  city:"",
  pincode:"",
  photopath:"",
}

}

const store = createStore(
   combineForms({
    global_form: global_state
  })
);

export default store;

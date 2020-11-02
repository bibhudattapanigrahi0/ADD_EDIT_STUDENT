import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { combineForms } from 'react-redux-form';



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
fb_student_feedback:{
  admn_no:"",
  course_id:"",
  branch_id:"",
  semester_1:"",
  semester_2:"",
  semester_3:"",
  semester_4:"",
  semester_5:"",
  semester_6:"",
  semester_7:"",
  semester_8:"",
  semester_9:"",
  semester_10:"",
  running_1:"",
  running_2:"",
  running_3:"",
  running_4:"",
  running_5:"",
  running_6:"",
  running_7:"",
  running_8:"",
  running_9:"",
  running_10:""

},
hs_assigned_student_room:{
id:"",
admn_no:"",
room_detail_id:"",
entry_datetime:"",
exit_datetime:"",
created_by:"",
created_date:"",
status:"",
type:"",
modify_by:"",
modify_date:"",
is_deleted:""


},
hs_student_allotment_list:{
  id:"",
  admn_no:"",
  hostel_name:"",
  hostel_detail_id:"",
  status:"",
  modify_date:"",
  is_deleted:""


},
reg_regular_form:{
  form_id:"",
  admn_no:"",
  fee_amt:"",
  fee_date:"",
  transaction_id:"",
  receipt_path:"",
  late_receipt_path:"",
  late_receipt_date:"",
  late_transaction_id:""
},
stu_academic:{
  admn_no:"",
  auth_id:"",
  enroll_year:"",
  adm_based_on:"",
  iit_jee_rank:"",
  iit_jee_cat_rank:"",
  cat_score:"",
  gate_score:"",
  course_id:"",
  branch_id:"",
  semester:"",
  other_rank:"",
  grading_type:""
},
stu_adm_fee:{
  admn_no:"",
  fee_mode:"",
  fee_amount:"",
  fee_in_favour:"",
  payment_made_on:"",
  transaction_id:""
},
stu_enroll_passout:{
  admn_no:"",
  enroll_year:"",
  passout_year:""
},
stu_info:{
  admn_no:"",
  admn_date:"",
  enrollment_no:"",
  stu_type:"",
  identification_mark:"",
  parent_mob_no:"",
  parent_email:"",
  parent_landline_no:"",
  alt_mob_no:"",
  alt_email:"",
  migration_cert:"",
  name_in_hindi:"",
  blood_group:""
},
stu_other_info:{
  admn_no:"",
  fathers_occupation:"",
  mothers_occupation:"",
  fathers_annual_income:"",
  mothers_annual_income:"",
  guardian_name:"",
  guardian_relation:"",
  bank_name:"",
  account_no:"",
  aadhaar_card_no:"",
  extra_curr_act:"",
  other_relevent_info:""
},
stu_prep_data:{
  admn_no:"",
  session_year:""
}

}

const store = createStore(

   combineForms({
    global_form: global_state
  })
);

export default store;

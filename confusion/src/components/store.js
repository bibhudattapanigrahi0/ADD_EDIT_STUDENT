import { createStore, applyMiddleware ,combineReducers} from 'redux';
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
}


}

const store = createStore(

   combineForms({
    global_form: global_state
  })
);

export default store;

import React from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import store from './components/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={ store }>

 <BrowserRouter>
    <div className="App">

      <Input/>
    </div>
     </BrowserRouter>
    </Provider>
  );
}

export default App;

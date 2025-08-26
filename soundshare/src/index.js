import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Myprofile from './pages/myprofile';
import Home from './pages/home';
import Newpost from './pages/newpost';


import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import { thunk } from 'redux-thunk'; 
const store = createStore(reducers, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Provider store={store}>
  
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/newpost/:id" element={<Newpost />} />
      <Route path="/login" element={< Login/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/myprofile" element={< Myprofile/>} />
      <Route path="/home" element={< Home/>} />
      <Route path="/newpost" element={< Newpost/>} />
    </Routes>

  </BrowserRouter>

  </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

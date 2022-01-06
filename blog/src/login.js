import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import person2 from './localStorage';
import './login.scss';
export function Login({setlocalstorage}) {
  const [userName, setUser] = useState('');
  const [userPassword, setPassword] = useState('');
  const navigate = useNavigate();

//   const onSuccess = () => {
//     Swal.fire({
//       title: "Login Successfully",
//       text: "You have logged in succesfully!",
//       icon: "success",
//       button: "OK",
//   });
//   }
//   const onFailure = () => {
//     Swal.fire({
//       title: "Invalid ",
//       text: "Invalid username and password!",
//       icon: "error",
//       button: "OK",
//   })
// }

  function handleCurrentData(e) {
    setUser(e.target.value);
  }
  function handleCurrentPassword(e) {
    setPassword(e.target.value);
  }

  function submit1(e) {
    console.log("elknfklenflkefnlkflkekllllll");
    e.preventDefault()
    if(person2(userName,userPassword)){
      localStorage.setItem('token',userName);
      // onSuccess();
      setlocalstorage(localStorage.getItem("token"));
      // setisloggedin(true);
      // navigate('/list');
    }
    else{
      // onFailure();
    }
    
  }



  return (
    
    // <div className="form1">
    //   <h1 id="heading">Log in</h1>
    //     <form >
    //       <label className="email1" htmlFor="email">Username</label><br /><br />
    //       <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="Enter username" required /><br /><br />

    //       <label className="email1" htmlFor="password">Password</label><br /><br />
    //       <input type="password" id="email" value={userPassword} onChange={handleCurrentPassword} name="password" placeholder="Enter password" required /><br /><br />
    //       <input className="signin" onClick={submit1} type="submit" defaultValue="Sign in" />
          
    //     </form>
    //   </div>
    <div className='logincard'>
      <div className='card1'>
        <div className='imagecard'>
           <img src='https://www.go.ooo/img/bg-img/Login.jpg' width="550px"/>
        </div>
        <div className='card2'>
        <p className='loginheading'>Login</p>
        <div className='avatarlogin'>
          <img src='https://media.istockphoto.com/vectors/user-profile-or-my-account-avatar-login-icon-with-man-male-face-smile-vector-id1224774389?k=20&m=1224774389&s=170667a&w=0&h=0u7Arol2CQZF-rG58MtRT8kIO9c5_zC2OvABYPmH6tU=' width="180px"/>
        </div>
        <form className='inputfield'>
        <i class="fa fa-user" aria-hidden="true"></i>
        <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="username" /><br /><br />
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="password" id="email" value={userPassword} onChange={handleCurrentPassword} name="password" placeholder="password"/>
        <div className="buttonlogin"onClick={submit1}>Log in</div>
        </form>
        </div>
      </div>
    </div>
  )
}
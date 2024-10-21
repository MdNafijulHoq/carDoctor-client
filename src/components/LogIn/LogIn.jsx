import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';

const LogIn = () => {

  const [showPass, setShowPass] = useState(false)
  const {user, logIn, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const login = {email, password}
    console.log(login)

    logIn(email, password)
    .then(result => {
      console.log(result.user)
      toast.success('User Login Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

        // TODO Get Access Token from Server side
        const user = {email}
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res => {
          console.log(res.data)
          if(res.data.success){
            navigate(location?.state ? location?.state : '/')
          }
        })

    })
    .catch(error => {
      console.log(error)
      Swal.fire({
        icon: "error",
        text: "Invalid Email/Password",
      });
    })

  }

  // * google Sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      // console.log(result)
      toast.success('Google Login Successfull', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
        navigate(location?.state ? location?.state : '/')
        
    })
    .catch(() => {
      
    })
  }
  
    return (
        <div className="hero bg-base-200 p-8 rounded-xl">
  <div className="hero-content flex-col lg:flex-row gap-32">
    <div className="w-1/2">
      <img src={login} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0">
      <form className="card-body" onSubmit={handleLogIn}>
      <h1 className="text-3xl font-semibold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email || ''} name='email' placeholder="sunny@gmail.com" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         
          <div className="relative">
              <input
                type={ showPass ? 'text' : 'password'}
                name="password"
                placeholder="******"
                className="input input-bordered w-full pr-16" /* pr-16 adds space for the "Show" */
                required
              />
              <p onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-sm text-blue-500">
                {
                  showPass ? 'Hide' : 'Show'
                }
              </p>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>  
      </form>
      <div className='text-center space-y-3 mb-10'>
           <p>Or Sign In with</p>
           <div>
            <button><FaFacebook size={20} color='blue'/></button>
            <button className='mr-4 ml-4'><FaLinkedinIn color='blue' size={20}/></button>
            <button onClick={handleGoogleSignIn}><FcGoogle size={20}/></button>
           </div>
           <p>Don't have an account? <Link to='/registration' className='text-orange-500 font-semibold'>SignUp</Link></p>
        </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;